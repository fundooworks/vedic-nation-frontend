import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import PDFViewer from "../components/PDFViewer/pdf-viewer"
const KshitishGranthavaliVolumes = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/Kshitish-Granthavali-Volumes.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)
  return (
    <Layout>
      <SEO title="Kshitish Granthavali Volumes" />
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default KshitishGranthavaliVolumes
