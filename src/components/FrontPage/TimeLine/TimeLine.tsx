import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import ModalButton from '../../SharedComponents/ModalButton/ModalButton'
import {
  SubHeading,
  Grid,
  H2Wrapper,
  Content,
  Container,
  Wrapper
} from './styles'

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
                    <div
                      dangerouslySetInnerHTML={{ __html: timelineSubparagraph }}
                    ></div>
                  </div>
                </li>
              )
            }
          )}
        </Grid>
        <Wrapper
          dangerouslySetInnerHTML={{ __html: timelineParagraph }}
        ></Wrapper>
        <ModalButton>{timelineModaltext}</ModalButton>
      </Content>
    </Container>
  )
}

export default TimeLine
