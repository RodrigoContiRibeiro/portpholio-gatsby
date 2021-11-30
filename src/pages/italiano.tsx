import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'
import Trabalhos from '../components/Trabalhos'
import { CompitiNotevole } from '../works'

const Italiano = () => {
  return (
    <Layout changeLangText="Cambiare Linguaggio" rootLink="italiano">
      <HeroContainer
        title="Portafoglio"
        aboutText="Su di me"
        home={true}
        works={false}
      />
      <Trabalhos
        works={CompitiNotevole}
        title="Compiti Notevole"
        worksLink="Su di me"
        allWorksText="Tutti i lavori"
        allWorksLink="compiti"
      />
    </Layout>
  )
}

export default Italiano
