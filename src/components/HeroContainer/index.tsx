import React, { useEffect } from 'react'

import PropTypes from 'prop-types'

import {
  container,
  titleText,
  myName,
  aboutContent,
  about,
} from './index.module.css'

import '@fontsource/jost/700.css'
import '@fontsource/jost/500.css'
import { Link } from 'gatsby'

interface IHeroContainer {
  title: String
  aboutText: String
  home: boolean
  content?: string | ''
}

const HeroContainer = ({ title, aboutText, home, content }: IHeroContainer) => {
  const setHeadingHeight = (tag: HTMLHeadingElement) => {
    tag.style.top = `-${tag.clientHeight / 2}px`
  }

  useEffect(() => {
    const titleTag = document.querySelector(
      `.${titleText}`
    ) as HTMLHeadingElement

    setHeadingHeight(titleTag)

    window.addEventListener('resize', () => setHeadingHeight(titleTag))

    return () => {
      window.removeEventListener('resize', () => setHeadingHeight(titleTag))
    }
  }, [])

  return (
    <div className={container}>
      <h1 className={titleText}>{title}</h1>
      {home ? (
        <h1 className={myName}>
          rODRIGO
          <br />
          cONTI
          <br />
          rIBEIRO
        </h1>
      ) : (
        <p
          className={aboutContent}
          dangerouslySetInnerHTML={{ __html: content ? content : '' }}
        />
      )}

      <h2 className={about}>
        <Link to={`/${aboutText.toLowerCase()}`}>{aboutText}</Link>
      </h2>
    </div>
  )
}

HeroContainer.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}

export default HeroContainer
