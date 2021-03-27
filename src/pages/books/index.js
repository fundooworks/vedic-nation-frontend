import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"
import Gallery from "../../components/Gallery/gallery"
import { items, categories } from "./../../items"
const BooksPage = () => (
  <Layout>
    <SEO title="Books" />
    {categories &&
        categories.map((category, index) => {
          return (
            <div key={index}>
              {category.id !== "6" && (
                <>
                  <h2 className="category-name">{category.name}</h2>
                  <Gallery items={items} category={category} />
                </>
              )}
            </div>
          )
        })}
  </Layout>
)

export default BooksPage
