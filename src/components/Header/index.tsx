import { Link } from 'gatsby'
import React from 'react'

import Logo from '../../images/logo.svg'

import { container, link } from './index.module.css'

const Header = () => {
  return (
    <div className={container}>
      <Link to="/" className={link}>
        <img src={Logo} alt="Logo" />
      </Link>
    </div>
  )
}
export default Header
