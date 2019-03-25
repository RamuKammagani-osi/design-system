import React, { Component, Fragment } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { MDXProvider } from '@mdx-js/tag'
import { CaresProvider, JumpToTop } from '@cwds/components'
import componentMap from './MDXComponentProviderMappings'
import appConfig from './config'

import ScrollToTop from './ScrollToTop'
import Status from './modules/status'
import Home from './modules/home'
import CoreStyles from './modules/core-style'
import LabsPage from './modules/labs'
import Components from './modules/components'
import AboutCares from './modules/about-cares'
import FacilityProfile from './demos/FacilityProfile'
import ReassessmentForm from './demos/ReassessmentForm'
import MessageArea from './demos/MesssageArea'
import PageTemplates from './examples/PageTemplates'
import CardHeaderDemo from './demos/CardHeaders'
import ToggleDemos from './demos/ToggleDemos'

class App extends Component {
  render() {
    return (
      <MDXProvider components={componentMap}>
        <CaresProvider {...appConfig}>
          <Router>
            <ScrollToTop>
              <Fragment>
                <Route exact path="/" component={Home} />
                <Route path="/core-style" component={CoreStyles} />
                <Route path="/labs" component={LabsPage} />
                <Route path="/components" component={Components} />
                <Route path="/status" component={Status} />
                <Route path="/about-cares" component={AboutCares} />
                <Route
                  path="/demo/facility-profile"
                  component={FacilityProfile}
                />
                <Route
                  path="/demo/reassessment-form"
                  component={ReassessmentForm}
                />
                <Route path="/demo/message-area" component={MessageArea} />
                <Route path="/demo/card-header" component={CardHeaderDemo} />
                <Route path="/demo/toggles" component={ToggleDemos} />
                <Route
                  path="/__examples__/page-templates"
                  component={PageTemplates}
                />
                <JumpToTop />
              </Fragment>
            </ScrollToTop>
          </Router>
        </CaresProvider>
      </MDXProvider>
    )
  }
}

export default App
