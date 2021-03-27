import React from "react"
import GalleryImage from "../GalleryImage/gallery-image"
import css from "./gallery.module.scss"
import { Link } from "gatsby"
const Gallery = ({ items, category }) => (
  <div className={css.gallery}>
    <div className={css.gallery__container}>
      {items &&
        items.map((item, index) => {
          const {
            name,
            hindiName,
            englishName,
            imagePath,
            ctaLink,
            categoryID,
          } = item
          if (category && category.id === categoryID) {
            return (
              <div key={index}>
                <Link to={ctaLink} className={css.link}>
                  <div className={css.figure}>
                    <GalleryImage alt={name} filename={imagePath} />
                  </div>
                  <div className={css.labels}>
                    <div className={css.imageLabel}>{hindiName}</div>
                    <div className={css.imageLabel}>{name}</div>
                    <div className={css.imageLabel}><i>{englishName}</i></div>
                  </div>
                </Link>
              </div>
            )
          }
          return null
        })}
    </div>
  </div>
)

export default Gallery
