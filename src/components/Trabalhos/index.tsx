import React from 'react'
import WorksList from '../WorksList'

import { container } from './index.module.css'

interface ITrabalhos {
  works: Work[]
  title: string
}

const Trabalhos = ({ works, title }: ITrabalhos) => {
  return (
    <div className={container}>
      <section>
        <h1>{title}</h1>
      </section>
      <section>
        <WorksList works={works} />
      </section>
    </div>
  )
}

export default Trabalhos
