import React from "react";

class FullHeader extends React.Component {
  render() {
    return (
      <section className="menu" once="menu" id="menu1-h">
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand">
              <span className="navbar-logo">
                <a href="/">
                  <img
                    src="/images/logo.png"
                    alt=""
                    style={{
                      height: "3.8rem"
                    }}
                  />
                </a>
              </span>
              <span className="navbar-caption-wrap">
                <a
                  className="navbar-caption text-black display-7"
                  href="/"
                >
                  The System
                </a>
              </span>
            </div>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-bs-toggle="collapse"
              data-target="#navbarSupportedContent"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <div className="hamburger">
                <span />
                <span />
                <span />
                <span />
              </div>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul
                className="navbar-nav nav-dropdown nav-right"
                data-app-modern-menu="true"
              >
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="/"
                  >
                    Menu Item 1
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link link text-black display-4"
                    href="/"
                  >
                    Menu Item 2
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </section>
    );
  }
}

export default FullHeader;
