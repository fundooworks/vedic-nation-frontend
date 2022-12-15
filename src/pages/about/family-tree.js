import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import { useStaticQuery, graphql } from "gatsby"

import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const FamilyTreePage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/about/family-tree.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Family Tree" />
      <Hero>
        {/* <div className="container">
          <h1>Family Tree</h1>
        </div> */}
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default FamilyTreePage
