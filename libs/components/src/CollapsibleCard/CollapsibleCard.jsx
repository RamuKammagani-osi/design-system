import React from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import { Button, Card, Collapse, CardHeader, Util } from '@cwds/reactstrap'
import { Icon } from '@cwds/icons'
import Styles from './CollapsibleCard.module.scss'

const CollapsibleCard = ({
  CardHeader: CardHeaderComponent,
  onToggle,
  children,
  isOpen,
  initialClosed,
  ...props
}) => {
  let header
  const panelChildren = []
  React.Children.map(children, child => {
    if (child.type === CardHeaderComponent) {
      header = child
    } else {
      panelChildren.push(child)
    }
  })
  const { children: headerChildren, ...headerProps } = header.props
  return (
    <Card {...props}>
      <CardHeader {...headerProps}>
        <div className={cn('align-items-start', Styles.HeaderWrapper)}>
          <div className={cn(Styles.HeaderChildrenWrapper)}>
            {headerChildren}
          </div>
          <Button
            size="sm"
            className="bg-transparent border-0 ml-3"
            onClick={onToggle}
          >
            <Icon
              name="chevron-down"
              rotation={!isOpen ? undefined : Util.ROTATION.FLIP}
            />
          </Button>
        </div>
      </CardHeader>
      <Collapse isOpen={isOpen}>{panelChildren}</Collapse>
    </Card>
  )
}

CollapsibleCard.propTypes = {
  CardHeader: PropTypes.func,
  children: PropTypes.oneOfType([
    PropTypes.node,
    PropTypes.arrayOf(PropTypes.node),
  ]),
  isOpen: PropTypes.bool,
  initialClosed: PropTypes.bool,
  onToggle: PropTypes.func,
}

CollapsibleCard.defaultProps = {
  CardHeader,
  isOpen: true,
}

export default CollapsibleCard
