import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import profileIMG from "../../img/profile.png";
import percentageWhite from "../../img/percentage.PNG";
import './About.css'
const About = () => {
  return (
    <div className="bg-light"> 
       <div className="shadow-sm p-5 mb-4 bg-white" >
      <div className="d-flex">
        <Col className="move-right">
          <h1 className="display-2 font-weight-bold about">About</h1>
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
        <Col sm={12} md={6} lg={5} className="move-left">
          <img
            src={profileIMG}
            alt="background"
            width="100%"
            className="ml-auto d-block"
          />
        </Col>
      </div>
      <hr />
      <div className="d-flex justify-content-center">
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
      </div>
      </div>
     {/*  */}
     <Container>
      <Row className="justify-content-center align-items-stretch"> 
      <Col sm={12} md={4} className="d-flex flex-column justify-content-between">
        <h1 className="text-break display-4">Backend</h1>
         <ul className="list-unstyled p-2 lead">
         <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
        
        
        
         
         </ul>
      </Col>
      <Col sm={12} md={4}>
          <img src={percentageWhite} alt="background" width="100%"  className="px-4"/>
        </Col>
        <Col sm={12} md={4} className="d-flex flex-column justify-content-between text-right">
        <h1 className="text-break display-4 ">Front-end</h1>
        <ul className="list-unstyled  p-2 lead">
        <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
         <li >lorem  lorem loremmlorem </li>
         
         </ul>
        </Col>
       </Row>
       </Container>
    </div>
  );
};

export default About;
