import React, { Component, Fragment } from 'react'
import cn from 'classnames'
import { Badge } from '@cwds/components'
import DS from '@cwds/core'

const colorProps = Object.keys(DS.themeColors).map(color => ({ color }))

const pillProps = [{}, { pill: true }]

const renderFns = [
  props => <Badge {...props}>{props.color}</Badge>,
  props => (
    <Fragment>
      {['h1', 'h2', 'h3', 'h4', 'h5'].map((Tag, i) => (
        <Tag key={i}>
          Heading {Tag} <Badge {...props}>{props.color}</Badge>
        </Tag>
      ))}
    </Fragment>
  ),
]

const badgeInstances = (
  <Fragment>
    {renderFns.map(renderFn =>
      pillProps.map((pillProp, i) =>
        colorProps.map((colorProp, j) => (
          <div className="mb-1" key={`${i}${j}`}>
            {renderFn({ ...pillProp, ...colorProp })}
          </div>
        ))
      )
    )}
  </Fragment>
)

// Beware: big permutations will probably cause axe to timeout!
const getBackgrounds = includeThemeColors =>
  includeThemeColors ? ['white', ...Object.keys(DS.themeColors)] : ['white']

const BadgeSplats = React.memo(() => (
  <div>
    {getBackgrounds().map(color => (
      <div key={color} className="p-2">
        {badgeInstances}
      </div>
    ))}
  </div>
))

class BadgeSplatContainer extends Component {
  BG_COLORS = ['white', ...Object.keys(DS.themeColors)]
  state = { bgColor: 'white' }
  handleChangeBackgroundPicker = e => this.setState({ bgColor: e.target.value })
  renderBackgroundPicker = () => {
    return (
      <div className="float-right mt-3 mr-3">
        <label className="sr-only" htmlFor="a11y-badge-background-color-picker">
          Background Color:
        </label>
        <select
          id="a11y-badge-background-color-picker"
          value={this.state.bgColor}
          onChange={this.handleChangeBackgroundPicker}
          onBlur={this.handleChangeBackgroundPicker}
        >
          {this.BG_COLORS.map(bgColor => (
            <option key={bgColor} value={bgColor}>
              {bgColor}
            </option>
          ))}
        </select>
      </div>
    )
  }
  render() {
    return (
      <div className={`bg-${this.state.bgColor}`}>
        {this.renderBackgroundPicker()}
        <BadgeSplats />
      </div>
    )
  }
}

export default BadgeSplatContainer
