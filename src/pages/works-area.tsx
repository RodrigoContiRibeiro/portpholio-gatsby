import React, { useState, useEffect } from 'react'
import removeAccents from 'remove-accents'
import HeroContainer from '../components/HeroContainer'
import Layout from '../components/Layout'
import WorksList from '../components/WorksList'
import { mandatoryWorks } from '../requiredWorks'

const WorksArea = () => {
  const [area, setArea] = useState<string>('')

  useEffect(() => {
    const pageParams = new URLSearchParams(window.location.search)
    setArea(pageParams.get('area')?.toLowerCase() || '')
  }, [])

  return (
    <>
      <Layout changeLangText="Change Language" rootLink="english">
        <HeroContainer
          title={`${area}`}
          aboutText="About"
          home={false}
          works={false}
        >
          <div className="trabalhos-area">
            <WorksList
              works={mandatoryWorks.filter(work => {
                if (
                  removeAccents(work.area.toLowerCase()) === removeAccents(area)
                )
                  return work
              })}
              allWorksLink="/works"
              allWorksText="All Works"
            />
          </div>
        </HeroContainer>
      </Layout>
    </>
  )
}

export default WorksArea
