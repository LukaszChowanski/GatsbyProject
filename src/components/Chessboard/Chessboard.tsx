import React from 'react'
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image'
import { Article, ArticleContent } from './style'

type Field = {
  acfChessboardsectionimg: { localFile: IGatsbyImageData }
  acfChessboardsectionheading: string
  acfChessboardsectionparagraph: string
}

type IProps = {
  chessboard: Field[]
}

const Chessboard = ({ chessboard }: IProps): JSX.Element => {
  return (
    <>
      {chessboard.map((field, index) => {
        const image = getImage(field.acfChessboardsectionimg.localFile)

        return (
          <Article key={index}>
            {index % 2 === 0 && image && <GatsbyImage image={image} alt="" />}
            <ArticleContent>
              <h2>{field.acfChessboardsectionheading}</h2>
              <div
                dangerouslySetInnerHTML={{
                  __html: field.acfChessboardsectionparagraph
                }}
              ></div>
            </ArticleContent>
            {index % 2 === 1 && image && <GatsbyImage image={image} alt="" />}
          </Article>
        )
      })}
    </>
  )
}

export default Chessboard
