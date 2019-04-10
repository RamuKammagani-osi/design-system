import React from 'react'
import cn from 'classnames'
import styles from './Logo.module.scss'

const propTypes = {}

const defaultProps = {}

const Logo = () => (
  <span className={cn(styles.Logo, 'text-white')}>CWS-CARES</span>
)

export const LogoSVG = () => {
  return (
    <svg
      className={cn(styles.Logo)}
      xmlns="http://www.w3.org/2000/svg"
      viewBox="-50 -50 100 100"
    >
      <rect
        id="background"
        x="-50"
        y="-50"
        width="100"
        height="100"
        rx="4"
        fill="#f90"
      />
      <rect
        id="top-left"
        x="-50"
        y="-50"
        width="50"
        height="50"
        rx="4"
        fill="#ffb13b"
      />
      <rect id="bottom-right" width="50" height="50" rx="4" fill="#de8500" />
      <use stroke="#f90" strokeWidth="22.6" />
      <circle r="26" />
      <use stroke="#000" strokeWidth="12" />
      <g id="a">
        <g id="b">
          <g id="c">
            <circle id="n" cy="-31.6" r="7.1" fill="#fff" />
            <path d="m0 31.6v-63.2" stroke="#fff" strokeWidth="10" />
            <use y="63.2" />
          </g>
          <use transform="rotate(90)" />
        </g>
        <use transform="rotate(45)" />
      </g>
      <path
        id="text-backdrop"
        d="m44.68 0v40c0 3.333-1.667 5-5 5h-79.38c-3.333 0-5-1.667-5-5v-40"
      />
      <path
        id="shine"
        d="m36 4.21c2.9 0 5.3 2.4 5.3 5.3v18c-27.6-3.4-54.9-8-82-7.7v-10.2c0-2.93 2.4-5.3 5.3-5.3z"
        fill="#3f3f3f"
      />
      <use stroke="#000" strokeWidth="7.4" />
      <g id="svg-text" stroke="#fff" strokeWidth="6.4">
        <g id="s">
          <path
            fill="none"
            d="m-31.74 31.17a8.26 8.26 0 1 0 8.26 -8.26 8.26 8.26 0 1 1 8.26 -8.26M23.23 23h8.288v 8.26a8.26 8.26 0 0 1 -16.52 0v-16.52a8.26 8.26 0 0 1 16.52 0"
          />
          <g strokeWidth=".5" stroke="#000">
            <path
              d="m4.76 3h6.83l-8.24 39.8h-6.85l-8.26-39.8h6.85l4.84 23.3z"
              fill="#fff"
            />
            <path
              d="m23.23 19.55v6.9m4.838-11.71h6.9m-70.16 16.43h6.9m9.62-16.52h6.9"
              strokeLinecap="square"
            />
          </g>
        </g>
      </g>
    </svg>
  )
}

Logo.propTypes = propTypes
Logo.defaultProps = defaultProps

export default Logo
