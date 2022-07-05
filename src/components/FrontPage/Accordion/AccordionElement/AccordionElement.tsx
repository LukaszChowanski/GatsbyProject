import React, { useEffect, useRef, useState } from 'react'
import { IAccordionElement } from '../type'
import { StyledSection } from '../style'

const AccordionElement = ({
  accordionAnswer,
  accordionQuestion,
  isVisible,
  onClick,
  index
}: IAccordionElement) => {
  const myRef = useRef<HTMLElement>(null)
  const [height, setHeight] = useState<number | undefined>(undefined)

  useEffect(() => {
    setHeight(myRef?.current?.clientHeight)
  }, [myRef])

  return (
    <StyledSection
      show={isVisible}
      height={height}
      onClick={() => onClick(index)}
    >
      <h2 className="h3">{accordionQuestion}</h2>
      <div className="hiddenContent">
        <article ref={myRef}>
          <div
            className="p"
            dangerouslySetInnerHTML={{ __html: accordionAnswer }}
          ></div>
        </article>
      </div>
    </StyledSection>
  )
}

export default React.memo(AccordionElement)
