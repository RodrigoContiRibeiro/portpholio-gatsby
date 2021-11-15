import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'
import Trabalhos from '../components/Trabalhos'
import { trabalhosNotaveis } from '../works'

const Portugues = () => {
  return (
    <Layout changeLangText=" Mudar Língua" rootLink="portugues">
      <HeroContainer title="Portifólio" aboutText="Sobre" home={true} />
      <Trabalhos
        works={trabalhosNotaveis}
        title="Trabalhos Notáveis"
        worksLink="Sobre"
        allWorksText="Todos os trabalhos"
        allWorksLink="trabalhos"
      />
    </Layout>
  )
}

export default Portugues
