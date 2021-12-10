import * as React from "react";
import { Col } from "react-bootstrap";


const ProjectItem = (props) => {

    return (
        <Col md="4">
        <div className="project-item">
          <div className="project-item-content">
            <h3 className="project-item-title">{props.title}</h3>
            <hr/>
            <p className="project-item-description">
                {props.description}
            </p>
            <a href={props.link} target="_blank" rel="noreferrer" className="project-item-link">
              View Project
            </a>
          </div>
        </div>
      </Col>
    )

}

export default ProjectItem;