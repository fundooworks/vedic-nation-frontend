import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import Gallery from "../../components/Gallery/gallery"
import { items4, categories } from "../../items"
const KashmirJhulastaSwarg = () => {
  return (
    <Layout>
      <SEO title="Books" />
      <Hero>
        <div className="container">
          <h1>Kashmir Jhulasta Swarg</h1>
        </div>
      </Hero>
      <div>
        <Gallery items={items4} category={categories[7]} />
      </div>
    </Layout>
  )
}

export default KashmirJhulastaSwarg
