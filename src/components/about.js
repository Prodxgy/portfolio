import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { StaticImage } from "gatsby-plugin-image";

const About = () => {
  return (
    <section id="about" className="about" style={{boxShadow: '0px -15px 35px -3px #000000'}}>
      <Container>
        <Row className="d-flex gx-5">
          <Col md="4" className="about-img">
            <StaticImage imgClassName="rounded" src="../images/personal.jpeg" />
          </Col>
          <Col md="8">
            <h1 class="heading">About Me</h1>
            <p>
              I'm an incoming Freshmen at Michigan State University currently
              looking for software engineering internships for the following
              summer. As a Computer Science major, I'm self-motivated and
              fascinated by the power of coding that powers our modern day
              devices that shape our world. It's been made a staple requirement
              to nearly all companies looking to succeed in the forms of
              websites and apps. Without it, our lives would be very different!
              I'm looking forward to become pioneer to the next technologies
              that will power our future devices and further change our lives in
              extensive ways.
            </p>
            <h2 className="subheading">Connect</h2>
            <ul className="social-nav">
              <li><a href="/" target="_blank" rel="noopener"><i className="bi bi-linkedin social"></i></a></li>
              <li><a href="/" target="_blank" rel="noopener"><i className="bi bi-github social"></i></a></li>
            </ul>
          </Col>
        </Row>
      </Container>
    </section>
  );
};
export default About;
