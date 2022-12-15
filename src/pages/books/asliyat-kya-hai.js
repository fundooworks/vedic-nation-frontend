import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const AsliyatKyaHai = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/asliyat-kya-hai.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Asliyat Kya Hai" />
      <Hero>
        <div className="container">
          <h1>Asliyat Kya Hai</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default AsliyatKyaHai
