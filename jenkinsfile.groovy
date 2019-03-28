import groovy.transform.Field
import groovy.json.JsonOutput

@Library('jenkins-pipeline-utils') _

@Field
def newTag

// Get Secrets
GITHUB_CREDENTIALS_ID = '433ac100-b3c2-4519-b4d6-207c029a103b'

// Script Vars
PROJECT_NAME = 'Design System'
GITHUB_CI_USER = 'CWDS Jenkins'
GITHUB_CI_EMAIL = 'cwdsdoeteam@osi.ca.gov'
GITHUB_REPO_URL = 'https://github.com/ca-cwds/design-system'
GITHUB_HOOK_PARAMS_TOKEN = 'design-system-master'
GITHUB_LABEL_RELEASE = 'release'
SLACK_WEBHOOK_URL = 'https://hooks.slack.com/services/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'

timestamps {
  switch (env.BUILD_JOB_TYPE) {
    case 'master':
      masterPipeline()
      break
    default:
      pullRequestPipeline()
  }
}

//
// Pipelines
//

/**
 * Creates pull request pipeline
 *
 * The PR pipeline is triggered by GitHub pull request (PR) events.
 */
def pullRequestPipeline() {
  node('linux') {
    def triggerProperties = githubPullRequestBuilderTriggerProperties()
    properties([
      githubConfigProperties(GITHUB_REPO_URL),
      pipelineTriggers([triggerProperties]),
      buildDiscarderDefaults()
    ])
    try {
      stage('Checkout') {
        deleteDir()
        checkout scm
      }
      docker.image('node:lts').inside("-u 0 --env CI=true") {
        stage('Bootstrap') {
          sh "yarn --production=false --non-interactive --frozen-lockfile --silent --no-progress"
          sh "yarn lerna bootstrap"
        }
        stage('Lint') {
          sh "yarn lint --format tap"
        }
        stage('Unit Test') {
          sh "yarn test"
        }
        stage('Build Pkgs') {
          sh "yarn build:libs"
        }
        stage('Build Site') {
          sh "yarn build:www"
        }
      }
    } catch (Exception exception) {
      notifySlack(SLACK_WEBHOOK_URL, PROJECT_NAME, exception)
      currentBuild.result = 'FAILURE'
      throw exception
    } finally {
      stage('Cleanup') {
        cleanWs()
      }
    }
  }
}

/**
 * Creates master pipeline
 *
 * The master pipeline runs after a PR has been merged to the master branch. If
 * the `release` label is present in the PR labels, the public packages are
 * published to npm.
 */
def masterPipeline() {
  node('linux') {
    def triggerProperties = pullRequestMergedTriggerProperties(GITHUB_HOOK_PARAMS_TOKEN)

    /**
     * The GitHub PullRequestEvent#pull_request object
     *
     * NOTE: The variable naming is confusing here. The payload of the webhook is
     * the PullRequestEvent, but what is assigned to env.pull_reqeust_event in this
     * context is the GitHub PullRequest object itself.
     *
     * Links:
     *
     *   - [PullRequestEvent](https://developer.github.com/v3/activity/events/types/#pullrequestevent)
     *   - [PullRequest](https://developer.github.com/v3/pulls/#response)
     */
    def mergedPR = readJSON text: env.pull_request_event

    def doRelease = mergedPR.labels.any { it.name == GITHUB_LABEL_RELEASE }

    properties([
      githubConfigProperties(GITHUB_REPO_URL),
      pipelineTriggers([triggerProperties]),
      buildDiscarderDefaults('master')
    ])
    try {
      stage('Checkout') {
        deleteDir()
        checkout scm
      }
      docker.image('node:lts').inside("-u 0 --env CI=true") {
        stage('Bootstrap') {
          sh "git config --global user.name ${GITHUB_CI_USER}"
          sh "git config --global user.email ${GITHUB_CI_EMAIL}"
          sh "git config --global core.sshCommand 'ssh -o UserKnownHostsFile=/dev/null -o StrictHostKeyChecking=no'"
          sh "git checkout master"
          sh "yarn --production=false --non-interactive --frozen-lockfile --silent --no-progress"
          sh "yarn lerna bootstrap"
        }
        stage('Lint') {
          sh "yarn lint --format tap"
        }
        stage('Unit Test') {
          sh "yarn test"
        }
        stage('Build Pkgs') {
          sh "yarn build:libs"
        }
        stage('Release') {
          if (doRelease) {
            assert mergedPR.state == 'closed'
            assert mergedPR.base.ref == 'master'
            withCredentials([string(credentialsId: 'NPM_CREDENTIALS_ID', variable: 'NPM_TOKEN')]) {
              sh "npm config set '//registry.npmjs.org/:_authToken' ${NPM_TOKEN}"
              sshagent(credentials: [GITHUB_CREDENTIALS_ID]) {
                sh "yarn release:publish --yes"
              }
            }
          } else {
            echo "Skipping publish because the `${GITHUB_LABEL_RELEASE}` was not applied."
          }
        }
      }
    } catch(Exception exception) {
      notifySlack(SLACK_WEBHOOK_URL, PROJECT_NAME, exception)
      currentBuild.result = 'FAILURE'
      throw exception
    } finally {
      stage('Cleanup') {
        cleanWs()
      }
    }
  }
}
