export type IAccordionElement = {
  accordionAnswer: string
  accordionQuestion: string
  onClick: (index: number) => void
  isVisible: boolean
  index: number
}

export type IAccordion = {
  qaArray: IAccordionElement[]
}
