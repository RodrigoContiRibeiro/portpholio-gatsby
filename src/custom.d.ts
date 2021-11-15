declare module '*.svg' {
  const content: any
  export default content
}

declare module '*.css'

declare type Work = {
  name: string
  area: string
  url: string
}

declare interface Area {
  areaName: string
  link: string
}
