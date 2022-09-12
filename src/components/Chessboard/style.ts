import styled from 'styled-components'

const Article = styled.article`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  ${({ theme }) => theme.b_small} {
    grid-template-columns: repeat(1, minmax(0, 1fr));
    margin-inline: 1rem;

    & + article {
      margin-top: 4rem;
    }

    .gatsby-image-wrapper {
      order: 1;
    }
  }
`

const ArticleContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;

  h2 {
    position: relative;
    margin-bottom: 2rem;

    &::after {
      content: '';
      position: absolute;
      left: 0;
      bottom: -8px;
      width: 50px;
      height: 2px;
      background-color: ${({ theme }) => theme.c_decoration};
      box-shadow: 0 2px 4px ${({ theme }) => theme.c_decorationBs};
    }
  }

  ${({ theme }) => theme.b_small} {
    order: 2;
  }
`
export { Article, ArticleContent }
