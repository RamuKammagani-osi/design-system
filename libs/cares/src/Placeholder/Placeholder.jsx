import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import pick from 'lodash.pick'
import { Row, Col } from '@cwds/reactstrap'
import Styles from './Placeholder.module.scss'

const PlaceholderLine = ({ className, children, tag: Tag, ...props }) => (
  <Tag className={cn(Styles.Placeholder, className)} {...props}>
    &nbsp;
  </Tag>
)
PlaceholderLine.propTypes = {
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  tag: PropTypes.oneOfType([PropTypes.string, PropTypes.func]),
}
PlaceholderLine.defaultProps = {
  tag: 'div',
}

const Placeholder = ({
  grid,
  cols,
  rows,
  tag: Tag,
  className,
  ...restProps
}) => {
  const colProps = pick(restProps, ['xs', 'sm', 'md', 'lg', 'xl'])
  return grid ? (
    <Row className={Styles.PlaceholderRow}>
      {new Array(cols).fill().map((_, i) => {
        return (
          <Col key={i} className={Styles.PlaceholderCol} {...colProps}>
            {new Array(rows).fill().map((_, j) => (
              <Tag key={j} />
            ))}
          </Col>
        )
      })}
    </Row>
  ) : (
    <Tag className={className} />
  )
}
Placeholder.propTypes = {
  grid: PropTypes.bool,
  cols: PropTypes.number,
  rows: PropTypes.number,
  tag: PropTypes.oneOfType([PropTypes.node, PropTypes.string, PropTypes.func]),
  className: PropTypes.string,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
}
Placeholder.defaultProps = {
  cols: 1,
  rows: 4,
  tag: PlaceholderLine,
}

export default Placeholder
