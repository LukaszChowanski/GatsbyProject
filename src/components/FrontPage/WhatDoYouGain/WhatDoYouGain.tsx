import React, { useContext } from 'react'
import { getImage } from 'gatsby-plugin-image'
import GreenButton from '../../SharedComponents/GreenButton/GreenButton'
import {
  StyledSection,
  BackgroundImage,
  Wrapper,
  ContentImg,
  LeftColumn,
  Content
} from './style'
import ModalContext from '../../../ModalContext'

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

  const { openModal } = useContext(ModalContext)

  return (
    <StyledSection>
      {img && (
        <BackgroundImage
          image={img}
          alt="uśmiechnięta kobieta rozmawia przez telefon"
        />
      )}
      <Content>
        <LeftColumn>
          <Wrapper>
            <h2>{whatdoyougainHeading}</h2>
            <p dangerouslySetInnerHTML={{ __html: whatdoyougainParagraph }}></p>
            <GreenButton onClick={openModal}>
              {whatdoyougainBtntext}
            </GreenButton>
          </Wrapper>
        </LeftColumn>
        {img && (
          <ContentImg
            image={img}
            alt="uśmiechnięta kobieta rozmawia przez telefon"
          />
        )}
      </Content>
    </StyledSection>
  )
}

export default WhatDoYouGain
