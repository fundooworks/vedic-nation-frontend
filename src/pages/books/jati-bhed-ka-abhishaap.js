import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const JatiBhedKaAbhishaap = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/jati-bhed-ka-abhishaap.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Jati Bhed ka Abhishaap" />
      <Hero>
        <div className="container">
          <h1>Jati Bhed ka Abhishaap</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default JatiBhedKaAbhishaap
