import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileIMG from "../../img/profile.png";
const About = () => {
  return (
    <Container className="pt-2">
      <Row>
        <Col>
          <h1 className="display-2">About</h1>
          <h2 className="lead my-4">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </h2>
          <p>
            the leap into electronic typesetting, remaining essentially
            unchanged. It was popularised in the 1960s with the release of
            Letraset sheets containing Lorem Ipsum passages, and more recently
            with desktop publishing software like Aldus PageMaker including
            versions of Lorem Ipsum
          </p>
        </Col>
        <Col sm={12} md={6} lg={5}>
          <img
            src={profileIMG}
            alt="background"
            width="100%"
            className="ml-auto d-block"
          />
        </Col>
      </Row>
      <hr />
      <Row className="justify-content-center">
        <Col>
          <img
            src={profileIMG}
            alt="background"
            className="img-thumbnail bg-dark"
          />{" "}
        </Col>
        <Col>
          <img src={profileIMG} alt="background" className="img-thumbnail" />
        </Col>
        <Col>
          <img src={profileIMG} alt="background" className="img-thumbnail" />
        </Col>
        <Col>
          <img src={profileIMG} alt="background" className="img-thumbnail" />
        </Col>
        <Col>
          <img src={profileIMG} alt="background" className="img-thumbnail" />
        </Col>
      </Row>
    </Container>
  );
};

export default About;
