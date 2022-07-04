import * as React from 'react'

import { SubHeading, Timeline } from '../styles'
import { ITimeLine } from '../type'

const TimelineList = ({ timelineRepeater }: ITimeLine): JSX.Element => {
  return (
    <Timeline>
      {timelineRepeater.map(
        ({ timelineSubheading, timelineSubparagraph }, index) => {
          return (
            <li key={index}>
              <SubHeading>{timelineSubheading}</SubHeading>
              <div>
                <h3>Lorem ipsum</h3>
                <div
                  dangerouslySetInnerHTML={{ __html: timelineSubparagraph }}
                ></div>
              </div>
            </li>
          )
        }
      )}
    </Timeline>
  )
}

export default TimelineList
