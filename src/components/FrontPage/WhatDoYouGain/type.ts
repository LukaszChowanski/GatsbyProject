import { IGatsbyImageData } from 'gatsby-plugin-image'

export type IProps = {
  whatdoyougainBtntext: string
  whatdoyougainHeading: string
  whatdoyougainImg?: { localFile: IGatsbyImageData }
  whatdoyougainParagraph: string
}
