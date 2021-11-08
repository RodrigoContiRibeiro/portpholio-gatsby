import React from 'react'

import { container, link } from './index.module.css'

interface IWorksList {
  works: Work[]
}

const WorksList = ({ works }: IWorksList) => {
  return (
    <>
      {works.map((work, i) => (
        <div key={i} className={container}>
          <a href={work.url.toString()} target="_blank" className={link}>
            <span>{`.${i + 1}`}</span>
            <h3>{work.name}</h3>
            <span>{work.area}</span>
          </a>
        </div>
      ))}
    </>
  )
}

export default WorksList
