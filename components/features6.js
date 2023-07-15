import React from "react";
import Image from "next/image";
import Link from "next/link";

function Features6(props) {
  return (
      <section className="features6 cid-sZpWuBUH0K" id="features7-o">
        {}
        <div className="container">
          <div className="card-wrapper">
            <div className="row align-items-center">
              <div className="col-12 col-lg-6">
                <div className="image-wrapper">
                  <Image
                    src="/assets/images/product2.jpg"
                    width={100} height={100} 
                    alt="Opening now"
                  />
                </div>
              </div>
              <div className="col-12 col-lg">
                <div className="text-box">
                  <h5 className="mbr-title mbr-fonts-style display-2">
                    <strong>Special</strong>
                  </h5>
                  <p className="mbr-text mbr-fonts-style display-7">
                    If you&apos;re wondering how to build a website, Mobirise can be
                    the answer. Start creating your website with pre-made blocks
                    and place your own content. Select the theme that suits you.
                    Each theme contains a set of unique blocks.
                  </p>
                  <div className="cost">
                    <span className="currentcost mbr-fonts-style pr-2 display-2">
                      $1,000,000 
                    </span>
                    <span className="oldcost mbr-fonts-style display-2">
                      $3,000,000
                    </span>
                  </div>
                  <div className="mbr-section-btn pt-3">
                  <Link href="/about">
                    <a
                      className="btn btn-primary display-4"
                    >
                      Apply Now
                    </a>
                    </Link>

                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }



export function FeaturesMorvan(props) {
    return (
        <section className="features6 cid-sZpWuBUH0K" id="features7-o">
          {}
          <div className="container">
            <div className="card-wrapper">
              <div className="row align-items-center">
                <div className="col-12 col-lg-6">
                  <div className="image-wrapper">
                    <Image
                      src="/images/001-share-1206-187.jpg"
                      width={400} height={300} 
                      alt="Opening now"
                      // layout="fill"
                    />
                  </div>
                </div>
                <div className="col-12 col-lg">
                  <div className="text-box">
                    <h5 className="mbr-title mbr-fonts-style display-2">
                      <strong>Special Thanks</strong>
                    </h5>
                    <p className="mbr-text mbr-fonts-style display-7">
                      We were wondering how to build a residence, who can be
                      the answer? We start creating our grounds with custom blocks
                      and seed our resources. Select the profile that suits you, 
                      for a start.
                    </p>
                    <p className="mbr-text mbr-fonts-style display-7">
                      Each theme feeds a set of unique beings.
                    </p>
                    <p className="mbr-text mbr-fonts-style display-7">
                      Here&lsquo;s the value <span className="oldcost">price</span> for one of their nails:
                    </p>
                    <div className="cost">
                      <span className="currentcost mbr-fonts-style pr-2 display-2">
                        $1,000,000 
                      </span>
                      <br />
                      <span className="oldcost mbr-fonts-style display-2">
                        $3,000,000
                      </span>
                    </div>
                    <div className="mbr-section-btn pt-3">
                    <Link href="/about">
                      <a
                        className="btn btn-primary display-4"
                      >
                        Apply Now
                      </a>
                      </Link>
  
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      );
    }
  
  
  export default Features6;
