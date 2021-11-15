import React from 'react'
import { areasPT } from '../areas'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'

const TrabalhosPage = () => {
  return (
    <>
      <Layout changeLangText="Mudar Língua" rootLink="/portugues">
        <HeroContainer
          title="Trabalhos"
          aboutText="Sobre"
          home={false}
          works={true}
          worksTitle="Acesso ao Drive"
          areas={areasPT}
        />
      </Layout>
    </>
  )
}

export default TrabalhosPage
