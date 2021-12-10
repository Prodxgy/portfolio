import * as React from "react";
import { Container, Row, Col, Nav } from "react-bootstrap";
import Snowfall from "react-snowfall";
import Zoom from "react-reveal/Zoom";
import Jump from "react-reveal/Jump";
import { AnchorLink } from "gatsby-plugin-anchor-links";


const Landing = () => {
  return (
    <section className="landing">
      <div className="landing-text d-flex align-items-center">
        <Container>
          <Snowfall />
          <Row>
            <Col>
              <Zoom>
                <h1>Hey! I'm Blake Potvin.</h1>
              </Zoom>
              <Zoom delay={600}>
                <h2>
                  Computer Science Student Attending{" "}
                  <a
                    href="https://msu.edu"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Jump up delay={2000}>
                      <span>Michigan State University</span>
                    </Jump>
                  </a>
                </h2>
              </Zoom>
              <Zoom delay={1000}>
                <ul className="landing-nav">
                  <li>
                    <AnchorLink to="/">Home</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink to="/#about">About</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink to="/#resume">Resume</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink to="/#projects">Projects</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink to="/#blog">Blog</AnchorLink>
                  </li>
                  <li>
                    <AnchorLink to="/#contact">Contact</AnchorLink>
                  </li>
                </ul>
              </Zoom>
            </Col>
          </Row>
        </Container>
      </div>
    </section>
  );
};

export default Landing;
