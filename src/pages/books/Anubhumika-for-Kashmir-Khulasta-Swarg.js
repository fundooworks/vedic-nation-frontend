import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const AnubhumikaforKashmirKhulastaSwarg = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/Anubhumika-for-Kashmir-Khulasta-Swarg.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Anubhumika for Kashmir Khulasta Swarg" />
      <Hero>
        <div className="container">
          <h1>Anubhumika for Kashmir Khulasta Swarg</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default AnubhumikaforKashmirKhulastaSwarg
