import React from 'react'

interface IWorksPage {
  title: string
  areas: Area[]
}

import { titleText, container, item, linkText, text } from './index.module.css'

const WorksPage = ({ title, areas }: IWorksPage) => {
  return (
    <>
      <h2 className={titleText}>{title}</h2>
      <div className={container}>
        {areas.map(({ areaName, link }, i) => {
          console.log(window.location.pathname);
          const pathName = window.location.pathname;
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
