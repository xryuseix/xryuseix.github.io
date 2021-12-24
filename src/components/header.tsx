import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav, NavDropdown } from 'react-bootstrap'
import { MdOpenInNew } from 'react-icons/md'

type HeaderProps = {
  className?: string
}

const Header: React.VFC<HeaderProps> = (props: HeaderProps) => (
  <header className="bg-dark">
    <Container>
      <Navbar expand="md" bg="dark" variant="dark">
        <Link to="/" className="navbar-brand">
          Home
        </Link>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="mr-auto">
          <Nav as="ul" className="mr-auto">
            <Nav.Item as="li">
              <Link className="nav-link" to="/apps">
                Applications
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/achievement">
                Achievement
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/account">
                Account
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/ctf">
                CTF
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </Nav.Item>
            <NavDropdown title="Slides" id="basic-nav-dropdown" renderMenuOnMount={true}>
              <NavDropdown.Item href="/slides">PDF Viewer</NavDropdown.Item>
              <NavDropdown.Item href="/lt">Single-Page App</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li">
              <a
                className="nav-link"
                href="https://github.com/xryuseix/xryuseix.github.io"
                target="_blank"
                rel="noopener noreferrer"
              >
                Repository
                <MdOpenInNew />
              </a>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

export default Header
