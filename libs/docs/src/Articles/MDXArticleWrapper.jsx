import React from 'react'
import cn from 'classnames'
import Styles from './ArticleTypography.module.scss'

export default props => (
  <div {...props} className={cn(Styles.MDXArticleWrapper)} />
)
