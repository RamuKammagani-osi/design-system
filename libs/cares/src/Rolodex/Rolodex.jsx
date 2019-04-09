import React, { Component } from 'react'
import PropTypes from 'prop-types'
import cn from 'classnames'
import uniqueId from 'lodash.uniqueid'
import { Card, CardHeader, CardBody, CardFooter, Util } from '@cwds/reactstrap'
import RolodexHeader from './RolodexHeader'
import RolodexPanel from './RolodexPanel'
import Styles from './Rolodex.module.scss'

const keyCodes = Util.keyCodes

class Rolodex extends Component {
  static propTypes = {
    animate: PropTypes.bool,
    children: PropTypes.oneOfType([
      PropTypes.node,
      PropTypes.arrayOf(PropTypes.node),
    ]),
    className: PropTypes.string,
    collapsible: PropTypes.bool,
    exclusive: PropTypes.bool,
    initOpenKeys: PropTypes.arrayOf(PropTypes.string),
    level: PropTypes.number,
  }
  static defaultProps = {
    initOpenKeys: [],
  }
  ALLOWED_CHILD_TYPES = [Card]
  ALLOWED_GRANDCHILD_TYPES = [CardHeader, CardBody, CardFooter]
  rolodexId = uniqueId()
  constructor(props) {
    super(props)

    this.toggleCard = this.toggleCard.bind(this)
    this.handleKeyDown = this.handleKeyDown.bind(this)

    this.validateChildren()
    this.state = {
      keys: this.initKeys(),
    }
  }
  initKeys() {
    const keys = []
    React.Children.forEach(this.props.children, card => {
      keys.push({
        key: card.key,
        isOpen: this.props.initOpenKeys.indexOf(card.key) > -1,
        headerId: `rolodex-${this.rolodexId}__header-${card.key}`,
        panelId: `rolodex-${this.rolodexId}__panel-${card.key}`,
        ref: React.createRef(),
      })
    })
    return keys
  }
  validateChildren() {
    if (!React.Children.count(this.props.children)) {
      throw new Error('Requires at least one child node')
    }
    React.Children.forEach(this.props.children, child => {
      if (this.ALLOWED_CHILD_TYPES.indexOf(child.type) === -1) {
        throw new Error('Encountered invalid child component!')
      }
      React.Children.forEach(child.props.children, grandchild => {
        if (this.ALLOWED_GRANDCHILD_TYPES.indexOf(grandchild.type) === -1) {
          throw new Error('Encountered invalid child component!')
        }
      })
    })
  }
  toggleCard(e, key) {
    if (e.currentTarget.getAttribute('aria-disabled') === 'true') {
      e.preventDefault()
      return
    }
    const { exclusive } = this.props
    this.setState({
      keys: this.state.keys.map(d => ({
        ...d,
        isOpen: d.key !== key ? (exclusive ? false : d.isOpen) : !d.isOpen,
      })),
    })
  }
  handleKeyDown(e, key) {
    if ([keyCodes.space, keyCodes.enter].indexOf(e.which) > -1) {
      e.target.click()
    }
    if (
      [keyCodes.up, keyCodes.down].indexOf(e.which) > -1 ||
      ([keyCodes.n, keyCodes.p].indexOf(e.which) > -1 && e.ctrlKey)
    ) {
      let newIndex
      const index = this.state.keys.findIndex(d => d.key === key)
      if (e.which === keyCodes.up || (e.which === keyCodes.p && e.ctrlKey)) {
        newIndex = index > 0 ? index - 1 : this.state.keys.length - 1
      } else if (
        e.which === keyCodes.down ||
        (e.which === keyCodes.n && e.ctrlKey)
      ) {
        newIndex = index >= this.state.keys.length - 1 ? 0 : index + 1
      }
      this.setFocus(newIndex)
    }
  }
  setFocus(index) {
    const { ref } = this.state.keys[index]
    ref.current.focus()
  }
  isDisabled() {
    return false
  }
  render() {
    const {
      className,
      exclusive,
      collapsible,
      animate,
      level,
      initOpenKeys,
      ...restProps
    } = this.props
    return (
      <div
        {...restProps}
        ref={el => (this.el = el)}
        className={cn('mb-3', Styles.Rolodex, className)}
      >
        {React.Children.map(this.props.children, card => {
          const [cardHeader, ...restCardParts] = React.Children.toArray(
            card.props.children
          )
          const { isOpen, headerId, panelId, ref } = this.state.keys.find(
            ({ key }) => key === card.key
          )
          return React.cloneElement(card, {
            className: cn(card.props.className, 'mb-0'),
            children: (
              <React.Fragment>
                <RolodexHeader
                  {...cardHeader.props}
                  isOpen={isOpen}
                  headerId={headerId}
                  panelId={panelId}
                  onClick={e => this.toggleCard(e, card.key)}
                  onKeyDown={e => this.handleKeyDown(e, card.key)}
                  disabled={this.isDisabled(card.key)}
                  ref={ref}
                >
                  {cardHeader.props.children}
                </RolodexHeader>
                <RolodexPanel
                  isOpen={isOpen}
                  animate={this.props.animate}
                  panelId={panelId}
                  headerId={headerId}
                >
                  {restCardParts}
                </RolodexPanel>
              </React.Fragment>
            ),
          })
        })}
      </div>
    )
  }
}

export default Rolodex
