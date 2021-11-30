import React, { useEffect, useState } from 'react'

interface IWorksPage {
  title: string
  areas: Area[]
}

import { titleText, container, item, linkText, text } from './index.module.css'

const WorksPage = ({ title, areas }: IWorksPage) => {
  const [pathName, setPathName] = useState<string>();

  useEffect(()=>{
    setPathName(window.location.pathname)
  }, [])

  return (
    <>
      <h2 className={titleText}>{title}</h2>
      <div className={container}>
        {areas.map(({ areaName, link }, i) => {
          let url = ""
          if( pathName === "/works"){
            url = "works-area"
          }
          if(pathName === "/trabalhos"){
            url = "trabalhos-area"
          }
          if(pathName === "/compiti"){
            url = "compiti-area"
          }
          return (
            <div key={i} className={item}>
              <a href={`/${url}?area=${link}`} className={linkText}>
                <span className={text}>{areaName}</span>
              </a>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default WorksPage
