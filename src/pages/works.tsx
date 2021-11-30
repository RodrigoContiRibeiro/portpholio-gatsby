import React from "react"
import { areasEN } from "../areas";
import HeroContainer from "../components/HeroContainer";
import Layout from "../components/Layout";

const WorksPage = () =>{
  return (<>
    <Layout changeLangText="Change Language" rootLink="english">
      <HeroContainer
        title="Works"
        aboutText="About"
        home={false}
        works={true}
        worksTitle={"Access to the Drive"}
        areas={areasEN}
      />
    </Layout>
  </>)
}

export default WorksPage;