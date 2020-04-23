import React from 'react'

export default function aa() {
  return (
    <section className="hero is-fullheight is-default is-bold">
      <nav className="navbar is-fresh is-transparent no-shadow" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://cssninja.io">
              <img src="assets/img/logos/fresh-alt.svg" alt width={112} height={28} />
            </a>
            <a className="navbar-item is-hidden-desktop is-hidden-tablet">
              <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{ visibility: 'visible' }}>
                <svg width="1000px" height="1000px">
                  <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800" />
                  <path className="path2" d="M 300 500 L 700 500" />
                  <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200" />
                </svg>
                <button id="menu-icon-trigger" className="menu-icon-trigger" />
              </div>
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar-menu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="navbar-menu" className="navbar-menu is-static">
            <div className="navbar-start">
              <a className="navbar-item is-hidden-mobile">
                <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{ visibility: 'visible' }}>
                  <svg width="1000px" height="1000px">
                    <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800" />
                    <path className="path2" d="M 300 500 L 700 500" />
                    <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200" />
                  </svg>
                  <button id="menu-icon-trigger" className="menu-icon-trigger" />
                </div>
              </a>
            </div>
            <div className="navbar-end">
              <a href="#" className="navbar-item is-secondary">
                Features
          </a>
              <a href="#" className="navbar-item is-secondary">
                Pricing
          </a>
              <a href="#" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                Log in
          </a>
              <a className="navbar-item">
                <span className="button signup-button rounded secondary-btn raised">
                  Sign up
            </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <nav id="navbar-clone" className="navbar is-fresh is-transparent is-active" role="navigation" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://cssninja.io">
              <img src="assets/img/logos/fresh-alt.svg" alt width={112} height={28} />
            </a>
            <a className="navbar-item is-hidden-desktop is-hidden-tablet">
              <div id="menu-icon-wrapper" className="menu-icon-wrapper" style={{ visibility: 'visible' }}>
                <svg width="1000px" height="1000px">
                  <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800" />
                  <path className="path2" d="M 300 500 L 700 500" />
                  <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200" />
                </svg>
                <button id="menu-icon-trigger" className="menu-icon-trigger" />
              </div>
            </a>
            <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="cloned-navbar-menu">
              <span aria-hidden="true" />
              <span aria-hidden="true" />
              <span aria-hidden="true" />
            </a>
          </div>
          <div id="cloned-navbar-menu" className="navbar-menu is-fixed">
            <div className="navbar-start">
              <a className="navbar-item is-hidden-mobile">
                <div id="cloned-menu-icon-wrapper" className="menu-icon-wrapper" style={{ visibility: 'visible' }}>
                  <svg width="1000px" height="1000px">
                    <path className="path1" d="M 300 400 L 700 400 C 900 400 900 750 600 850 A 400 400 0 0 1 200 200 L 800 800" />
                    <path className="path2" d="M 300 500 L 700 500" />
                    <path className="path3" d="M 700 600 L 300 600 C 100 600 100 200 400 150 A 400 380 0 1 1 200 800 L 800 200" />
                  </svg>
                  <button id="cloned-menu-icon-trigger" className="menu-icon-trigger" />
                </div>
              </a>
            </div>
            <div className="navbar-end">
              <a href="#" className="navbar-item is-secondary">
                Features
          </a>
              <a href="#" className="navbar-item is-secondary">
                Pricing
          </a>
              <a href="#" className="navbar-item is-secondary modal-trigger" data-modal="auth-modal">
                Log in
          </a>
              <a className="navbar-item">
                <span className="button signup-button rounded secondary-btn raised">
                  Sign up
            </span>
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="hero-body">
        <div className="container">
          <div className="columns is-vcentered">
            <div className="column is-5 is-offset-1 landing-caption">
              <h1 className="title is-1 is-bold is-spaced">
                Manage, Deploy.
          </h1>
              <h2 className="subtitle is-5 is-muted">Lorem ipsum sit dolor amet is a dummy text used by typography industry </h2>
              <div className="button-wrap">
                <a className="button cta is-rounded primary-btn raised">
                  Get Started
            </a>
                <a className="button cta is-rounded">
                  Discover
            </a>
              </div>
            </div>
            <div className="column is-5">
              <figure className="image is-4by3">
                <img src="assets/img/illustrations/worker.svg" alt="Description" />
              </figure>
            </div>
          </div>
        </div>
      </div>
      <div className="hero-foot mb-20">
        <div className="container">
          <div className="tabs is-centered">
            <ul>
              <li><a><img className="partner-logo" src="assets/img/logos/clients/systek.svg" /></a></li>
              <li><a><img className="partner-logo" src="assets/img/logos/clients/tribe.svg" /></a></li>
              <li><a><img className="partner-logo" src="assets/img/logos/clients/kromo.svg" /></a></li>
              <li><a><img className="partner-logo" src="assets/img/logos/clients/infinite.svg" /></a></li>
              <li><a><img className="partner-logo" src="assets/img/logos/clients/gutwork.svg" /></a></li>
            </ul>
          </div>
        </div>
      </div>
    </section>

  )
}
