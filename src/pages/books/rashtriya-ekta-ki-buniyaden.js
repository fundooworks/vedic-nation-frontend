import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const RashtriyaEktaKiBuniyadenPage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/rashtriya-ekta-ki-buniyaden.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Rashtriya Ekta Ki Buniyaden" />
      <Hero>
        <div className="container">
          <h1>Rashtriya Ekta Ki Buniyaden</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default RashtriyaEktaKiBuniyadenPage
