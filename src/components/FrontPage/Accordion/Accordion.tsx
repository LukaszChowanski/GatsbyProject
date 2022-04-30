import React, { useState } from 'react'
import styled from 'styled-components'
import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import AccordionElement from './AccordionElement/AccordionElement'

type AccordionElement = {
  accordionAnswer: string
  accordionQuestion: string
}

type IProps = {
  qaArray: AccordionElement[]
}

const Accordion = ({ qaArray }: IProps): JSX.Element => {
  const [visibleElement, setVisibleElement] = useState<number | null>(null)
  const onClick = (index: number) => {
    //if clicked on visible element hide element
    if (visibleElement === index) {
      setVisibleElement(null)
      return
    }

    setVisibleElement(index)
  }
  return (
    <Container>
      {qaArray.map((item, index) => (
        <AccordionElement
          key={index}
          {...item}
          index={index}
          onClick={onClick}
          isVisible={visibleElement == index}
        ></AccordionElement>
      ))}
    </Container>
  )
}

export default Accordion

const Container = styled(BootstrapContainer)`
  border-radius: 32px 32px 100px;
  background-color: ${({ theme }) => theme.c_bg400};
  padding-block: 2rem;
`
