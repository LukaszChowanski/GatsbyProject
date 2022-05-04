import * as React from 'react'
import { StaticImage } from 'gatsby-plugin-image'

import GreenButton from '../../SharedComponents/GreenButton/GreenButton'
import { SubHeading, Grid, H2Wrapper, Content, Container } from './styles'

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
      />
      <Content>
        <H2Wrapper>
          <h2>{timelineHeading}</h2>
        </H2Wrapper>
        <Grid>
          {timelineRepeater.map(
            (
              { timelineIcon, timelineSubheading, timelineSubparagraph },
              index
            ) => {
              return (
                <li key={index}>
                  <SubHeading icon={timelineIcon.localFile.publicURL}>
                    {timelineSubheading}
                  </SubHeading>
                  <p
                    dangerouslySetInnerHTML={{ __html: timelineSubparagraph }}
                  ></p>
                </li>
              )
            }
          )}
        </Grid>
        <p dangerouslySetInnerHTML={{ __html: timelineParagraph }}></p>
        <GreenButton onClick={() => {}}>{timelineModaltext}</GreenButton>
      </Content>
    </Container>
  )
}

export default TimeLine
