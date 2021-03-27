import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const BharatKoHinduRajyaGhoshitKaroPage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/bharat-ko-hindu-rajya-ghoshit-karo.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Bharat Ko Hindu Rajya Ghoshit Karo" />
      <Hero>
        <div className="container">
          <h1>Bharat Ko Hindu Rajya Ghoshit Karo</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default BharatKoHinduRajyaGhoshitKaroPage
