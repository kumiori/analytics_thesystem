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

export class ImageWithDescriptionHSBC extends React.Component {
  render() {
    return (
      <section className="image2 cid-sZpWNRPN3l" id="image2-s">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-12 col-lg-6">
              <div className="image-wrapper">
                <Image 
                  src="/images/climate/006-share-1326-057.jpg" 
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
                  <strong>Analysing trust sinks</strong>
                </h3>
                <h2 className="sys-section-title sys-fonts-style mb-3  display-5">
                  HSBC, a bank committed to the fight against climate change
                </h2>

                <p className="sys-text sys-fonts-style display-7">
                  HSBC is a British bank and financial
                  services group headquartered in London, England, with unique historical
                  and business links to East Asia and a highly multinational footprint. 
                </p>
                <p className="sys-text sys-fonts-style display-7">
                  <em>What does it mean?</em>
                </p>
                <p className="sys-text sys-fonts-style display-7">
                  HSBS is the largest Europe-based bank by total assets, ahead of BNP Paribas,
                  with US 2.953 trillion. 
                </p>
                <p className="sys-text sys-fonts-style display-7">
                  <em>How much is it?</em> 
                </p>


                <p className="sys-text sys-fonts-style  display-7">
                    HSBC assets amount approximately $3b, <em>which is around</em> the GDP of Germany, <em>which is</em> the highest in the EU area.
                    </p>

                <p className="sys-text sys-fonts-style display-7">
                  However, <em>how</em> these assets are genuinely valuable? 
                  {/* HOW MUCH IS PURE BURDEN? WITH FINANCIAL AND LEGAL CONSEQUENCES? ARE WE SURE THEY KNOW HOW TO COMPUTE DERIVATIVES? */}
                </p>
                
                <p className="sys-text sys-fonts-style  display-7">
                  This is why we __________ to devote 0.1 % of the company&lsquo;s assets to observe output from climate-positive action.
                  A small sum in terms of HSBC Assets: if they were one liter of water, 0.1% is approximately one tenth of a sip*, out of the whole liter. 
                  </p>
                <p className="sys-text sys-fonts-style display-7">
                  <em>Too small?</em> 
                </p>

                <p className="sys-text sys-fonts-style  display-7">
                  0.1% of HSBC-Assets is approximately $0.3b, around the GDP of Czech Republic, Finland, Portugal, or Romania in the EU area.
                  </p>

                <p className="sys-text sys-fonts-style display-7">
                  Putting things in perspective...the real challenge is <em>transparency</em>
                </p>
                <ol>
                  <li>https://www.fluther.com/26022/how-much-volume-ml-is-in-a-sip/</li>
                </ol>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default ImageWithDescription;
