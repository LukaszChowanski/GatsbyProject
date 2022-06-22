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
  closeModal?: (e: React.MouseEvent<HTMLElement>) => void
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
      fd.append('your-name', event.target.elements.yourName.value)
      fd.append('your-email', event.target.elements.yourEmail.value)
      fd.append('your-subject', event.target.elements.yourPhone.value)
      fd.append('date-300', event.target.elements.date.value)

      fetch(`${process.env.GATSBY_FORM_URL}`, {
        method: 'POST',
        body: fd
      })
        .then(res => res.json())
        .then(res => {
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
          {closeModal && (
            <CloseModal onClick={closeModal}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-x"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </CloseModal>
          )}
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
