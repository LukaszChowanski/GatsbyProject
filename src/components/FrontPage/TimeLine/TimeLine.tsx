import * as React from 'react'
import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import background from '../../../images/background.jpg'
import GreenButton from '../../SharedComponents/GreenButton/GreenButton'

type Image = {
  sourceUrl: string
}

type SingleElement = {
  timelineIcon: Image
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
      <Background src={background} />
      <Content>
        <H2Wrapper>
          <h2>{timelineHeading}</h2>
        </H2Wrapper>
        <Grid>
          {timelineRepeater.map(
            ({ timelineIcon, timelineSubheading, timelineSubparagraph }) => {
              return (
                <li>
                  <SubHeading icon={timelineIcon.sourceUrl}>
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
        <GreenButton>{timelineModaltext}</GreenButton>
      </Content>
    </Container>
  )
}

export default TimeLine

const Container = styled(BootstrapContainer)`
  display: grid;
  margin-top: 4rem;
`
const Background = styled.img`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  height: 100%;
  width: 100%;
  object-fit: cover;
  object-position: center;
`

const Content = styled.div`
  grid-column: 1 / -1;
  grid-row: 1 / -1;
  display: flex;
  flex-direction: column;
  padding: 4rem 4rem 2rem 6rem;

  & > p {
    max-width: 75%;
    margin-inline: auto;
  }

  & > button {
    margin-inline: auto;
    margin-top: 1rem;
  }

  @media (max-width: 1064px) {
    padding: 2rem 1rem;
  }
`

const H2Wrapper = styled.div`
  width: 80%;
  padding: 2rem;
  padding-bottom: 1rem;
  position: relative;
  margin-bottom: 2rem;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 6rem);
    height: 100%;
    background-color: #f8f8f8;
    border-radius: 32px 32px 500px 32px;
    z-index: 1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #f8f8f891;
    border-radius: 32px 32px 500px 32px;
    z-index: 0;
  }

  h2 {
    width: max-content;
    position: relative;
    margin-bottom: 2rem;
    z-index: 3;

    &::before {
      content: '';
      position: absolute;
      left: 0;
      bottom: 0;
      -webkit-transform: translateY(0.8rem);
      transform: translateY(0.8rem);
      width: min(64px, 100%);
      height: 2px;
      background-color: #b70000;
      -webkit-box-shadow: 0px 3px 6px #b7000080;
      box-shadow: 0px 3px 6px #b7000080;
    }
  }
`

const Grid = styled.ul`
  list-style: none;
  padding-left: 0;
  display: grid;
  grid-template-columns: 1fr 1fr;
  -webkit-column-gap: 10rem;
  -moz-column-gap: 10rem;
  column-gap: 10rem;
  row-gap: 4rem;
  position: relative;
  padding-bottom: 120px;

  &::before {
    content: '';
    position: absolute;
    width: 3px;
    height: 90%;
    top: 0;
    left: 50%;
    background-color: #b70000;
    box-shadow: 0px 3px 6px #b7000080;
    transform: translateX(-50%);
  }

  li:nth-child(2n) {
    transform: translateY(70%);
  }

  li:nth-child(2n) h3::after {
    right: unset;
    left: calc(-5rem - 8px);
  }

  @media (max-width: 1064px) {
    grid-template-columns: 1fr;
    row-gap: 1rem;
    padding-bottom: 0;
    margin-bottom: 3rem;

    &::before {
      left: 0;
      top: 10px;
      height: 95%;
    }

    li {
      padding-left: 2rem;
    }

    li:nth-child(2n) {
      transform: translateY(0);
    }

    li:nth-child(2n) h3::after {
      right: unset;
      left: -40px;
    }
  }
`

const SubHeading = styled.h3<{ icon: string }>`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  position: relative;

  &::before {
    content: '';
    background-image: url(${({ icon }) => icon});
    background-size: cover;
    background-position: center;
    width: 64px;
    min-width: 64px;
    height: 64px;
    margin-right: 16px;
  }

  &::after {
    content: '';
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: #b70000;
    position: absolute;
    top: calc(50% - 8px);
    right: calc(-5rem - 8px);
    -webkit-box-shadow: 0px 3px 6px #b7000080;
    box-shadow: 0px 3px 6px #b7000080;
  }

  @media (max-width: 1064px) {
    &::after {
      left: -40px;
      right: unset;
    }
  }
`