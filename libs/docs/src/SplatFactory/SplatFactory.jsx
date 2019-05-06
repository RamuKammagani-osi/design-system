import React from 'react'
import PropTypes from 'prop-types'

const propTypes = {
  component: PropTypes.any,
  combinations: PropTypes.arrayOf(PropTypes.object),
  options: PropTypes.arrayOf(
    PropTypes.arrayOf(
      PropTypes.oneOfType([PropTypes.string, PropTypes.arrayOf(PropTypes.any)])
    )
  ),
}

const SplatFactory = ({ component: Component, options, combinations }) => {
  if (combinations) {
    return combinations.map((d, i) => <Component key={i} {...d} />)
  }
  return options
    .reduce((acc, [prop, vals]) => {
      const out = []
      const newPropVals = vals.map(val => ({ [prop]: val }))
      for (const j of newPropVals) {
        if (acc.length) {
          for (const k of acc) {
            out.push({ ...k, ...j })
          }
        } else {
          out.push(j)
        }
      }
      return out
    }, [])
    .map((d, i) => <Component key={i} {...d} />)
}

SplatFactory.propTypes = propTypes

export default SplatFactory
