import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Icon } from '@cwds/icons'
import Styles from './Avatar.module.scss'
import { SIZES_ALL, isValidSize } from '../utils/design-system'
import DS from '@cwds/core'

const propTypes = {
  /** Image URL (eg; img[src]) */
  imgUrl: PropTypes.string,
  /** DS size enum */
  size: PropTypes.oneOf(['xs', 'sm', 'md', 'lg', 'xl']),
  /** Text fallback (e.g. initials) */
  text: PropTypes.string,
  /** Invert the color scheme? */
  invert: PropTypes.bool,
  /** Alernative text */
  alt: PropTypes.string,
}

const defaultProps = {
  size: 'md',
  invert: false,
  alt: '',
}

const Avatar = ({ imgUrl, alt, size, text, invert }) => {
  const classes = cn(
    Styles.wrapper,
    Styles[`size-${isValidSize(size, SIZES_ALL.MD)}`],
    {
      [Styles.inverted]: invert,
    }
  )
  if (imgUrl) {
    return <img src={imgUrl} className={classes} alt={alt} />
  }
  if (text) {
    return (
      <div className={classes}>
        <div className={cn(Styles.inner)}>{text}</div>
      </div>
    )
  }
  return (
    <div className={classes}>
      <Icon
        name="user"
        className={cn(Styles.inner)}
        color={invert ? DS.themeColors.info : DS.colors.white}
        alt={alt}
      />
    </div>
  )
}

Avatar.propTypes = propTypes
Avatar.defaultProps = defaultProps

export default Avatar
