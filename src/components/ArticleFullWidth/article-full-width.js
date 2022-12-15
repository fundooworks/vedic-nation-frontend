import React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

import css from "./article-full-width.module.scss"

const ArticleFullWidth = ({ title, descriptions, ctaText, ctaLink, trustSanskritLine1,trustSanskritLine2 }) => (
  <article className={css.article}>
    <div className={css.article__container}>
    <h2 className={css.article__title}>{trustSanskritLine1}</h2>
    <h2 className={css.article__title}>{trustSanskritLine2}</h2>
      <h2 className={css.article__title}>{title}</h2>
      {descriptions &&
        descriptions.map((description, index) => {
          return (
            <p key={index} className={css.article__description}>
              {description}
            </p>
          )
        })}

      {ctaLink && ctaText && (
        <Link className={css.article__link} to={ctaLink}>
          {ctaText}
        </Link>
      )}
    </div>
  </article>
)

ArticleFullWidth.propTypes = {
  title: PropTypes.string,
  descriptions: PropTypes.arrayOf(PropTypes.string),
  ctaText: PropTypes.string,
  ctaLink: PropTypes.string,
}

ArticleFullWidth.defaultProps = {
  descriptions: [
    `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`,
  ],
}

export default ArticleFullWidth
