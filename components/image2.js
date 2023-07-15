import React from "react";
import Image from "next/image";

class ImageWithDescription extends React.Component {
  render() {
    return (
      <section className="image2 cid-sZpWNRPN3l" id="image2-s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="image-wrapper">
                <img src="/images/5.jpg" alt="Mobirise Website Builder" />
                <p className="sys-description sys-fonts-style mt-2 align-center display-4">
                  SHOW
                </p>
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="sys-section-title sys-fonts-style mb-3 display-5">
                  <strong>Who are WE?</strong>
                </h3>
                <p className="sys-text sys-fonts-style display-7">
                This constitutes the first attempt, to the best of OUR knowledge, to tackle the crude implementation of universal logic mechanisms towards harnessing and visualising (without any further external process) individual&lsquo;s personal data in the public interest in a truly borderless fashion. 
                </p>
                <p className="sys-text sys-fonts-style display-7">
                  What happens in the context of a digital society? Fortunately, political issues of consensus and legitimization as well as power relations, can now be framed into a much wider scope.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export class ImageWithDescriptionNavroom extends React.Component {
  render() {
    return (
      <section className="image2 cid-sZpWNRPN3l" id="image2-s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="image-wrapper">
                <Image 
                  src="/images/001-share-2706-187.jpg" 
                  alt="A window"
                  width={300} height={400}
                />  
                <p className="sys-description sys-fonts-style mt-2 align-center display-4">
                  Patterns inside
                </p>
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="sys-section-title sys-fonts-style mb-3 display-5">
                  <strong>A collaborative house</strong>
                </h3>
                <p className="sys-text sys-fonts-style display-7">
                  ........ ................... .......................... ...................
                  ........ ................... .......................... ...................
                  ........ ................... .......................... ...................
                  ........ ................... .......................... ...................
                  ........ ................... .......................... ...................
                  ........ ................... .......................... ...................
                  ........ ................... .......................... ...................
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageWithDescription;
