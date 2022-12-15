import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import PDFViewer from "../../components/PDFViewer/pdf-viewer"
// import AudioPlayer from "react-h5-audio-player"
// import MusicPlayer from '../../images/audios/audioindex.js'




const DeshDrishti = () => {
  const data = useStaticQuery(graphql`
    query {
      book: file(relativePath: { eq: "pdf/books/desh-drishti.pdf" }) {
        id
        publicURL
        relativePath
      }
    }
  `)

  return (
    <Layout>
      <SEO title="Desh Drishti" />
      <Hero>
        <div className="container">
          <h1>Desh Drishti</h1>
        </div>
      </Hero>
      <PDFViewer url={data.book.publicURL} />
      {/* <AudioPlayer
            autoPlay={false}
            src={'./book1.mp3'}
            onPlay={e => console.log("")}
          /> */}
    </Layout>
  )
}

export default DeshDrishti


