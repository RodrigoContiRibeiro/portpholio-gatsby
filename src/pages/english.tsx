import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'
import Trabalhos from '../components/Trabalhos'
import { notableWorks } from '../works'

const English = () => {
  return (
    <Layout>
      <HeroContainer title="Portpholio" aboutText="About" home={true} />
      <Trabalhos works={notableWorks} title="Notable Works" />
    </Layout>
  )
}

export default English
