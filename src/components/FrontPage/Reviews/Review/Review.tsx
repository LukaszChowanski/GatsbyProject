import React from 'react'
import { StaticImage } from 'gatsby-plugin-image'
import { Wrapper } from '../style'

type IProps = {
  title: string
  content: string
  id: number
}

const Review = ({ id, title, content }: IProps) => {
  return (
    <li key={id} className="glide__slide">
      <h3>
        <StaticImage
          src="../../../../images/user-circle-solid.svg"
          alt="ppl"
          width={28}
          height={28}
        />
        {title}
      </h3>
      <Wrapper dangerouslySetInnerHTML={{ __html: content }}></Wrapper>
    </li>
  )
}

export default Review
