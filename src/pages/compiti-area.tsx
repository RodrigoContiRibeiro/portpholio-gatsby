import React, { useState, useEffect } from 'react'
import removeAccents from 'remove-accents'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'
import WorksList from '../components/WorksList'
import { compitiRichiesti } from '../requiredWorks'

const CompitiArea = () => {
  const [area, setArea] = useState<string>('')

  useEffect(() => {
    const pageParams = new URLSearchParams(window.location.search)
    setArea(pageParams.get('area')?.toLowerCase() || '')
  }, [])

  return (
    <>
      <Layout changeLangText="Cambiare Linguaggio" rootLink="italiano">
        <HeroContainer
          title={`${area}`}
          aboutText="Su di me"
          home={false}
          works={false}
        >
          <div className="trabalhos-area">
            <WorksList
              works={compitiRichiesti.filter(work => {
                if (
                  removeAccents(work.area.toLowerCase()) === removeAccents(area)
                )
                  return work
              })}
              allWorksLink="/compiti"
              allWorksText="Tutti i compiti"
            />
          </div>
        </HeroContainer>
      </Layout>
    </>
  )
}

export default CompitiArea
