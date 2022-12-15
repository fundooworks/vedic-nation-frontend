import React, { useState } from "react"
import { Link } from "gatsby"
import css from "./dropdown.module.scss"

const Dropdown = ({ label, list }) => {
  const [dropdownOpen, setDropdownOpen] = useState(false)

  return (
    <div className={css.dropdown}>
      <button
        type="button"
        className={css.dropdown__btn}
        onClick={() => setDropdownOpen(!dropdownOpen)}
      >
        {label}
      </button>
      {dropdownOpen && (
        <div className={css.dropdown__body}>
          {list &&
            list.map((item, index) => (
              <div className={css.dropdown__item} key={index}>
                <Link to={item.url} className={css.dropdown__link} onClick={() => setDropdownOpen(!dropdownOpen)}>{item.name}</Link>
              </div>
            ))}
        </div>
      )}
    </div>
  )
}

export default Dropdown
