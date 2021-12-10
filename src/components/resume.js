import * as React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const Resume = () => {
  const data = useStaticQuery(graphql`
    query educationQuery {
      dataJson {
        eduData {
          activities
          dates
          degree
          institution
          location
          majors
          url
        }
        skills {
          type
          data {
            name
            devicon
          }
        }
      }
    }
  `)["dataJson"];
  // Education Portion
  const education = data.eduData.map(function (college) {
    const degrees = college.majors.map((major) => (
      <p>
        {college.degree} in {major}
      </p>
    ));
    const activities = college.activities.map(function (activity) {
      return <li>{activity}</li>;
    });
    return (
      <div className="education">
        <h1 className="edu-heading">{college.institution}</h1>
        <div className="edu-info">
          {degrees}
          <p>{college.dates}</p>
          <p>{college.location}</p>
          <h3 className="mt-4">Activities</h3>
          <ul>{activities}</ul>
        </div>
      </div>
    );
  });

  // Skills Portion
  const skills = data.skills.map(function (skill_type, index) {
    const skillData = skill_type.data.map(function (skill) {
      return (
        <Col xs="6" md="4">
        <div className="skill text-center">
          <div className="skill-content">
            <i className={skill.devicon}></i>
            <h3>{skill.name}</h3>
          </div>
        </div>
      </Col>
      )
    });
    let id = "";
    if (index === 0) {
      id = "first";
    } else {
      id = "";
    }
    return (
      <Row className="d-flex">
        <h2 className="skill-heading" id={id}>{skill_type.type}</h2>
        {skillData}
      </Row>
    );
  });

  return (
    <section id="resume" className="resume">
      <Container>
        <Row className="d-flex mb-5">
          <Col className="text-center px-0">
            <h1 className="heading">Resume</h1>
          </Col>
        </Row>
        <Row className="d-flex ml-5">
          <Col md="4" className="text-center">
            <h1 className="subheading">Education</h1>
          </Col>
          <Col md="8">{education}</Col>
        </Row>
        <hr/>
        <Row className="d-flex ml-5 skills">
          <Col md="4" className="text-center">
            <h1 className="subheading">Skills</h1>
          </Col>
          <Col md="6">
            <Row className="d-flex">{skills}</Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Resume;
