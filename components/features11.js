import React from "react";
import Link from "next/link";
import Image from "next/image";

function Features(props) {
  return (
    <section className="features11 cid-sZpWUMpjUs" id="features12-u">
      <div className="container">
        <div className="m-0 row align-items-center">
          <div className="col-12 col-lg">
            <div className="card-wrapper">
              <div className="card-box">
                <h4 className="card-title mbr-fonts-style mb-4 display-2">
                  <strong>Automagically mobile</strong>
                </h4>
                <p className="mbr-text mbr-fonts-style mb-4 display-7">
                  La chiave del problema l&apos;abbiamo già girata
                </p>
                <div className="mbr-text mbr-fonts-style counter-container display-7">
                  <ul>
                    <li>Static</li>
                    <li>Dynamic</li>
                  </ul>
                </div>
                <div className="mbr-section-btn mb-4">
                  <Link href="">
                    <a
                      className="btn btn-primary display-4"
                    >
                      Feel like playing dice?
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <div className="p-0 col-12 col-lg-6 md-pb">
            <div className="image-wrapper">
              <Image src={"/images/001-share-2208-189.jpg"} 
              width={600} 
              height={600} 
              alt=""
              style={{
                width: '100%',
                height: 'auto',
              }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export class FeaturesMorvan2 extends React.Component  {
  render () {
    return (
      <section className="features11 cid-sZpWUMpjUs" id="features12-u">
        <div className="container">
          <div className="m-0 row align-items-center">
            <div className="col-12 col-lg">
              <div className="card-wrapper">
                <div className="card-box">
                  <h4 className="card-title mbr-fonts-style mb-4 display-2">
                    <strong>It sure does sound fantastic</strong>
                  </h4>
                  <p className="mbr-text mbr-fonts-style mb-4 display-7">
                    We have a lot of material saved, ideas brewing.
                  </p>
                  <div className="mbr-text mbr-fonts-style counter-container display-7">
                    <ul>
                      <li>Static</li>
                      <li>Dynamic</li>
                    </ul>
                  </div>
                  <div className="mbr-section-btn mb-4">
                    <Link href="">
                      <a
                        className="btn btn-primary display-4"
                      >
                        Feel like playing dice?
                      </a>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
            <div className="p-0 col-12 col-lg-6 md-pb">
              <div className="image-wrapper">
                <Image src={"/images/001-share-2208-189.jpg"} 
                width={600} 
                height={600} 
                alt=""
                style={{
                  width: '100%',
                  height: 'auto',
                }} />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Features;
