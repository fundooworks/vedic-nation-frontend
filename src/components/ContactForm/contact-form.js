import React, { useState } from "react"
import css from "./contact-form.module.scss"

import emailjs from "emailjs-com"

const ContactForm = () => {
  const [popupVisibility, setPopupVisibility] = useState(false)

  /**
   * Service Subscribed to emailjs.com
   * 
   * PLEASE DO NOT DELETE THIS COMMENT
   * 
   * Login Credentials
   * 
   * Name: Sheel Aditya
   * 
   * user Email: anjusheel@gmail.com
   * Password: Vedic@1234
   * 
   */

  function sendEmail(e) {
    e.preventDefault()

    emailjs
      .sendForm(
        "service_yai3qnh",
        "template_kg615cf",
        e.target,
        "user_sUgMnjlg1pzqQiZd8zKBz"
      )
      .then(
        result => {
          console.log(result.text)
          setPopupVisibility(true)
        },
        error => {
          console.log(error.text)
        }
      )
  }

  return (
    <div className={css.contact}>
        <div className={css.header}>
      <h1 className={css.title}>Contact Us</h1>
    </div>
      {!popupVisibility && (
        <form
          className={css.form}
          name="contactForm"
          id="contactForm"
          onSubmit={sendEmail}
        >
          <div className={css.field}>
            <label htmlFor="name" className={css.label}>
              Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              className={css.textInput}
              required
            />
          </div>

          <div className={css.field}>
            <label htmlFor="email" className={css.label}>
              Email Address
            </label>
            <input
              type="email"
              name="email"
              id="email"
              className={css.textInput}
            />
          </div>

          <div className={css.field}>
            <label htmlFor="mobile" className={css.label}>
              Mobile Number
            </label>
            <input
              type="tel"
              name="mobile"
              id="mpbile"
              className={css.textInput}
              required
            />
          </div>

          <div className={css.field}>
            <label htmlFor="bookName" className={css.label}>
              Book interested in
            </label>
            <input
              type="text"
              name="bookName"
              id="bookName"
              className={css.textInput}
              required
            />
          </div>

          <div className={css.field}>
            <label htmlFor="interest" className={css.label}>
              What made you interested in the book?
            </label>
            <textarea
              name="interestedIn"
              id="interestedIn"
              className={css.textArea}
              required
            ></textarea>
          </div>

          <div className={css.field}>
            <input type="submit" value="Submit" className={css.cta} />
          </div>
        </form>
      )}

      {popupVisibility && (
        <div className={css.modal}>
          <div className={css.modal__content}>
            <p className={css.modal__desc}>
              Thank you for Contacting Us. We'll get back to you soon.
            </p>
          </div>
        </div>
      )}
    </div>
  )
}

export default ContactForm
