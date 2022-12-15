import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const IntroductionToContents = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/rajneeti-nahi-rashtraneeti-introduction.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Rajneeti Nahi Rashtraneeti - Introduction to Contents" />
      <Hero>
        <div className="container">
          <h1>Rajneeti Nahi Rashtraneeti - Introduction to Contents</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default IntroductionToContents
