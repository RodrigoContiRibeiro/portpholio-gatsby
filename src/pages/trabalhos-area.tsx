import React, { useEffect, useState } from 'react'
import removeAccents from 'remove-accents'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'

import WorksList from '../components/WorksList'

import { trabalhosObrigatorios } from '../requiredWorks'

const TrabalhosArea = () => {
  const [area, setArea] = useState<string>('')

  useEffect(() => {
    const pageParams = new URLSearchParams(window.location.search)
    setArea(pageParams.get('area')?.toLowerCase() || '')
  }, [])

  return (
    <>
      <Layout changeLangText=" Mudar Língua" rootLink="portugues">
        <HeroContainer
          title={`${area}`}
          aboutText="Sobre"
          home={false}
          works={false}
        >
          <div className="trabalhos-area">
            <WorksList
              works={trabalhosObrigatorios.filter(work => {
                if (
                  removeAccents(work.area.toLowerCase()) === removeAccents(area)
                )
                  return work
              })}
              allWorksLink="/trabalhos"
              allWorksText="Todos os Trabalhos"
            />
          </div>
        </HeroContainer>
      </Layout>
    </>
  )
}

export default TrabalhosArea
