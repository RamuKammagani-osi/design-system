import React from 'react'
import cn from 'classnames'
import { Container } from '@cwds/reactstrap'
import Logo from '../Logo'
import Styles from './Layout.module.scss'

const Footer = () => (
  <footer className={cn('mt-auto flex-shrink-0 py-3', Styles.Footer)}>
    <Container>
      <span className="text-muted">
        <Logo />
      </span>
    </Container>
  </footer>
)

export default Footer
