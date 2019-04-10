import React from 'react'
import cn from 'classnames'
import Styles from './ArticleTypography.module.scss'

export const Header = mkComponent('h2', Styles.Header)

export const Title = mkComponent('h3', Styles.Title)

export const Subheader = mkComponent('h4', Styles.Subheader)

export const Paragraph = mkComponent('p', Styles.Paragraph)

function mkComponent(Tag, cssModule) {
  return ({ className, ...props }) => (
    <Tag {...props} className={cn(className, cssModule)} />
  )
}
