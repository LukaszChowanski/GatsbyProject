import React, { useRef, useState } from 'react'
import styled, { css } from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import plus from '../../../images/plus.svg'
import minus from '../../../images/minus.svg'

type AccordionElement = {
  accordionAnswer: string
  accordionQuestion: string
}

type IProps = {
  qaArray: AccordionElement[]
}

type ISimple = {
  accordionAnswer: string
  accordionQuestion: string
  onClick: (index: number) => void
  isHidden: boolean
  index: number
}

const Accordion = ({ qaArray }: IProps): JSX.Element => {
  const [hiddenElement, setHiddenElement] = useState<number | null>(null)
  const onClick = (index: number) => {
    if (hiddenElement === index) {
      setHiddenElement(999)
    } else {
      setHiddenElement(index)
    }
  }
  return (
    <BootstrapContainer>
      {qaArray.map((item, index) => (
        <AccordionElement
          key={index}
          index={index}
          {...item}
          onClick={onClick}
          isHidden={hiddenElement != index}
        ></AccordionElement>
      ))}
    </BootstrapContainer>
  )
}

const AccordionElement = ({
  accordionAnswer,
  accordionQuestion,
  isHidden,
  onClick,
  index
}: ISimple) => {
  const myRef = useRef<HTMLElement>(null)

  return (
    <StyledSection isHidden={isHidden} height={myRef?.current?.clientHeight}>
      <h2 className="h3" onClick={() => onClick(index)}>
        {accordionQuestion}
      </h2>
      <div className="hiddenContent">
        <article ref={myRef}>
          <p
            className="p"
            dangerouslySetInnerHTML={{ __html: accordionAnswer }}
          ></p>
        </article>
      </div>
    </StyledSection>
  )
}

export default Accordion

interface Props {
  isHidden: boolean
  height: number | undefined
}

const StyledSection = styled.section<Props>`
  width: 100%;
  color: #707070;
  overflow: hidden;
  padding-inline: 6rem;
  margin-bottom: 1rem;
  display: flex;
  flex-direction: column;

  .h3 {
    display: flex;
    align-items: center;
    gap: 1rem;
    width: 100%;
    cursor: pointer;

    &::before {
      content: '';
      width: 16px;
      min-width: 16px;
      height: 16px;
      border-radius: 50%;
      background-color: #b70000;
    }

    &::after {
      content: '';
      background-image: url(${plus});
      background-size: cover;
      background-position: center;
      width: 25px;
      min-width: 25px;
      height: 25px;
      text-align: center;
      transition: all 1s;
      margin-left: auto;
    }

    .gatsby-image-wrapper {
      margin-left: auto;
      width: 25px;
      min-width: 25px;
      height: 25px;
    }
  }

  .hiddenContent {
    max-height: 1px;
    transition: all 0.35s;
  }

  article {
    padding-top: 1rem;
  }

  ${({ isHidden, height }) =>
    !isHidden &&
    css`
      .h3::after {
        background-image: url(${minus});
        transform: rotate(180deg);
      }
      .hiddenContent {
        max-height: ${height}px;
      }
    `}

  ${({ theme }) => theme.b_small} {
    padding-inline: 2rem;
  }
`
