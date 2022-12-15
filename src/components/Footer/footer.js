import React from "react"

import css from "./footer.module.scss"

const Footer = () => (
  <footer className={css.footer}>
    <div className="container">
      <p className={css.footer__desc}>
        © {new Date().getFullYear()},{` `}
        Vedic Nation
      </p>
    </div>
  </footer>
)

export default Footer
