export type SingleElement = {
  timelineIcon: any
  timelineSubheading: string
  timelineSubparagraph: string
}

export type IProps = {
  timelineHeading: string
  timelineParagraph: string
  timelineModaltext: string
  timelineRepeater: Array<SingleElement>
}

export type ITimeLine = Pick<IProps, 'timelineRepeater'>
