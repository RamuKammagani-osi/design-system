import React from 'react'
import set from 'lodash.set'
import cn from 'classnames'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter'
import tomorrow from 'react-syntax-highlighter/dist/styles/prism/tomorrow'

const customStyle = tomorrow

set(customStyle, ['pre[class*="language-"]', 'borderRadius'], 'none')
set(customStyle, ['pre[class*="language-"]', 'paddingBottom'], '0.75rem')

const CodeBlock = props => (
  <SyntaxHighlighter
    {...props}
    className={cn(props.className, 'my-3')}
    style={customStyle}
  />
)
CodeBlock.defaultProps = {
  language: 'jsx',
}

export default CodeBlock
