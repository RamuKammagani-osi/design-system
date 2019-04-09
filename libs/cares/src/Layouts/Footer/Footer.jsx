import React from 'react'
import cn from 'classnames'
import Logo from '../../Logo'
import Styles from '../Layout.module.scss'
import { Container } from '@cwds/reactstrap'

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
