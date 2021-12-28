import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import BootstrapContainer from "../SharedComponents/BootstrapContainer"
import styled from "styled-components"

const Hero = () => {
  const data = useStaticQuery(flexibleContent),
    {
      heroMainheading,
      heroSubheading,
      heroParagraph,
      heroModalbtncontent,
      heroBgimg: { sourceUrl },
    } = data.wpPage.homepage.flexibleContent[0]

  console.log(data)

  return (
    <StyledSection>
      <img src={sourceUrl} alt="zdjecie" />
      <BootstrapContainer>
          <h1>{heroMainheading}</h1>
          <h2>{heroSubheading}</h2>
          <p>{heroParagraph}</p>
          <button>{heroModalbtncontent}</button>
          <button>Dowiedz się więcej</button>
      </BootstrapContainer>
    </StyledSection>
  )
}

export default Hero

const StyledSection = styled.section`
  width: 100%;
  position: relative;

  & > div {
    position: relative;
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    gap: 2rem;
    padding-top: 112px;
    z-index: 3;
  }

  & h1,
  h2,
  p {
    color: ${({ theme }) => theme.colors.headingsLight};
    max-width: calc(100% - 2rem);
  }

  p {
    max-width: 50%;
    text-align: center;
  }

  &::before {
    content: " ";
    position: absolute;
    background-color: #f8f8f8;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 32px 32px 500px 32px;
    z-index: 0;
  }  
  
  &::after {
    content: " ";
    position: absolute;
    background-color: #707070a1;
    top: 0;
    left: 0;
    width: calc(100% - 5rem);
    height: 100%;
    border-radius: 32px 32px 500px 32px;
    z-index: 2;
  }

  img {
    position: absolute;
    top: 0;
    left: 0;
    width: calc(100% - 5rem);
    height: 100%;
    border-radius: 32px 32px 500px 32px;
  }

  button {
    color: ${({theme}) => theme.colors.btns};
    background-color: ${({theme}) => theme.colors.btnBgColored};
  }
`

const flexibleContent = graphql`
query HeroQuery {
  wpPage(uri: {eq: "/"}) {
    homepage {
      flexibleContent {
        ... on WpPage_Homepage_FlexibleContent_Hero {
          heroMainheading
          heroModalbtncontent
          heroParagraph
          heroSubheading
          heroBgimg {
              sourceUrl
          }
          fieldGroupName
        }
      }
    }
  }
}

`
