import React, { ReactNode, useEffect } from 'react'

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
import WorksPage from '../WorksPage'

interface IHeroContainer {
  title: string
  aboutText: string
  home: boolean
  content?: string
  works: boolean
  worksTitle?: string
  areas?: Area[]
  children?: ReactNode | ReactNode[]
}

const HeroContainer = ({
  title,
  aboutText,
  home,
  content,
  works,
  worksTitle,
  areas,
  children,
}: IHeroContainer) => {
  const setHeadingHeight = (tag: HTMLHeadingElement) => {
    tag.style.top = `-${tag.clientHeight / 1.5}px`
  }

  useEffect(() => {
    const titleTag = document.querySelector(
      `.${titleText}`
    ) as HTMLHeadingElement

    setTimeout(() => {
      setHeadingHeight(titleTag)
    }, 1)

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
      ) : works ? (
        <WorksPage
          title={worksTitle ? worksTitle : ''}
          areas={areas ? areas : [{ areaName: '', link: '' }]}
        />
      ) : content ? (
        <p
          className={aboutContent}
          dangerouslySetInnerHTML={{ __html: content }}
        />
      ) : (
        <>{children}</>
      )}

      {children ? (
        ''
      ) : (
        <h2 className={about}>
          <Link
            to={`/${aboutText
              .toLowerCase()
              .replace(' ', '-')
              .replace(' ', '-')}`}
          >
            {aboutText}
          </Link>
        </h2>
      )}
    </div>
  )
}

HeroContainer.propTypes = {
  title: PropTypes.string.isRequired,
  aboutText: PropTypes.string.isRequired,
}

export default HeroContainer
