import React from "react";

class video2 extends React.Component {
  render() {
    return (
      <section className="video2 cid-sZpWLEpa7r" id="video2-r">
        <div className="container">
          <div className="mbr-section-head">
            <h4 className="mbr-section-title mbr-fonts-style mb-0 display-2">
              <strong>View in Action</strong>
            </h4>
            <h5 className="mbr-section-subtitle mbr-fonts-style mb-0 mt-2 display-7">
              Click on the video in this block to set the link to your own
              video.
            </h5>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 video-block">
              <div className="video-wrapper">
                <iframe
                  className="mbr-embedded-video"
                  src="https://www.youtube.com/embed/HujDEPAWboE?rel=0&mute=1&showinfo=0&autoplay=0&loop=0"
                  width={1280}
                  height={720}
                  frameBorder={0}
                  allowFullScreen
                />
              </div>
              <p className="mbr-text pt-2 mbr-fonts-style display-4">
                Video Description
              </p>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default video2;
