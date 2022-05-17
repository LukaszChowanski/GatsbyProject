import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'

const ContactPage = () => {
  const handleSubmit = event => {
    event.preventDefault()
    const fd = new FormData()
    fd.append('your-name', event.target.yourName.value)
    fd.append('your-email', event.target.yourEmail.value)
    fd.append('your-subject', event.target.yourSubject.value)
    fd.append('your-message', event.target.yourMessage.value)

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
    <Layout>
      Strona kontaktowa
      <Seo title="Kontakt" />
      <h1>Kontakt</h1>
      <form
        // action="http://localhost:8000/wp-json/gf/v2/forms/300/submissions"
        // method="post"
        onSubmit={handleSubmit}
        style={{ display: 'flex', flexDirection: 'column', padding: '3rem' }}
      >
        <label>
          Imie
          <input type="text" name="yourName" />
        </label>
        <label>
          email
          <input type="email" name="yourEmail" />
        </label>
        <label>
          Temat
          <input type="text" name="yourSubject" />
        </label>
        <label>
          Wiadomość
          <textarea name="yourMessage" cols="30" rows="3"></textarea>
        </label>
        <button type="submit">Wyślij</button>
      </form>
    </Layout>
  )
}

export default ContactPage
