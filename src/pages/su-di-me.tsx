import React from 'react'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'

const SuDiMe = () => {
  const text = `Piacere, sono Rodrigo Conti Ribeiro, studente dell’ultimo ano della scuola superiore, insieme alla scuola faccio uno corso su sviluppo di sistemi web, ambi sul SESI SENAI a Florianópolis.<br> Oltre ad essere studente, sono stagista di sviluppo front-end a una azienda di commerci digitali, lavorando ogni giorno con VTEX IO e spesso con applicazione front-end con la stessa tecnologia, impiegando sopratutto React insieme a consumi su API’s REST(maggioranza) e GraphQL(minoranza). <br> Sono troppo interessato alla letteratura, per questa ragione ho svolto competenza intermediaria-avanzata sull’inglese come uno autodidatta, riesco a leggere, interpretare e capire bene, ma raramente scrivo e parlo. <br> Oltre alla letteratura mi interesso alla cultura italiana, in gran parte con la cucina e le musiche, dunque ho fatto 4 livelli sul corso di lingua italiana al Círculo Ítalo-Brasileiro(CIB).`
  return (
    <Layout changeLangText="Cambiare Linguaggio" rootLink="/italiano">
      <HeroContainer
        title="Su di me"
        aboutText="Compiti"
        home={false}
        content={text}
      />
    </Layout>
  )
}

export default SuDiMe
