import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const BujhatiRakhmeChamakteeChingariyan = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/Bujhati-Rakh-me-Chamaktee-Chingariyan.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Bujhati Rakh me Chamaktee Chingariyan" />
      <Hero>
        <div className="container">
          <h1>Bujhati Raakh Mein Chamakti Chingariyan</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default BujhatiRakhmeChamakteeChingariyan
