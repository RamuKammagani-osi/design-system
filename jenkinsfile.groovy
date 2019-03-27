import groovy.transform.Field
import groovy.json.JsonOutput

@Library('jenkins-pipeline-utils') _

@Field
def newTag

// Get Secrets
GITHUB_CREDENTIALS_ID = '433ac100-b3c2-4519-b4d6-207c029a103b'
NPM_CREDENTIALS_ID = '13dbf218-bc6d-4df0-b2c8-4ede7ee9a4f0'

// Script Vars
PROJECT_NAME = 'Design System'
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
    properties([
      githubConfigProperties(GITHUB_REPO_URL),
      pipelineTriggers([triggerProperties]),
      buildDiscarderDefaults('master')
    ])
    try {
      def doRelease = env.pull_request.event.labels.contains(GITHUB_LABEL_RELEASE)
      stage('Checkout') {
        deleteDir()
        checkout scm
      }
      stage('Jenkins Guess and Check') {
        // echo sh(script: 'env|sort', returnStdout: true)
        echo "${env.pull_request}"
        sh "exit 1"
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
        stage('Publish Pkgs') {
          if (doRelease) {
            sh "yarn config set '//registry.npmjs.org/:_authToken' ${NPM_CREDENTIALS_ID}"
            sh "yarn release:publish --yes"
          } else {
            echo "Skipping publish to npm"
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
