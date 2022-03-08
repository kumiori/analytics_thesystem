import React from "react";

class map1 extends React.Component {
  render() {
    return (
      <section className="map1 cid-sZpWDCP4Cx" id="map1-p">
        <div className="container">
          <div className="mbr-section-head mb-4">
            <h3 className="mbr-section-title mbr-fonts-style align-center mb-0 display-2">
              <strong>Map</strong>
            </h3>
          </div>
          <div className="google-map">
            <iframe
              frameBorder={0}
              style={{
                border: 0
              }}
              src="https://www.google.com/maps/embed/v1/place?key=AIzaSyDk89J4FSunMF33ruMVWJaJht_Ro0kvoXs&q=350 5th Ave, New York, NY 10118"
              allowFullScreen
            />
          </div>
        </div>
      </section>
    );
  }
}

export default map1;
