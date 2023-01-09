import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import AudioPlayers from "../../components/AudioPlayer/AudioPlayer"
import ArticleFullWidth from "../../components/ArticleFullWidth/article-full-width"
import DynamicImage from "../../components/DynamicImage/dynamic-image"
import Hero from "../../components/Hero/hero"

const AboutTheTrustPage = () => {
  return (
    <Layout>
      <SEO title="About the Trust" />
      <Hero>
        <DynamicImage alt="Vedic Nation" filename="heroshot.jpg" />
      </Hero>
      <ArticleFullWidth
        title="PT. KSHITISH VEDALANKAR SMRITI NYAS"
        trustSanskritLine1="ओ३म्"
        trustSanskritLine2="सर्वेषामेव दानानां ब्रह्मदानं विशिष्यते"
        descriptions={[
          `During his lifetime, Pt. Kshitish Vedalankar excelled in writing, public speaking, and journalism in Hindi and Sanskrit, and promoted Vedic heritage and nationalist ideology. In order to continue his legacy, the abovementioned Nyas (Trust) was established in April 1993. The mission of the Nyas is to provide recognition and encouragement to talented persons, and to nurture upcoming talents, in the fields in which Pt. Ji excelled. Pt. Ji’s wife, Smt. Pavitra Devi was the first chair- person of the Nyas. The Nyas successfully organized for many years competitions for students from a number of gurukuls to encourage writing and public-speaking in Hindi and Sanskrit. Since the year 2000, the Nyas has been providing annual scholarship to 2 students each from Gurukul Gautam Nagar, New Delhi and Kanya Gurukul Hathras, Uttar Pradesh.`,
        ]}
      />

      <ArticleFullWidth
        title="MAIN OBJECTIVES OF THE TRUST"
        descriptions={[
          `Generate, propagate and promote Vedic heritage and nationalist ideology.`,
          `Establish, run, or support organizations which, without any motive of individual profit, promote education in Sanskrit language and literature, journalism, tourism, science and general knowledge`,
          `Provide monetary support (scholarship, honorarium, donation or loan) to organizations or individuals that champion Vedic heritage and patriotism, especially scholar preachers, students engaged in studying Sanskrit, and journalists.`,
          `Support publication of books, magazines, or pamphlets that advocate/promote literary, cultural, social, moral, spiritual, scientific and educational knowledge and values associated with Vedic heritage and patriotism.`,
          `Establish, run, or support facilities such as dispensaries, community centres, and meditation centres, for the benefit of common public, without distinction of caste, colour or creed.`,
          `Adopt any other objective that serves and benefits common public without any motive of individual profit.`,
        ]}
      />
      {/* <ArticleFullWidth
        descriptions={[
          `Email: anjusheel@gmail.com`,
          `Telephone: 011-26853064; 011-26852745`,
          `Address: D-81, Gulmohar Park, New Delhi-110049`,
        ]}
      /> */}




      
      <AudioPlayers props={""} />
      <div className="trust-contact">
        <div>
          Email:&nbsp;
          <span>
            <a href="mailto:sheel.aditya52@gmail.com">
              sheel.aditya52@gmail.com
            </a>
            ,&nbsp;
            <a href="mailto:vinay.aditya@gmail.com">vinay.aditya@gmail.com</a>
          </span>
        </div>
        <div>
          <div>
            Telephone: <span>26853064 , 26852745</span>
          </div>
        </div>
        <div>
          <div>
            Address: <span>D-81, Gulmohar Park, New Delhi-110049</span>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default AboutTheTrustPage
