import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Hero from "../../components/Hero/hero"
import Gallery from "../../components/Gallery/gallery"
import { items2, categories } from "../../items"
const RajneetiNahiRashtraNeeti = () => {
  return (
    <Layout>
      <SEO title="Books" />
      <Hero>
        <div className="container">
          {/* <h1>Rajneeti Nahi RashtraNeeti</h1> */}
        </div>
      </Hero>
      <div>
        <Gallery items={items2} category={categories[5]} />
      </div>
    </Layout>
  )
}

export default RajneetiNahiRashtraNeeti
