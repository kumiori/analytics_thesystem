import React from "react";
import SystemMap from '../components/systemMap';
import SeedsList from '../components/seeds';

class Map extends React.Component {
  render() {
    return (
      <section className="video2 cid-sZpWLEpa7r" id="video2-r">
        <div className="container">
          <div className="sys-section-head">
            <h4 className="sys-section-title sys-fonts-style mb-0 display-2">
              <strong>Conscious thought, in Action</strong>
            </h4>
            <h5 className="sys-section-subtitle sys-fonts-style mb-0 mt-2 display-7">
              Nucleation from points at the boundaries. Circles correspond to hotspots.
            </h5>
          </div>
          <div className="row justify-content-center mt-4">
            <div className="col-12 col-md-10 video-block">
              <div className="map-wrapper"   style={{paddingTop: '30px'}}>
              <SystemMap />
              </div>
              <p className="sys-text pt-2 sys-fonts-style display-4">
                Players of the World: War-mAP.
              </p>
              <p className="sys-text pt-2 sys-fonts-style display-4">(warmup)</p>
              <SeedsList />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Map;
