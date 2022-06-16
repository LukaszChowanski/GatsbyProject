import React from 'react'

type IProps = {
  index: number
}
const Bullet = ({ index }: IProps): JSX.Element => {
  return (
    <button
      key={index}
      className="glide__bullet"
      data-glide-dir={`=${index}`}
      name={`slider-bullet${index}`}
      aria-label={`slider-bullet${index}`}
    ></button>
  )
}

export default Bullet
