import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/Layout/layout"
import Seo from "../components/seo"

export const pageQuery = graphql`
{
  wpgraphql {
    pageBy(uri: "/kontakt") {
      content(format: RENDERED)
      title
    }
  }
}
`

const ContactPage = ({data}) => {

    const {title, content} = data.wpgraphql.pageBy

    return (
    <Layout>
      Strona kontaktowa
      <Seo title="Kontakt" />
      <h1>{title}</h1>
      <section dangerouslySetInnerHTML={{ __html: content}}/>
    </Layout>
)}
  
  export default ContactPage