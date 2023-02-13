import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const BangladeshSwatantrataKeBaadPage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/bangladesh-swatantrata-ke-baad.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Bangladesh - Swatantrata Ke Baad" />
      <Hero>
        <div className="container">
          <h1>Bangla Desh: Swatantrata Ke Baad</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default BangladeshSwatantrataKeBaadPage
