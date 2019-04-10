import React from 'react'
import ReactInputMask from 'react-input-mask'
import PropTypes from 'prop-types'

const propTypes = {
  /** Mask string. Default format chars: 'a', '9', '*' */
  mask: PropTypes.string,
  /** Character to cover unfilled parts of the mask. */
  maskChar: PropTypes.string,
  /** Defines format characters with characters as a keys and corresponding RegExp strings as a values. */
  formatChars: PropTypes.object,
  /** Show mask when input is empty and has no focus. */
  alwaysShowMask: PropTypes.bool,
  /** Use inputRef instead of ref if you need input node to manage focus, selection, etc. */
  inputRef: PropTypes.func,
}

const defaultProps = {}

const InputMask = props => {
  return <ReactInputMask {...props} />
}

InputMask.propTypes = propTypes
InputMask.defaultProps = defaultProps

export default InputMask
