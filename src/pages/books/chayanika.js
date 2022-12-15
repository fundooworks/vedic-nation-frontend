import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"
// import AudioPlayer from "react-h5-audio-player"

const ChayanikaPage = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/chayanika.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Chayanika" />
      <Hero>
        <div className="container">
          <h1>Chayanika</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
      {/* <AudioPlayer
            autoPlay={false}
            src={'./देश दृष्टि_लोकतंत्र की शर्त1-5.mp3'}
            onPlay={e => console.log("")}
          /> */}
  
    </Layout>
  )
}

export default ChayanikaPage
