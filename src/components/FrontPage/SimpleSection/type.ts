import { IGatsbyImageData } from 'gatsby-plugin-image'

type Link = {
  url: string
  title: string
}

export type IProps = {
  simplesectionHeading: string
  simplesectionParagraph: string
  simplesectionLink: Link
  simplesectionBgimg?: { localFile: IGatsbyImageData }
  index: number
}
