import React, { useState } from 'react'
import AccordionElement from './AccordionElement/AccordionElement'
import { Container } from './style'
import { IAccordion } from './type'

const Accordion = ({ qaArray }: IAccordion): JSX.Element => {
  const [visibleElement, setVisibleElement] = useState<number>(0)
  const onClick = (index: number) => {
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
          isVisible={visibleElement === index}
        ></AccordionElement>
      ))}
    </Container>
  )
}

export default Accordion
