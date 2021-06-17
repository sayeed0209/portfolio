import React,{useRef} from "react";
import { Col } from "react-bootstrap";
import profileIMG from "../../img/profile.png";
import percentageWhite from "../../img/percentage.PNG";
import "./About.css";

const About = () => {
const percentageSectionRef= useRef(null)
const firstUlElement = useRef(null)
const secondUlElement = useRef(null)
const onScrollAnimation =()=>{
  const innerHeight = window.innerHeight
  const scroll =  window.scrollY
  const element = percentageSectionRef.current
  if(!element)return window.onscroll=null
  if(innerHeight + scroll >= element.offsetTop +200){
    firstUlElement.current.classList.add('move-right')
    secondUlElement.current.classList.add('move-right')
  } else {
    firstUlElement.current.classList.remove('move-right')
    secondUlElement.current.classList.remove('move-right')
  }
}
window.onscroll= onScrollAnimation

  return (
    <div className="bg-light">
      <div className="shadow-sm p-5 mb-4 bg-white">
        <div className="d-flex flex-wrap">
          <Col className="move-right">
            <h1 className="display-2 font-weight-bold about text-break">About</h1>
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
        <div className="d-flex flex-wrap justify-content-center">
          <Col xs ={6}sm={3} md={2} className="my-3">
            <img
              src={profileIMG}
              alt="background"
              className="img-thumbnail bg-dark"
            />{" "}
          </Col>
          <Col xs ={6}sm={3} md={2} className="my-3">
            <img src={profileIMG} alt="background" className="img-thumbnail" />
          </Col>
          <Col xs ={6}sm={3} md={2} className="my-3" >
            <img src={profileIMG} alt="background" className="img-thumbnail" />
          </Col>
          <Col xs ={6}sm={3} md={2} className="my-3">
            <img src={profileIMG} alt="background" className="img-thumbnail" />
          </Col>
          <Col xs ={6}sm={3} md={2} className="my-3">
            <img src={profileIMG} alt="background" className="img-thumbnail" />
          </Col>
        </div>
      </div>
      {/*  */}

      <div className="d-flex flex-wrap justify-content-center align-items-stretch p-5 shadow-sm" ref={(ref)=>{percentageSectionRef.current=ref}}>
        <Col
          sm={12}
          md={4}
          className="d-flex flex-column justify-content-between"
        >
          <h1 className="text-break display-4">Backend</h1>
          <ul className="list-unstyled p-2 lead" ref={(ref)=>{firstUlElement.current=ref}}>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
          </ul>
        </Col>
        <Col sm={12} md={4} className="mb-5">
          <img
            src={percentageWhite}
            alt="background"
            width="100%"
            className="px-4"
          />
        </Col>
        <Col
          sm={12}
          md={4}
          className="d-flex flex-column justify-content-between text-right"
        >
          <h1 className="text-break display-4 ">Front-end</h1>
          <ul className="list-unstyled  p-2 lead" ref={(ref)=>{secondUlElement.current=ref}}>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
            <li>lorem lorem loremmlorem </li>
          </ul>
        </Col>
      </div>
    </div>
  );
};

export default About;
