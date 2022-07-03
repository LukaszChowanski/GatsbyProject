import React, { useContext } from 'react'
import { getImage } from 'gatsby-plugin-image'
import ModalButton from '../../SharedComponents/ModalButton/ModalButton'
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
            <div
              dangerouslySetInnerHTML={{ __html: whatdoyougainParagraph }}
            ></div>
            <ModalButton onClick={openModal}>
              {whatdoyougainBtntext}
            </ModalButton>
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
