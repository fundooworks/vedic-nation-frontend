import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PDFViewer from "../components/PDFViewer/pdf-viewer"
const ClassificationOfBooksPage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/Books-categories-Garamond.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Classification Of Books" />
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default ClassificationOfBooksPage
