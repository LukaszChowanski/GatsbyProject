import { graphql, useStaticQuery } from 'gatsby'
import { getImage } from 'gatsby-plugin-image'
import React, { useState } from 'react'
import BootstrapContainer from '../BootstrapContainer'
import {
  ContactSection,
  CloseModal,
  Loader,
  Content,
  Background,
  LabelCol,
  Response
} from './style'

type IProps = {
  closeModal: (e: React.MouseEvent<HTMLElement>) => void
}

const today = new Date(),
  year = today.getFullYear(),
  month =
    today.getMonth() + 1 < 10
      ? `0${today.getMonth() + 1}`
      : today.getMonth() + 1,
  day = today.getDate()

const ContactForm = React.forwardRef<HTMLDivElement, IProps>(
  ({ closeModal }, ref) => {
    const data = useStaticQuery(formQuery)

    const [isSending, setIsSending] = useState(false)
    const [message, setMessage] = useState<string | null>(null)

    const image = getImage(
      data.wp.ustawieniaStrony.pageSettings.formBackgroundround.localFile
    )

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
      setIsSending(true)
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
          setIsSending(false)
          setMessage(res.message)
          event.target.reset()
        })
        .catch(e => {
          console.log(e)
        })
    }

    return (
      <BootstrapContainer>
        <ContactSection>
          <CloseModal onClick={closeModal}>x</CloseModal>
          {isSending && <Loader />}

          {image && <Background image={image} alt="" />}
          <Content ref={ref as React.RefObject<HTMLDivElement>}>
            <h2>Umów się na bezpłatną konsultację</h2>
            <p>
              Wypełnij poniższy formularz, aby umówić się na niezobowiązującą
              konsultację.
            </p>
            <form onSubmit={handleSubmit}>
              <LabelCol>
                Imię
                <input type="text" name="yourName" />
              </LabelCol>
              <LabelCol>
                Adres email
                <input type="email" name="yourEmail" />
              </LabelCol>
              <LabelCol>
                Numer telefonu
                <input type="tel" name="yourPhone" pattern="[0-9]{9}" />
              </LabelCol>
              <LabelCol>
                Preferowana data konsultacji
                <input
                  type="date"
                  name="date"
                  min={`${year}-${month}-${day}`}
                />
              </LabelCol>
              <button type="submit">Umów się teraz</button>
            </form>
            {message && <Response>{message}</Response>}
          </Content>
        </ContactSection>
      </BootstrapContainer>
    )
  }
)

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
