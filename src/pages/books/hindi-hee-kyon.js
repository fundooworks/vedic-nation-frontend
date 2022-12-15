import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const HindiHeeKyonPage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/hindi-hee-kyon.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Hindi Hi Kyon" />
      <Hero>
        <div className="container">
          <h1>Hindi Hi Kyon</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default HindiHeeKyonPage
