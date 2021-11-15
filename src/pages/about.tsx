import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'

const About = () => {
  const text = `Greetings, I'm Rodrigo Conti Ribeiro, last year high schooler at Florianópolis(Brazil) SESI SENAI's technical school on system development, also called Escola S. <br> Beyond student, I'm also a front-end intern developer at an Ecommerce agency, working daily with Vtex IO and often with custom front-end applications, using manly React and consuming REST(most) and GraphQL(fewer) APIs. <br> I'm also interested in literature, and by this reason I developed an intermediary-advanced proficiency in the English language as a self-taught, currently I can read, interpret and understand well, but writing and talking with less frequency. <br> In addition to literature, i have interest in Italian culture as well, mostly in culinary and musics, studying 4 levels of the Italian language course at Círculo Ítalo-Brasileiro(CIB)`
  return (
    <Layout changeLangText="Change Language" rootLink="/english">
      <HeroContainer
        title="About"
        aboutText="Works"
        home={false}
        content={text}
      />
    </Layout>
  )
}

export default About
