import React, { useRef } from 'react'
import StyledSection from './style'

type ISimple = {
  accordionAnswer: string
  accordionQuestion: string
  onClick: (index: number) => void
  isVisible: boolean | undefined
  index: number
}

const AccordionElement = ({
  accordionAnswer,
  accordionQuestion,
  isVisible,
  onClick,
  index
}: ISimple) => {
  const myRef = useRef<HTMLElement>(null)

  return (
    <StyledSection show={isVisible} height={myRef?.current?.clientHeight}>
      <h2 className="h3" onClick={() => onClick(index)}>
        {accordionQuestion}
      </h2>
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
