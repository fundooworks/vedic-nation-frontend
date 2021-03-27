import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
// import { useStaticQuery, graphql } from "gatsby"

import Hero from "../../components/Hero/hero"
// import PDFViewer from "../../components/PDFViewer/pdf-viewer"

const LifeInABriefPage = () => {
  // const data = useStaticQuery(graphql`
  //   query {
  //     book: file(relativePath: { eq: "pdf/about/life-in-a-brief.pdf" }) {
  //       id
  //       publicURL
  //       relativePath
  //     }
  //   }
  // `)

  return (
    <Layout>
      <SEO title="Life in Brief" />
      <Hero>
        <div className="container">
          <h1>PANDIT KSHITISH KUMAR - LIFE IN BRIEF</h1>
        </div>
      </Hero>
      {/* <PDFViewer url={data.book.publicURL} /> */}
      <div className="intro">
        <table>
          <tbody>
            <tr>
              <th>Birth</th>
              <th>:</th>
              <td>16 September 1916</td>
            </tr>
            <tr>
              <th>Place of birth</th>
              <th>:</th>
              <td>Old Delhi (Jogiwada locality)</td>
            </tr>
            <tr>
              <th>Early schooling</th>
              <th>:</th>
              <td>Up to grade 3 in Charkhe Walaan Commercial High School</td>
            </tr>
            <tr>
              <th>Admission in Gurukul</th>
              <th>:</th>
              <td>
                <ol>
                  <li>Jwalapur Mahavidyalaya, 1925</li>
                  <li>Gurukul Kurukshetra, 1927</li>
                  <li>Gurukul Indraprastha, 1933</li>
                  <li>Gurukul Kangri (University), 1935</li>
                </ol>
              </td>
            </tr>
            <tr>
              <th>Speech in Sanskrit</th>
              <th>:</th>
              <td>
                Fluent speech in Sanskrit on the silver jubilee of Arya Samaj
                Chavadi Bazaar (which later became well-known as Arya Samaj
                Deevan Hall), 1934
              </td>
            </tr>
            <tr>
              <th>Hyderabad Satyagrah</th>
              <th>:</th>
              <td>
                Leading the first batch of satyagrahis from Gurukul, reached
                Hyderabad city on 2 February 1939; got arrested at the Sultan
                Bazaar crossing; jailed for 6 months
              </td>
            </tr>
            <tr>
              <th>Vedalankar</th>
              <th>:</th>
              <td>
                Conferred the degree and Gold Medal in absentia (being in jail)
                at the convocation of Gurukul Kangri (University), 13 April 1939
              </td>
            </tr>
            <tr>
              <th>Release from jail</th>
              <th>:</th>
              <td>5 August 1939</td>
            </tr>
            <tr>
              <th>Prabhat Ashram, Meerut</th>
              <th>:</th>
              <td>
                Received blessings and guidance from Pt. Budhdev Vidyalankar,
                October 1939
              </td>
            </tr>
            <tr>
              <th>Preacher (Updeshak)</th>
              <th>:</th>
              <td>
                Appointed as preacher by Sarvadeshik Arya Pratinidhi Sabha in
                1940; made Nagpur as headquarter, and encouraged record number
                of people to declare themselves ‘Arya’ in the states of Madhya
                Pradesh and Vidarbha in the 1941 census.
                <br />
                <br />
                In 1941, shifted to Arya Pratinidhi Sabha Punjab and propagated
                Vedic Dharm and Arya Samaj in Punjab, Sindh and Baluchistan.
              </td>
            </tr>
            <tr>
              <th>Exile</th>
              <th>:</th>
              <td>
                Inter-caste marriage with Kumari Pavitra Devi, graduate of Kanya
                Gurukul Hathras and daughter of Shri Jayadev Arya, well-known
                social worker, selfless nationalist, and staunch Arya Samaji, 23
                June 1944
              </td>
            </tr>
            <tr>
              <th>Marriage</th>
              <th>:</th>
              <td>
                Inter-caste marriage with Kumari Pavitra Devi, graduate of Kanya
                Gurukul Hathras and daughter of Shri Jayadev Arya, well-known
                social worker, selfless nationalist, and staunch Arya Samaji, 23
                June 1944
              </td>
            </tr>
            <tr>
              <th>Journalist</th>
              <th>:</th>
              <td>
                Appointed as Sub-Editor in ‘Arjun’ Hindi daily newspaper on 16
                October 1947 (after the partition of India); also Editor of
                weekly edition of ‘Arjun’ for some time.
                <br />
                <br />
                Moved to ‘Hindustan’ Hindi daily newspaper on 15 March 1953 as
                Sub-Editor and gradually became Chief Sub-Editor, Associate
                Editor, and Literary Editor. In addition to looking after news
                and feature articles, regularly wrote for various columns such
                as ‘Asia’s Courtyard’, ‘From India’s Window’, ‘World View’,
                ‘Here-ThereEverywhere’ etc. Wrote in many genres related to
                editorials and journalism. Awarded by the newspaper three times
                for excellent work.
              </td>
            </tr>
            <tr>
              <th>M.A. (Sanskrit)</th>
              <th>:</th>
              <td>
                From Meerut College (Agra University) in First Division, 1954
              </td>
            </tr>
            <tr>
              <th>Acting</th>
              <th>:</th>
              <td>
                While studying at Meerut College played the role of Chanakya –
                the main character in the Sanskrit play ‘Mudra Rakshas’ and
                received a lot of appreciation. The play held two shows each in
                Meerut and Delhi, 1954.
              </td>
            </tr>
            <tr>
              <th>Retirement</th>
              <th>:</th>
              <td>Retired from ‘Hindustan’ daily, 16 March 1979</td>
            </tr>
            <tr>
              <th>Arya Jagat (Weekly)</th>
              <th>:</th>
              <td>
                Editor of ‘Arya Jagat’ from 1 June 1979 to 31 May 1992; active
                with scholarly work until the very end of life
              </td>
            </tr>
            <tr>
              <th>Death</th>
              <th>:</th>
              <td>24 December 1992</td>
            </tr>
          </tbody>
        </table>
        <h2 className="text-center">Expeditions and Travels</h2>
        <h2 className="text-center">(Wanderings of Chakra-Charan (pseudonym of Pt. Kshitish Kumar))</h2>
        <ol>
          <li>Kailash-Mansarovar, 1937</li>
          <li>Chakrota to Simla, Simla to Kulu, Kulu to Dalhousie-Chamba, Pathankot, 1938</li>
          <li>Amarkantak and Bastar, 1940</li>
          <li>Kashmir to Noorichham and Kaunsarpeer, 1944</li>
          <li>Member of first Indian expedition to Pandim, 1951</li>
          <li>Travel to difficult to access Paangi, 1961</li>
          <li>Travel all over India – Kashmir to Kanya Kumari and Dwarka to Imphal</li>
          <li>Uttarakhand-Yamunotri, Gangotri, Kedar Nath, Badri Nath, 1983</li>
          <li>Rivalsar, Mandi, Kulu, Manali, Ratang Jot, 1984</li>
          <li className="bold">Foreign countries</li>
          <ol type='A'>
            <li>Tibet</li>
            <li>Nepal</li>
            <li>Bangla Desh</li>
            <li>Mauritius</li>
            <li>Kenya (Nairobi)</li>
            <li>London (UK)</li>
          </ol>
        </ol>
      </div>
    </Layout>
  )
}

export default LifeInABriefPage
