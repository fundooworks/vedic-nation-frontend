import React from "react"

import Layout from "../../components/layout"
import SEO from "../../components/seo"

import ArticleFullWidth from "../../components/ArticleFullWidth/article-full-width"
import DynamicImage from "../../components/DynamicImage/dynamic-image"
import Hero from "../../components/Hero/hero"

const PanditKshitishKumarVedalankarPage = () => {
  return (
    <Layout>
      <SEO title="Pandit Kshitish Kumar Vedalankar – Brief Introduction" />
      <Hero>
        <DynamicImage alt="Vedic Nation" filename="heroshot.jpg" />
      </Hero>

      <ArticleFullWidth
        title="Pandit Kshitish Kumar Vedalankar – Brief Introduction"
        descriptions={[
          `Pandit Kshitish Kumar Vedalankar was both a gifted writer and orator. During his lifetime he earned
          a special recognition in Arya Samaj as well as Hindi journalism. His thought process was steeped in
          Hindi, Hindu, Hindustan, and above all, in patriotism.`,
          `After his initial education in Gurukul Kurukshetra and Gurukul Indraprasth, he studied in Gurukul
          Kangri University. In 1939, during his final year of studies in Gurukul Kangri, he led the first batch of
          satyagrahis from the Gurukul to participate in the Hyderabad Satyagrah and went to jail. His time in
          jail coincided with the convocation in Gurukul Kangri; he was declared the Gold Medalist and was
          awarded the degree of Vedalankar in absentia.`,
          `For several years after graduation he served as a spirited updeshak (preacher) of Arya Samaj. This
          was followed by a period of more than thirty years in the editorial division of first Vir Arjun, and
          later, Dainik Hindustan. After his retirement in 1979 he worked, almost until his death, as the editor
          of Arya Jagat, a weekly publication. `,
          `During his tenure as a journalist, he travelled the length and breadth of India, wrote in many genres,
          and authored or edited more than 30 books and compilations. Moreover, all this while, he continued
          with discourses in Arya Samaj every Sunday. His writings as a journalist and author were eagerly
          awaited and enjoyed by his readers and he received many accolades for the same. But it was as an
          orator that his personality took on a special aura: there was vigour in his style, originality in his
          thoughts, and clear order in his presentation. He could hold even large audiences spellbound. `,
        ]}
      />
    </Layout>
  )
}

export default PanditKshitishKumarVedalankarPage
