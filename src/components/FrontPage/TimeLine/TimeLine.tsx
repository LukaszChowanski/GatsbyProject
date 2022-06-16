import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import GreenButton from '../../SharedComponents/GreenButton/GreenButton'
import { SubHeading, Grid, H2Wrapper, Content, Container } from './styles'
import ModalContext from '../../../ModalContext'

type SingleElement = {
  timelineIcon: any
  timelineSubheading: string
  timelineSubparagraph: string
}

type IProps = {
  timelineHeading: string
  timelineParagraph: string
  timelineModaltext: string
  timelineRepeater: Array<SingleElement>
}

const TimeLine = ({
  timelineHeading,
  timelineParagraph,
  timelineModaltext,
  timelineRepeater
}: IProps): JSX.Element => {
  const { openModal } = React.useContext(ModalContext)
  return (
    <Container>
      <StaticImage
        src="../../../images/background.jpg"
        alt="background"
        placeholder="blurred"
        loading="lazy"
      />
      <Content>
        <H2Wrapper>
          <h2>{timelineHeading}</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </p>
        </H2Wrapper>
        <Grid>
          {timelineRepeater.map(
            ({ timelineSubheading, timelineSubparagraph }, index) => {
              return (
                <li key={index}>
                  <SubHeading>{timelineSubheading}</SubHeading>
                  <div>
                    <h3>Lorem ipsum</h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: timelineSubparagraph }}
                    ></p>
                  </div>
                </li>
              )
            }
          )}
        </Grid>
        <div dangerouslySetInnerHTML={{ __html: timelineParagraph }}></div>
        <GreenButton onClick={openModal}>{timelineModaltext}</GreenButton>
      </Content>
    </Container>
  )
}

export default TimeLine
