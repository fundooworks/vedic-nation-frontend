import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const ListOfBooksAndCompilations = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/books-by-pt-kshitij-kumar.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Books and Compilations by Pandit Kshitish Kumar" />
      <Hero>
        {/* <div className="container">
          <h1>Books and Compilations by Pandit Kshitish Kumar</h1>
        </div> */}
      </Hero>
      <PDFViewer url={data.book.publicURL} />
    </Layout>
  )
}

export default ListOfBooksAndCompilations
