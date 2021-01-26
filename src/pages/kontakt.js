import React from "react"
import { graphql } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../components/seo"

export const pageQuery = graphql`
{
  wpgraphql {
    pageBy(uri: "/") {
      content(format: RENDERED)
      title
    }
  }
}
`

const ContactPage = ({data}) => {

    // const {title, content} = data.wpgraphql.pageBy

    return (
    <Layout>
      Strona w budowie
      {/* <SEO title="Kontakt" />
      <h1>{title}</h1>
      <section dangerouslySetInnerHTML={{ __html: content}}/> */}
    </Layout>
)}
  
  export default ContactPage