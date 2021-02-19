import React from 'react'
import { Link } from 'gatsby'

import '../components/header.css'
import 'bootstrap/dist/css/bootstrap.min.css'
import { Container, Navbar, Nav } from 'react-bootstrap'

export default () => (
  <header className="bg-dark">
    <Container>
      <Navbar expand="md" variant="dark">
        <Link href="/" class="navbar-brand">
          Home
        </Link>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="mr-auto">
          <Nav as="ul" className="mr-auto">
            <Nav.Item as="li">
              <Link class="nav-link" href="/news">
                News
              </Link>
            </Nav.Item>
            <Nav.Item>
              <Link class="nav-link" href="/apps">
                Applications
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link class="nav-link" href="/career">
                Career
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link class="nav-link" href="/account">
                Account
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link class="nav-link" href="https://github.com/xryuseix" target="_blank">
                Repository
              </Link>
            </Nav.Item>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </header>
)
