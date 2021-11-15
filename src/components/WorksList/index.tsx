import { Link } from 'gatsby'
import React from 'react'

import { container, link, allWorksContainer } from './index.module.css'

interface IWorksList {
  works: Work[]
  allWorksText: string
  allWorksLink: string
}

const WorksList = ({ works, allWorksText, allWorksLink }: IWorksList) => {
  return (
    <>
      <div>
        {works.map((work, i) => (
          <div key={i} className={container}>
            <a href={work.url.toString()} target="_blank" className={link}>
              <span>{`.${i + 1}`}</span>
              <h3>{work.name}</h3>
              <span>{work.area}</span>
            </a>
          </div>
        ))}
      </div>
      <div className={allWorksContainer}>
        <Link to={`${allWorksLink}`}>{allWorksText}</Link>
      </div>
    </>
  )
}

export default WorksList
