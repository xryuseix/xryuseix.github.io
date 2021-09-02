import React from 'react'
import { Link } from 'gatsby'

import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav } from 'react-bootstrap'
import { MdOpenInNew } from 'react-icons/md'

const Header = (props) => (
  <header className="bg-dark">
    <Container>
      <Navbar expand="md" variant="dark">
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
              <Link className="nav-link" to="/slides">
                Slides
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link className="nav-link" to="/news">
                News
              </Link>
            </Nav.Item>
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
            <Nav.Item as="li">
              <form id="form1" action="/search" method="get">
                <input id="s" name="s" type="text" placeholder="xryuseix CTF!" style={{ display: 'none' }} />
                <input type="submit" value="search" style={{ display: 'none' }} />
              </form>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)

export default Header
