import { graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { GatsbyImageHydrator } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server'
import React from 'react'
import styled from 'styled-components'
import BootstrapContainer from '../BootstrapContainer'

const ContactForm = () => {
  const data = useStaticQuery(formQuery)
  const image = getImage(
    data.wp.ustawieniaStrony.pageSettings.formBackgroundround.localFile
  )

  const handleSubmit = (event: React.SyntheticEvent) => {
    event.preventDefault()
    const fd = new FormData()
    fd.append('your-name', event.target.yourName.value)
    fd.append('your-email', event.target.yourEmail.value)
    fd.append('your-subject', event.target.yourPhone.value)
    fd.append('date-300', event.target.date.value)

    fetch(
      'https://backend.lukaszchowanski.pl/wp-json/contact-form-7/v1/contact-forms/293/feedback',
      {
        method: 'POST',
        body: fd
      }
    )
      .then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(e => {
        console.log(e)
      })
  }
  return (
    <BootstrapContainer>
      <ContactSection>
        {image && <Background image={image} alt="" />}
        <Content>
          <h2>Umów się na bezpłatną konsultację</h2>
          <p>
            Wypełnij poniższy formularz, aby umówić się na niezobowiązującą
            konsultację.
          </p>
          <form onSubmit={handleSubmit}>
            <LabelCol>
              Imie
              <input type="text" name="yourName" />
            </LabelCol>
            <LabelCol>
              Adres email
              <input type="email" name="yourEmail" />
            </LabelCol>
            <LabelCol>
              Numer telefonu
              <input type="tel" name="yourPhone" />
            </LabelCol>
            <LabelCol>
              Preferowana data konsultacji
              <input
                type="date"
                name="date"
                min={new Date().toISOString().slice(0, -8)}
              />
            </LabelCol>
            <button type="submit">Umów się teraz</button>
          </form>
        </Content>
      </ContactSection>
    </BootstrapContainer>
  )
}

const formQuery = graphql`
  query PageSettings {
    wp {
      ustawieniaStrony {
        pageSettings {
          formBackgroundround {
            localFile {
              childImageSharp {
                gatsbyImageData
              }
            }
          }
        }
      }
    }
  }
`
export default ContactForm

const ContactSection = styled.section`
  position: relative;
`

const Content = styled.div`
  padding: 4rem;

  h2 {
    color: #fff;
    max-width: 70%;
    padding-bottom: 1rem;
    margin-bottom: 1rem;
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 90px;
      border-bottom: 3px solid #fff;
    }
  }

  p {
    color: #fff;
    max-width: 50%;
    margin-bottom: 1rem;
  }

  form {
    display: grid;
    grid-template-columns: repeat(2, minmax(0, 1fr));
    gap: 1rem;
  }

  input {
    height: 32px;
    border-radius: 50px;
    border: none;
    padding-inline: 1rem;
  }

  button {
    justify-self: flex-end;
    background-color: ${({ theme }) => theme.c_btnBgColored};
  }
`

const Background = styled(GatsbyImage)`
  position: absolute;
  inset: 0;
  z-index: -1;
`
const LabelCol = styled.label`
  display: flex;
  flex-direction: column;
  color: #fff;
`
const LabelRow = styled.label`
  display: inline-flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  color: #fff;
`
