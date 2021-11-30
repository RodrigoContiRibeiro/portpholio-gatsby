import React from "react"
import { areasIT } from "../areas"
import HeroContainer from "../components/HeroContainer"
import Layout from "../components/Layout"

const CompitiPage = () => {

  return (
    <>
    <Layout changeLangText="Cambiare Linguaggio" rootLink="italiano">
      <HeroContainer 
        title="Portafoglio"
        aboutText="Su di me"
        home={false}
        works={true}
        worksTitle={"Accesso sul Drive"}
        areas={areasIT}
      />
    </Layout>
    </>
  )
}

export default CompitiPage