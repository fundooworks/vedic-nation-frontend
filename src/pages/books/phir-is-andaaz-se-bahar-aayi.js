import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const PhirIsAndaazSeBahaarAayi = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/phir-is-andaaz-se-bahar-aayi.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Phir Is Andaaz Se Bahaar Aayi" />
      <Hero>
        <div className="container">
          <h1>Phir Is Andaaz Se Bahaar Aayi</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default PhirIsAndaazSeBahaarAayi
