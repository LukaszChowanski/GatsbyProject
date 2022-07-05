import React from 'react'

import Layout from '../components/Layout/layout'
import Seo from '../components/seo'
import Header from '../components/SharedComponents/Header/Header'
import ContactForm from '../components/SharedComponents/ContactForm/ContactForm'
import ContactDetails from '../components/ContactDetails/ContactDetails'

const ContactPage = () => {
  return (
    <Layout>
      <Seo title="Kontakt" />
      <Header title="Kontakt" />
      <ContactForm />
      <ContactDetails />
    </Layout>
  )
}

export default ContactPage
