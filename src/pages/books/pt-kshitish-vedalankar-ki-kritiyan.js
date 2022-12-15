import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const PtKshitishVedalankarKiKritiyan = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/pt-kshitish-vedalankar-ki-kritiyan.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Pt. Kshitish Vedalankar ki Kritiyan" />
      <Hero>
        <div className="container">
          <h1>Pt. Kshitish Vedalankar ki Kritiyan</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default PtKshitishVedalankarKiKritiyan
