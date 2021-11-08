import React from 'react'
import LanguageCard from '../LanguageCard'

import { container } from './index.module.css'

const StartPage = () => {
  return (
    <div className={container}>
      <LanguageCard language="Português" position="top" />
      <LanguageCard language="English" position="center" />
      <LanguageCard language="Italiano" position="bottom" />
    </div>
  )
}

export default StartPage
