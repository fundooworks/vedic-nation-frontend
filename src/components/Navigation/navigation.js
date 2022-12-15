import React from "react"
import { Link } from "gatsby"
import Dropdown from "../Dropdown/dropdown"
import css from "./navigation.module.scss"

const Navigation = () => (
  <div className={css.nav} id="js-menu">
    <div className={css.nav__item}>
      <Link to="/" className={css.nav__link}>
        Home
      </Link>
    </div>

    <div className={css.nav__item}>
      <Dropdown
        label="About"
        list={[
          {
            name: "About the Trust",
            url: "/about/trust",
          },
          {
            name: "Pt. Kshitish Kumar Vedalankar",
            url: "/about/pandit-kshitish-kumar-vedalankar",
          },
          {
            name: "Life in Brief",
            url: "/about/life-in-brief",
          },
          {
            name: "Family Tree",
            url: "/about/family-tree",
          },
        ]}
      />
    </div>
    <div className={css.nav__item}>
      <Dropdown
        label="Books by Pt. Kshitish Kumar"
        list={[
          {
            name: "List of Books and Compilations",
            url: "/books/list-of-books-and-compilations",
          },
          {
            name: "Books",
            url: "/books",
          },
        ]}
      />
    </div>
    <div className={css.nav__item}>
      <Link to="/contact" className={css.nav__link}>
        Contact Us
      </Link>
    </div>
  </div>
)

export default Navigation
