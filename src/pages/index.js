import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/Hero/hero"
import ArticleFullWidth from "../components/ArticleFullWidth/article-full-width"
import Gallery from "../components/Gallery/gallery"
import DynamicImage from "../components/DynamicImage/dynamic-image"
import { items, categories } from "../items"
import "bootstrap/dist/css/bootstrap.min.css"
const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <Hero>
        <DynamicImage alt="Vedic Nation" filename="heroshot.jpg" />
      </Hero>
      <ArticleFullWidth
        title="Pt. Kshitish Kumar Vedalankar"
        descriptions={[
          `During his lifetime, Pt. Kshitish Vedalankar excelled in writing, public speaking, and journalism in Hindi and Sanskrit, and promoted Vedic heritage and nationalist ideology. In order to continue his legacy, a Nyas (Trust) was established in April 1993. The mission of the Nyas is to provide recognition and encouragement to talented persons, and to nurture upcoming talents, in the fields in which Pt. Ji excelled.`,
        ]}
        ctaText="Read More"
        ctaLink="about/trust"
      />
      {categories &&
        categories.map((category, index) => {
          return (
            <div key={index}>
              {category.id !== "6" && (
                <Gallery items={items} category={category} />
              )}
            </div>
          )
        })}
    </Layout>
  )
}

export default IndexPage
