import React from "react"

import css from "./hero.module.scss"

const Hero = ({ children }) => <div className={css.hero}>{children}</div>

export default Hero
