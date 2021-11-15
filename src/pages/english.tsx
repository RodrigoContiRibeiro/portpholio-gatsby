import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'
import Trabalhos from '../components/Trabalhos'
import { notableWorks } from '../works'

const English = () => {
  return (
    <Layout changeLangText="Change Language" rootLink="english">
      <HeroContainer
        title="Portpholio"
        aboutText="About"
        home={true}
        works={false}
      />
      <Trabalhos
        works={notableWorks}
        title="Notable Works"
        worksLink="About"
        allWorksText="All Works"
        allWorksLink="works"
      />
    </Layout>
  )
}

export default English
