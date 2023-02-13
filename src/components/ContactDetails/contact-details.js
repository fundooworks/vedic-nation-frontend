import React from "react"
import css from "./contact-details.module.scss"

const ContactDetails = () => (
  <div className={css.contact}>
    <div className={css.header}>
      <h1 className={css.title}>Get in Touch</h1>
    </div>
    <div className={css.content}>
      <div className={css.item}>
        <div className={css.label}>Address</div>
        <div className={css.info}>D-81, Gulmohar Park, New Delhi-110049</div>
      </div>
      <div className={css.item}>
        <div className={css.label}>Phone</div>
        <div className={css.info}> <a href="tel:+919811063505">+91 9811063505</a>, <a href="tel:+919821333121">+91 9821333121</a></div>
      </div>
      <div className={css.item}>
        <div className={css.label}>Email</div>
        <div className={css.info}> <a href="mailto:anjusheel@gmail.com">anjusheel@gmail.com </a></div>
      </div>
    </div>
  </div>
)

export default ContactDetails
