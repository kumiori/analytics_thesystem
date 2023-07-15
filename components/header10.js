import React from "react";
import Link from "next/link";
import Image from "next/image";

class ImageIntro extends React.Component {
  render() {
    return (
      <section className="header10 cid-sZpX2NugG2" id="header10-v">
        <div className="align-center container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-9">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1">
                <strong>(*)</strong>
              </h1>
              <p className="mbr-text mbr-fonts-style display-7">
                Intro.
              </p>
              <div className="mbr-section-btn mt-3">
                <Link href="/">
                  <a
                    className="btn btn-secondary display-4"
                  >
                    A singular perturbation
                  </a>
                </Link>
              </div>
              <div className="image-wrap mt-4 fill">
                <img
                  src="/images/separation_flip.jpg"
                  alt=""
                  title=""
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export class ImageIntroMorvan extends React.Component {
    render () {
      return (
      <section className="header10 cid-sZpX2NugG2" id="header10-v">
        <div className="align-center container-fluid">
          <div className="row justify-content-center">
            <div className="col-md-12 col-lg-9">
              <h1 className="mbr-section-title mbr-fonts-style mb-3 display-1">
                <strong>(*)</strong>
              </h1>
              <p className="mbr-text mbr-fonts-style display-7">
                Intro.
              </p>
              <div className="mbr-section-btn mt-3">
                <Link href="/">
                  <a
                    className="btn btn-secondary display-4"
                  >
                    A singular perturbation
                  </a>
                </Link>
              </div>
              <div className="image-wrap mt-4">
                <img
                  src="/images/001-share-1505-186-2.jpg"
                  alt=""
                  title
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageIntro;
