import React, { ReactNode } from 'react'
import PropTypes from 'prop-types'

import Header from '../Header'

interface ILayoutProps {
  children: ReactNode | ReactNode[]
  changeLangText: string
  rootLink: string
}

const Layout = ({ children, changeLangText, rootLink }: ILayoutProps) => {
  return (
    <>
      <Header rootLink={rootLink} changeLangText={changeLangText} />
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
  rootLink: PropTypes.string,
  changLangText: PropTypes.string,
}

export default Layout
