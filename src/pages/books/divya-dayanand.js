import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const DivyaDayanand = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/divya-dayanand.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Divya Dayanand" />
      <Hero>
        <div className="container">
          <h1>Divya Dayanand</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default DivyaDayanand
