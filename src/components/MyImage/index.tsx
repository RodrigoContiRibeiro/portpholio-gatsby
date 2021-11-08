import React from 'react'
import { graphql, StaticQuery } from 'gatsby'
import Img from 'gatsby-image'

const RenderImage = ({ file }: { file: any }) => {
  console.log(file)
  if (!file) return null
  return <Img fluid={file.node.childImageSharp.fluid} />
}

interface IImageProps {
  src: String
}

const Image = ({ src }: IImageProps) => {
  return (
    <StaticQuery
      query={graphql`
        query {
          images: allFile(
            filter: { extension: { regex: "/jpeg|jpg|png|gif/" } }
          ) {
            edges {
              node {
                extension
                relativePath
                childImageSharp {
                  fluid(maxWidth: 1000) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      `}
      render={({ images }) => {
        console.log(images)

        return (
          <RenderImage
            file={images.edges.find((image: any) => {
              return image.node.relativePath === src
            })}
          />
        )
      }}
    />
  )
}

export default Image
