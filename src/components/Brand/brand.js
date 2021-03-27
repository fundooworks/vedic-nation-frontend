import React from "react"
import { Link } from "gatsby"
import css from "./brand.module.scss"

import DynamicImage from "../DynamicImage/dynamic-image"

const Brand = () => (
  <div className={css.brand}>
    <Link to="/" className={css.brand__link}>
      <DynamicImage alt="Vedic Nation" filename="logo.png" className={css.brand__logo} />
    </Link>
  </div>
)

export default Brand
