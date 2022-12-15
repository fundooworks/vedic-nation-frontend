import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const IshwarVaijyanikonKiDrishtiMein = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/ishwar-vaijyanikon-ki-drishti-mein.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Ishwar Vaijyanikon Ki Drishti Mein" />
      <Hero>
        <div className="container">
          <h1>Ishwar Vaijyanikon Ki Drishti Mein</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default IshwarVaijyanikonKiDrishtiMein
