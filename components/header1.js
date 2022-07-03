import React from "react";
import Link from "next/link";

class Header1 extends React.Component {
  render() {
    return (
      <section
        className="header1 cid-s48MCQYojq sys-fullscreen sys-parallax-background"
        id="header1-f"
      >
        <div
          className="sys-overlay"
          style={{
            opacity: "0.0",
            backgroundColor: "rgb(255, 255, 255)"
          }}
        />  
        <div className="align-center container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-8">
              <h1 className="sys-section-title sys-fonts-style mb-3 display-1">
                <strong>&quot;What is the real, actual value  <br/> OF  <br/> individual choice?&quot; </strong>
              </h1>
              <h2 className="sys-section-title sys-fonts-style mb-3">
                <strong>Some ask*. Hence: our interest is Real. We do (answer). Here to check our assumptions. </strong>
              </h2>
              <p className="sys-text sys-fonts-style display-7">
                This is a non-standard project.

                {/* We attack the decision system and do it frontally. */}
                {/* We know how to gracefully crash (the system). */}
                {/* "No one is going to take me alive, time has come
                to make things alright".. Muse, BH&R, *SS #3f1ng=1lV */}

              </p>
              <p className="sys-text sys-fonts-style display-7">
                What remains that blossoms within the ashes?
              </p>
              <p className="sys-text sys-fonts-style display-7">
                Consciousness,
                {/* , We claim. */}
                <br />
                For all (∀).
              </p>

              <div className="sys-section-btn mt-3">
              <Link href="/">
                <a
                  className="btn btn-success display-4"
                >
                  Watch the surface
                </a>
                </Link>
                {" "}
                <Link href="#game">
                <a
                  className="btn btn-success-outline display-4"
                >
                  Inside: a decision game?
                </a>
                </Link>

              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header1;
