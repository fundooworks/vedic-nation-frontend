import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import Gallery from "../../components/Gallery/gallery"
import { items3, categories } from "../../items"
const ToofanKeDaurSe = () => {
  return (
    <Layout>
      <SEO title="Books" />
      <Hero>
        <div className="container">
          <h1>ToofanKe Daur Se Punjab</h1>
        </div>
      </Hero>
      <div>
        <Gallery items={items3} category={categories[6]} />
      </div>
    </Layout>
  )
}

export default ToofanKeDaurSe
