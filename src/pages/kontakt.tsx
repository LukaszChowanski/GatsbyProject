import React from 'react'
import { graphql } from 'gatsby'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import Header from '../components/SharedComponents/Header/Header'
import ContactForm from '../components/SharedComponents/ContactForm/ContactForm'

const ContactPage = () => {
  return (
    <Layout>
      Strona kontaktowa
      <Seo title="Kontakt" />
      <Header title="Kontakt" />
      <ContactForm />
    </Layout>
  )
}

export default ContactPage
