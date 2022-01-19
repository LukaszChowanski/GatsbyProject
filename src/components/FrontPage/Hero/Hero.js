import React, { useEffect, useState } from 'react'
import { graphql, useStaticQuery } from 'gatsby'
// import BootstrapContainer from '../../SharedComponents/BootstrapContainer'
import StyledSection, { Container, ImageContainer } from './style'
import GreenButton from '../../SharedComponents/GreenButton/GreenButton'
import WhiteButton from '../../SharedComponents/WhiteButton/WhiteButton'
import { getImage } from 'gatsby-plugin-image'

const Hero = ({ element }) => {
  const data = useStaticQuery(flexibleContent),
    {
      heroMainheading,
      heroSubheading,
      heroParagraph,
      heroModalbtncontent,
      heroBgimg: { localFile }
    } = data.wpPage.homepage.flexibleContent[0],
    img = getImage(localFile)

  const [refEl, setRelEl] = useState(element)

  useEffect(() => {
    setRelEl(element)
  }, [element])

  const onCLickHandler = () => {
    refEl.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <StyledSection>
      {/* <img src={sourceUrl} alt="zdjecie" /> */}
      <ImageContainer image={img} alt="dokumenty" />
      <Container>
        <h1>{heroMainheading}</h1>
        <h2>{heroSubheading}</h2>
        <p>{heroParagraph}</p>
        <GreenButton>{heroModalbtncontent}</GreenButton>
        <WhiteButton onClick={onCLickHandler}>Dowiedz się więcej</WhiteButton>
      </Container>
    </StyledSection>
  )
}

export default Hero

const flexibleContent = graphql`
  query HeroQuery {
    wpPage(uri: { eq: "/" }) {
      homepage {
        flexibleContent {
          ... on WpPage_Homepage_FlexibleContent_Hero {
            heroMainheading
            heroModalbtncontent
            heroParagraph
            heroSubheading
            heroBgimg {
              localFile {
                childImageSharp {
                  gatsbyImageData(
                    placeholder: BLURRED
                    formats: AVIF
                    transformOptions: { fit: COVER }
                  )
                }
              }
              sourceUrl
            }
            fieldGroupName
          }
        }
      }
    }
  }
`
