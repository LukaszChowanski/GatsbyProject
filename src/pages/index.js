import React, {useState} from "react"
import styled from 'styled-components'

// import Layout from "../components/layout"
import SEO from "../components/seo"
import LeftColumn from '../components/FrontPage/LeftColumn'
import RightColumn from '../components/FrontPage/RightColumn'
import WelcomePage from "../components/FrontPage/WelcomeModal"

export const pageQuery = graphql`
{
  wpgraphql {
    pageBy(uri: "/") {
      content(format: RENDERED)
      title
    }
  }
}
`

const IndexPage = ({data}) => {

  const {title, content} = data.wpgraphql.pageBy
  const [isWelcome, setIsWelcome ] = useState(true)

  // console.log(isWelcome)

  return(
    <>
      <SEO title="Home Page" />
      <StyledMain>
        <WelcomePage active={isWelcome} clickHandler={() => setIsWelcome(!isWelcome)}/>
        <LeftColumn title={title} content={content}/>
        <RightColumn/>
      </StyledMain>
    </>
  )
}

export default IndexPage

const StyledMain = styled.main`
    display: grid;
    grid-template-columns: 70% 30%; 
    margin: 0 auto;
    max-width: 1140px;
    & h1 {
        font-size: 62px;
    }
`
