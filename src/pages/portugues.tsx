import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'
import Trabalhos from '../components/Trabalhos'
import { trabalhosNotaveis } from '../works'

const Portugues = () => {
  return (
    <Layout>
      <HeroContainer title="Portifólio" aboutText="Sobre" home={true} />
      <Trabalhos works={trabalhosNotaveis} title="Trabalhos Notáveis" />
    </Layout>
  )
}

export default Portugues
