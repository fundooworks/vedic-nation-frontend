import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const VishwaParidrisyaVideshNeeti = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/vishwa-paridrisya-videsh-neeti.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Vishwa Paridrisya - Videsh Neeti" />
      <Hero>
        <div className="container">
          <h1>Vishwa Paridrisya - Videsh Neeti</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default VishwaParidrisyaVideshNeeti
