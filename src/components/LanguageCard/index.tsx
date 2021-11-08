import React from 'react'
import PropTypes from 'prop-types'
import '@fontsource/jost/900-italic.css'

import { card, link, top, center, bottom } from './index.module.css'
import { Link } from 'gatsby'

interface ILanguageCard {
  language: String
  position: 'top' | 'center' | 'bottom'
}

const LanguageCard = ({ language, position }: ILanguageCard) => {
  let positioning
  if (position === 'top') {
    positioning = top
  } else if (position === 'center') {
    positioning = center
  } else {
    positioning = bottom
  }

  return (
    <Link to={`/${language.toLowerCase().replace('ê', 'e')}`} className={link}>
      <div className={`${card} ${positioning}`}>
        <h2>{language}</h2>
      </div>
    </Link>
  )
}

LanguageCard.propTypes = {
  language: PropTypes.string,
  position: PropTypes.string,
}

export default LanguageCard
