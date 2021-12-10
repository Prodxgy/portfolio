import * as React from "react";

const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div class="container">
        <div class="row justify-content-center">
          <div class="col-md-6 text-center mb-5">
            <h2 class="heading">Contact</h2>
          </div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-10">
            <div class="wrapper">
              <div class="row no-gutters">
                <div class="col-md-6">
                  <div class="contact-wrap w-100 p-lg-5 p-4">
                    <h3
                      class="mb-4"
                      style={{ borderBottom: "1px solid #e2e8f0" }}
                    >
                      Contact Me
                    </h3>
                    <div id="form-message-warning" class="mb-4"></div>
                    <div id="form-message-success" class="mb-4">
                      Your message was sent, thank you!
                    </div>
                    <form
                      method="POST"
                      id="contactForm"
                      name="contactForm"
                      class="contactForm"
                      data-netlify="true"
                      data-netlify-honeypot="bot-field"
                    >
                      <div class="row">
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="name"
                              id="name"
                              placeholder="Name"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="email"
                              class="form-control"
                              name="email"
                              id="email"
                              placeholder="Email"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <input
                              type="text"
                              class="form-control"
                              name="subject"
                              id="subject"
                              placeholder="Subject"
                            />
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group">
                            <textarea
                              name="message"
                              class="form-control"
                              id="message"
                              cols="30"
                              rows="6"
                              placeholder="Message"
                            ></textarea>
                          </div>
                        </div>
                        <div class="col-md-12">
                          <div class="form-group py-4">
                            <input
                              type="submit"
                              value="Send Message"
                              class="btn btn-primary"
                            />
                              <input type="hidden" name="form-name" value="contact" />
                            <div class="submitting"></div>
                          </div>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div class="col-md-6 d-flex align-items-stretch">
                  <div class="info-wrap w-100 p-lg-5 p-4 img">
                    <h3>Personal Info</h3>
                    <div class="dbox w-100 align-items-center d-flex">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-person-fill"></i>
                      </div>
                      <div class="text pl-3">
                        <p>Blake Potvin</p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-envelope-fill"></i>
                      </div>
                      <div class="text pl-3">
                        <p>
                          <a href="mailto:potvinbl@msu.edu">potvinbl@msu.edu</a>
                        </p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-mortarboard-fill"></i>
                      </div>
                      <div class="text pl-3">
                        <p>Michigan State University</p>
                      </div>
                    </div>
                    <div class="dbox w-100 d-flex align-items-center">
                      <div class="icon d-flex align-items-center justify-content-center">
                        <i class="bi bi-geo-alt-fill"></i>{" "}
                      </div>
                      <div class="text pl-3">
                        <p>East Lansing, Michigan, 48823</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
