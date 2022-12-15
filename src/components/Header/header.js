import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"
import Brand from "../Brand/brand"
// import Navigation from "../Navigation/navigation"
import { Nav, NavDropdown, Navbar } from "react-bootstrap"
import css from "./header.module.scss"

const Header = ({ siteTitle }) => (
  // <header className={css.header}>
  //   <div className={css.header__container}>
  <Navbar
    className={css.bootnav}
    collapseOnSelect
    sticky="top"
    expand="lg"
    bg="white"
    variant="light"
  >
    <Navbar.Brand>
      <Brand />
    </Navbar.Brand>

    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="mr-auto"></Nav>
      <Nav className={css.paddingRight}>
        <Nav.Item className={css.linkMiddle}>
          <Link to="/">Home</Link>
        </Nav.Item>
        <NavDropdown
          className={css.dropdownOverride}
          title="About"
          id="collasible-nav-dropdown"
        >
          <NavDropdown.Item className={css.linkLine}>
            <Link to="/about/trust">About the Trust</Link>
          </NavDropdown.Item>
          <NavDropdown.Item className={css.linkLine}>
            <Link to="/about/pandit-kshitish-kumar-vedalankar">
              Pt. Kshitish Kumar Vedalankar
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className={css.linkLine}>
            <Link to="/about/life-in-brief">Life in Brief</Link>
          </NavDropdown.Item>
          <NavDropdown.Item className={css.linkLine}>
            <Link to="/about/family-tree">Family Tree</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <NavDropdown
          className={css.dropdownOverride}
          title="Books by Pt. Kshitish Kumar"
          id="collasible-nav-dropdown"
        >
           <NavDropdown.Item className={css.linkLine}>
            <Link to="/KshitishGranthavaliVolumes">Kshitish Granthavali</Link>
          </NavDropdown.Item>
          <NavDropdown.Item className={css.linkLine}>
            <Link to="/books/list-of-books-and-compilations">
              List of Books and Compilations
            </Link>
          </NavDropdown.Item>
          <NavDropdown.Item className={css.linkLine}>
            <Link to="/books">Books</Link>
          </NavDropdown.Item>
          <NavDropdown.Item className={css.linkLine}>
            <Link to="/classificationOfBooks">Book Categories</Link>
          </NavDropdown.Item>
        </NavDropdown>
        <Nav.Item className={css.linkMiddle}>
          <Link to="/contact">Contact Us</Link>
        </Nav.Item>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
  //    </div>
  // </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
