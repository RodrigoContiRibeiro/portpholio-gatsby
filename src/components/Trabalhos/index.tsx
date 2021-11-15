import { Link } from 'gatsby'
import React from 'react'
import WorksList from '../WorksList'

import { container, link } from './index.module.css'

import { about } from '../HeroContainer/index.module.css'

interface ITrabalhos {
  works: Work[]
  title: string
  worksLink: string
  allWorksText: string
  allWorksLink: string
}

const Trabalhos = ({
  works,
  title,
  worksLink,
  allWorksText,
  allWorksLink,
}: ITrabalhos) => {
  return (
    <div className={container}>
      <section>
        <h1>{title}</h1>
        <h2 className={`${about} ${link}`}>
          <Link
            to={`/${worksLink
              .toLowerCase()
              .replace(' ', '-')
              .replace(' ', '-')}`}
          >
            {worksLink}
          </Link>
        </h2>
      </section>
      <section>
        <WorksList
          works={works}
          allWorksText={allWorksText}
          allWorksLink={`/${allWorksLink}`}
        />
      </section>
    </div>
  )
}

export default Trabalhos
