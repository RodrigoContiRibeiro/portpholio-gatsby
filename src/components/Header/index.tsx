import { Link } from 'gatsby'
import React from 'react'

import Logo from '../../images/logo.svg'

import { container, link } from './index.module.css'

import '@fontsource/jost/700.css'

interface IHeader {
  rootLink: string
  changeLangText: string
}

const Header = ({ rootLink, changeLangText }: IHeader) => {
  return (
    <div className={container}>
      <Link to="/" className={link}>
        <p>{changeLangText}</p>
      </Link>
      <Link to={`/${rootLink ? rootLink : '/'}`} className={link}>
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
  )
}
export default Header
