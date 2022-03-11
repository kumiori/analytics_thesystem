import React from "react";

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
                <strong>"Power Relations  <br/> Must Be  <br/> Reversed."* </strong>
              </h1>
              <h2 className="sys-section-title sys-fonts-style mb-3">
                <strong>Hence, We reverse power relations. </strong>
              </h2>
              <p className="sys-text sys-fonts-style display-7">
                This is a non-standard project. We attack a system and do it frontally.
              </p>
              <p className="sys-text sys-fonts-style display-7">
                What remains that blossoms within the ashes?
              </p>
              <p className="sys-text sys-fonts-style display-7">
                Unity, We claim.
              </p>

              <div className="sys-section-btn mt-3">
                <a
                  className="btn btn-success display-4"
                  href="/info"
                >
                  Watch
                </a>{" "}
                <a
                  className="btn btn-success-outline display-4"
                  href="/"
                >
                  Play
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Header1;
