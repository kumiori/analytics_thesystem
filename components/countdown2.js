import React from "react";

class Countdown2 extends React.Component {
  render() {
    return (
      <section
        className="countdown2 cid-sZpWnPmC5T mbr-fullscreen"
        id="countdown2-m"
      >
        <div
          className="mbr-overlay"
          style={{
            opacity: "0.4",
            backgroundColor: "rgb(255, 255, 255)"
          }}
        ></div>
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-lg-8">
              <h3 className="mbr-section-title mb-5 align-center mbr-fonts-style display-2">
                <strong>Coming Soon</strong>
              </h3>
              <h4 className="mbr-section-subtitle mb-5 align-center mbr-fonts-style display-7">
                Filler meat
              </h4>
              <div className="countdown-cont align-center mb-5">
                <div
                  className="daysCountdown col-xs-3 col-sm-3 col-md-3"
                  title="Days"
                />
                <div
                  className="hoursCountdown col-xs-3 col-sm-3 col-md-3"
                  title="Hours"
                />
                <div
                  className="minutesCountdown col-xs-3 col-sm-3 col-md-3"
                  title="Minutes"
                />
                <div
                  className="secondsCountdown col-xs-3 col-sm-3 col-md-3"
                  title="Seconds"
                />
                <div className="countdown" data-due-date="2021/01/01" />
              </div>
              <p className="mbr-text mb-5 align-center mbr-fonts-style display-7">
                Subscribe to find out when we launch.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-4 mx-auto mbr-form" data-form-type="formoid">
              <form
                action="https://mobirise.eu/"
                method="POST"
                className="mbr-form form-with-styler"
                data-form-title="Form Name"
              >
                <input
                  type="hidden"
                  name="email"
                  data-form-email="true"
                  defaultValue="2P4kaGdERvHHMBL4o6GtkEHsaQQIJi7+iBo2QdG87QGMMU02pe8rB4KkYYjkv6rVCZmpU7rhGBHhs9O86wGpyvVIOsyGDsCAlfdIEwsv42x2cARRP4rgUQU5wKwdCADE"
                />
                <div className="row">
                  <div
                    hidden="hidden"
                    data-form-alert
                    className="alert alert-success col-12"
                  >
                    Thanks for filling out the form!
                  </div>
                  <div
                    hidden="hidden"
                    data-form-alert-danger
                    className="alert alert-danger col-12"
                  >
                    Oops...! some problem!
                  </div>
                </div>
                <div className="dragArea row">
                  <div className="col form-group" data-for="email">
                    <input
                      type="text"
                      name="email"
                      placeholder="Email"
                      data-form-field="email"
                      className="form-control"
                      required="required"
                      defaultValue
                      id="email-countdown2-m"
                    />
                  </div>
                  <div className="mbr-section-btn">
                    <button type="submit" className="btn btn-warning display-4">
                      Subscribe
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Countdown2;
