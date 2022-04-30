import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import GreenButton from '../../SharedComponents/GreenButton/GreenButton'

type IProps = {
  whatdoyougainBtntext: string
  whatdoyougainHeading: string
  whatdoyougainImg: any
  whatdoyougainParagraph: string
}

const WhatDoYouGain = ({
  whatdoyougainBtntext,
  whatdoyougainHeading,
  whatdoyougainImg,
  whatdoyougainParagraph
}: IProps): JSX.Element => {
  const img = getImage(whatdoyougainImg.localFile)

  return (
    <StyledSection>
      <BackgroundImage
        image={img}
        alt="uśmiechnięta kobieta rozmawia przez telefon"
      />
      <Content>
        <LeftColumn>
          <Wrapper>
            <h2>{whatdoyougainHeading}</h2>
            <p dangerouslySetInnerHTML={{ __html: whatdoyougainParagraph }}></p>
            <GreenButton>{whatdoyougainBtntext}</GreenButton>
          </Wrapper>
        </LeftColumn>
        <ContentImg
          image={img}
          alt="uśmiechnięta kobieta rozmawia przez telefon"
        />
      </Content>
    </StyledSection>
  )
}

export default WhatDoYouGain

const StyledSection = styled.section`
  overflow-x: hidden;
  position: relative;
  padding-block: 4rem;

  ${({ theme }) => theme.b_medium} {
    padding-block: 1rem 1rem;
  }
`
const Content = styled(BootstrapContainer)`
  display: grid;
  grid-template-columns: 1fr 1fr;
  position: relative;
  z-index: 1;

  ${({ theme }) => theme.b_medium} {
    grid-template-columns: 1fr;
  }
`
const LeftColumn = styled.div`
  position: relative;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 150%;
    height: 100%;
    background-color: ${({ theme }) => theme.c_bg400};
    border-radius: 32px 32px 500px 32px;
    z-index: 0;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: calc(150% + 6rem);
    height: 100%;
    background-color: ${({ theme }) => theme.c_bg600};
    border-radius: 32px 32px 500px 32px;
    z-index: -1;
  }

  @media (max-width: 1064px) {
    &::before {
      width: calc(100% - 1rem);
      border-radius: 32px 32px 150px 32px;
    }

    &::after {
      width: 100%;
      border-radius: 32px 32px 150px 32px;
    }
  }
`
const ContentImg = styled(GatsbyImage)`
  margin-top: 6rem;

  img {
    width: 100%;
    height: auto;
    aspect-ratio: 3/2;
  }

  @media (max-width: 1064px) {
    margin-top: 2rem;
  }
`
const Wrapper = styled.div`
  padding: 2rem 2rem 6rem 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  position: relative;

  li {
    margin-bottom: 0.8rem;
  }
`
const BackgroundImage = styled(GatsbyImage)`
  border-radius: 32px 0 0 500px;
  position: absolute;
  right: 0;
  top: 0;
  width: 70%;
  height: 100%;

  &::before {
    content: '';
    border-radius: 32px 0 0 500px;
    position: absolute;
    inset: 0;
    background-color: ${({ theme }) => theme.c_decorationBs};
    z-index: 1;
  }

  @media (max-width: 1064px) {
    border-radius: 32px 0 0 150px;
    width: 100%;

    &::before {
      border-radius: 32px 0 0 150px;
    }
  }
`
