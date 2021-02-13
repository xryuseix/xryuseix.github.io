import React from "react"
import { Link } from "gatsby"
import '../components/header.css'

export default () => (
  <header>
    <nav class="navbar navbar-expand-md navbar-dark bg-dark fixed-top" style={{height: "4em"}}>
      <div class="container">
        <Link href="/" class="navbar-brand">Home</Link>
        <button
          class="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#base-navbars"
          aria-controls="base-navbars"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="base-navbars">
          <ul class="navbar-nav mr-auto">
            <li class="nav-item">
              <Link class="nav-link" href="/news">News</Link>
            </li>
            <li class="nav-item dropdown">
              <Link href="/apps" class="nav-link dropdown-toggle" id="navbarDropdown" role="button" aria-haspopup="true" aria-expanded="false">Applications</Link>
              
                <div class="dropdown-menu mt-0" aria-labelledby="navbarDropdown">
                  <Link href="/apps/sa-plag" rel="noopener noreferrer" tabindex="0" role="menuitem" class="dropdown-item">SA-Plag</Link>
                  <Link href="/apps/contest_judge" rel="noopener noreferrer" tabindex="0" role="menuitem" class="dropdown-item">xryuseix judge</Link>
                </div>
              
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/career">Career</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="/account">Account</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" href="https://github.com/xryuseix" target="_blank">Repository</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  </header>
)