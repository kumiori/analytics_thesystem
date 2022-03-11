import React from "react";

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
                  Image Description
                </p>
              </div>
            </div>
            <div className="col-12 col-lg">
              <div className="text-wrapper">
                <h3 className="sys-section-title sys-fonts-style mb-3 display-5">
                  <strong>Image with Description</strong>
                </h3>
                <p className="sys-text sys-fonts-style display-7">
                  Use Mobirise website building software to create multiple
                  sites for commercial and non-profit projects. Click on the
                  image in this block to replace it. You can add a description
                  below your image, or on the side. If you want to hide some of
                  the text fields, open the Block parameters, and uncheck
                  relevant options.
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
