import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'

const Sobre = () => {
  const text = `Prazer, sou Rodrigo Conti Ribeiro, terceiro anista na escola de ensino médio integrado com ensino técnico em desenvolvimento de sistemas do SESI SENAI Florianópolis ou Escola S.<br>Além de estudante também sou estagiário em desenvolvimento front-end em uma empresa de comércio digital, trabalhando diariamente com VTEX IO e frequentemente com aplicações customizadas de front-end na mesma tecnologia, utilizando principalmente React com consumo em API’s REST(maioria) e GraphQL(minoria).<br>Sou muito interessado em leitura, por este motivo desenvolvi uma proficiência intermediária-avançada em inglês como autodidata, conseguindo ler, interpretar e entender bem, mas escrevendo e falando com pouca frequência.<br>Além da leitura, também tenho muito interesse na cultura italiana, principalmente a culinária e música, com isso em mente cursei 4 níveis no curso de língua italiana no Círculo Ítalo-Brasileiro(CIB).`
  return (
    <Layout changeLangText="Mudar Língua" rootLink="portugues">
      <HeroContainer
        title="Sobre"
        aboutText="Trabalhos"
        home={false}
        content={text}
      />
    </Layout>
  )
}

export default Sobre
