import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import Gallery from "../../components/Gallery/gallery"
import { items5, categories } from "../../items"
const BangladeshSwatantrataKe = () => {
  return (
    <Layout>
      <SEO title="Books" />
      <Hero>
        <div className="container">
          <h1>Bangladesh Swatantrata Ke Baad</h1>
        </div>
      </Hero>
      <div>
        <Gallery items={items5} category={categories[8]} />
      </div>
    </Layout>
  )
}

export default BangladeshSwatantrataKe
