import React from 'react'
import {
  AnchorLink,
  CodeBlock,
  Header,
  Title,
  Subheader,
  Paragraph,
  MDXArticleWrapper,
} from '@cwds/docs'

const getLanguage = (classNames, RE = /^language-/) =>
  classNames
    .split(/\s/)
    .find(className => RE.test(className))
    .replace(RE, '')

export default {
  h1: props => <AnchorLink {...props} tag="h1" />,
  h2: props => <AnchorLink {...props} tag={Header} />,
  h3: props => <AnchorLink {...props} tag={Title} />,
  h4: props => <AnchorLink {...props} tag={Subheader} />,
  p: Paragraph,
  pre: props => {
    let code
    try {
      code = React.Children.only(props.children)
    } catch (err) {
      return <pre {...props} />
    }
    return (
      <CodeBlock language={getLanguage(code.props.props.className)}>
        {code.props.children}
      </CodeBlock>
    )
  },
  wrapper: MDXArticleWrapper,
}
