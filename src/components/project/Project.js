import React from "react";
import CardComponenet from "../card/CardComponent";
import { Card, Col } from "react-bootstrap";
import codeImg from "../../img/code.PNG";
import ProjectJSON from "../../db/project.json";
const Project = () => {
  const title = "Project";
  const subtitle =
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the";
  const description =
    "500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing";
  const picture = codeImg;
  const projectList = ProjectJSON.map((project) => {
    return (
      <Col key={project.id} className=" mb-5" xs={12} sm={6} md={4}>
        <Card className="h-100 ">
          <Card.Img variant="top" src={project.img} height={100} />
          <Card.Body className="d-flex flex-column justify-content-between">
            <Card.Title>{project.title}</Card.Title>
            <Card.Text>{project.description}</Card.Text>
            <a className="btn btn-primary" href={project.link}>
              Go to
            </a>
          </Card.Body>
        </Card>
      </Col>
    );
  });
  return (
    <div>
      <CardComponenet
        picture={picture}
        title={title}
        subtitle={subtitle}
        description={description}
      />
      <div className="d-flex flex-wrap  justify-content-center bg-light p-5 shadow-sm">
        {projectList}
      </div>
    </div>
  );
};

export default Project;
