import { StaticImage } from 'gatsby-plugin-image'
import React from 'react'
import styled from 'styled-components'
import BootstrapContainer from '../SharedComponents/BootstrapContainer'

const ContactDetails = () => {
  return (
    <StyledSection>
      <BootstrapContainer>
        <GridWrapper>
          <div>
            <StyledH2 className="h2">Dane kontaktowe</StyledH2>
            <h3 className="h3">Lorem Ipsum Dolor</h3>
            <p className="p">ul. Lorem Ipsum</p>
            <p className="p">11-111 Dolor Sit amet</p>

            <ContactWrapper>
              <StaticImage
                src="../../images/icons8-phone.svg"
                alt=""
                height={23}
                width={23}
              />
              <p className="p">+48 600 600 600</p>
            </ContactWrapper>
            <ContactWrapper>
              <StaticImage
                src="../../images/icons8-mail.svg"
                alt=""
                height={23}
                width={23}
              />
              <a href="mailto:admin@lukaszchowanski.pl" className="p">
                admin@lukaszchowanski.pl
              </a>
            </ContactWrapper>
          </div>
          <StaticImage
            src="../../images/contact-page.jpg"
            alt="Some man try to contact with womebody"
          />
        </GridWrapper>
      </BootstrapContainer>
    </StyledSection>
  )
}

export default ContactDetails

const StyledSection = styled.section`
  margin-block: 6rem;
`
const StyledH2 = styled.h2`
  margin-bottom: 2rem;
`
const GridWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 5vw;
  align-items: center;
`

const ContactWrapper = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  gap: 1rem;
  margin-top: 1rem;

  a {
    padding: 0;
  }
`
