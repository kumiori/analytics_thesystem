import React from "react";
import Link from "next/link";

class FullHeader extends React.Component {
  render() {
    return (
      <section className="menu" once="menu" id="menu1-h">
        <nav className="navbar navbar-dropdown navbar-fixed-top navbar-expand-lg">
          <div className="container">
            <div className="navbar-brand">
              <span className="navbar-logo">
                <Link href="/">
                  <a>
                    <img
                      src="/images/logo.png"
                      alt=""
                      style={{
                        height: "3.8rem"
                      }}
                    />
                  </a>
                </Link>
              </span>
              <span className="navbar-caption-wrap">
                <Link href="/">
                  <a
                    className="navbar-caption text-black display-7"
                  >
                    The System
                  </a>
                </Link>
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
                  <Link href="/">
                    <a
                      className="nav-link link text-black display-4"
                    >
                      Menu Item 1
                    </a>
                  </Link>
                </li>
                <li className="nav-item">
                  <Link href="/">
                    <a
                      className="nav-link link text-black display-4"
                    >
                      Menu Item 2
                    </a>
                  </Link>
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
