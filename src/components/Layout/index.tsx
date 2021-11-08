import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

import './index.css'

interface ILayoutProps {
  children: ReactNode | ReactNode[]
}

const Layout = ({ children }: ILayoutProps) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
