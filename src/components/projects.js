import * as React from "react";
import ProjectItem from "./project-item.js";
import { Container, Row, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby";

const Projects = () => {
  const projects = useStaticQuery(
    graphql`
    query getProjects {
      allProjectsJson {
        edges {
          node {
            title
            description
            link
          }
        }
      }
    }
  `)["allProjectsJson"]["edges"];
  console.log(projects);
  const projectitems = projects.map((project) => {
    return (
      <ProjectItem
        title={project.node.title}
        description={project.node.description}
        link={project.node.link}

      />
    );
  });
  return (
    <section id="projects" className="projects">
        {console.log(projects)}
      <Container>
        <Row className="heading-row">
          <Col className="text-center">
            <h1 className="heading">Projects</h1>
          </Col>
        </Row>
        <Row>
          <Col md="10" className="mx-auto">
            <Row>{projectitems}</Row>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Projects;
