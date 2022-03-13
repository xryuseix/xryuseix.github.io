/** @format */

import Link from "next/link";

import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { MdOpenInNew } from "react-icons/md";

type NavigatorProps = {
  className?: string;
};

const Navigator: React.VFC<NavigatorProps> = (props: NavigatorProps) => (
  <div className="bg-dark">
    <Container>
      <Navbar expand="md" bg="dark" variant="dark">
        <Link href="/">
          <a className="navbar-brand">Home</a>
        </Link>
        <Navbar.Toggle aria-controls="navbarResponsive" />
        <Navbar.Collapse id="navbarResponsive" className="mr-auto">
          <Nav as="ul" className="mr-auto">
            <Nav.Item as="li">
              <Link href="/apps">
                <a className="nav-link">Applications</a>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/achievement">
                <a className="nav-link">Achievement</a>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/account">
                <a className="nav-link">Account</a>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/ctf">
                <a className="nav-link">CTF</a>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/news">
                <a className="nav-link">News</a>
              </Link>
            </Nav.Item>
            <NavDropdown
              title="Slides"
              id="basic-nav-dropdown"
              renderMenuOnMount={true}
            >
              <NavDropdown.Item href="/slides">PDF Viewer</NavDropdown.Item>
              <NavDropdown.Item href="/lt">Single-Page App</NavDropdown.Item>
            </NavDropdown>
            <Nav.Item as="li">
              <Link href="/research">
                <a className="nav-link">Research</a>
              </Link>
            </Nav.Item>
            <Nav.Item as="li">
              <Link href="/api">
                <a className="nav-link disabled">API</a>
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
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Container>
  </div>
);

export default Navigator;
