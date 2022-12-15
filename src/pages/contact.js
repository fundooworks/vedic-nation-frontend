import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import { Container, Row, Col } from  "react-bootstrap";
import Hero from "../components/Hero/hero"
import DynamicImage from "../components/DynamicImage/dynamic-image"
import ContactDetails from "../components/ContactDetails/contact-details"
import ContactForm from "../components/ContactForm/contact-form"

const ContactPage = () => (
  <Layout>
    <SEO title="Contact Us" />
    <Hero>
      <DynamicImage alt="Vedic Nation" filename="heroshot.jpg" />
    </Hero>

    <Container>
      <Row>
        <Col lg="6"><ContactForm/></Col>
        <Col lg="6"><ContactDetails /></Col>
      </Row>

    </Container>
    {/* <div className="contact">
      <div className="container contact__container">
        <div className="column-half">
          <ContactDetails />
        </div>
        <div className="column-half">
          <ContactForm/>
        </div>
      </div>
    </div> */}
  </Layout>
)

export default ContactPage
