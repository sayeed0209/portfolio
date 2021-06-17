import React ,{useState}from "react";
import codeImgMix from "../../img/homeimgmix.png";
import codeImg from "../../img/homeimg.png";



import { Col } from "react-bootstrap";
import "./Home.css";
const Home = () => {
    const [hideImageLeft,setHideImageLeft] = useState('hidden');
    const [hideImageRight,setHideImageRight] = useState('hidden');
    const title = '<coder>'
    const onMouseHover=(e)=>{
        const width = window.innerWidth/2
        console.log(width,e.clientX)
        if(e.clientX < width){
            setHideImageLeft('scale-in-hor-left ')
            setHideImageRight('hidden ')
        }else{
            setHideImageRight('scale-in-hor-right')
            setHideImageLeft('hidden')
        }
    }
    const onMouseOut =()=>{
        setHideImageLeft('hidden')
        setHideImageRight('hidden')
    }
  return (
    <div className="d-flex flex-wrap p-4 bg-light position-relative scale-in-hor-center" onMouseOver={onMouseHover} onMouseOut={onMouseOut }>
        <Col><h1>title</h1><h1>subtitle</h1></Col>
        <Col xs ={6}sm={3} md={2} lg={6}><img src={codeImgMix} className="w-100 mb-5 " alt='profile'/></Col>
        <Col><h1>{title}</h1><h1>subtitle</h1></Col>
        <div className={`position-absolute d-flex flex-wrap bg-light ${hideImageLeft} w-100 p-4 homecard`}>
        <Col><h1>title</h1><h1>subtitletitle</h1></Col>
        <Col xs ={6}sm={3} md={2} lg={6} className="mx-auto"><img src={codeImg} className="w-100 " alt='profile'/></Col>
        <Col></Col>
        </div>
        <div className={`position-absolute d-flex flex-wrap bg-light ${hideImageRight} w-100 p-4  homecard`}>
            <Col></Col>
        <Col xs ={6}sm={3} md={2} lg={6}><img src={codeImg} className="w-100" alt='profile'/></Col>
        <Col><h1>title</h1><h1>subtitletitle</h1></Col>
        </div>
    </div>
  );
};

export default Home;
