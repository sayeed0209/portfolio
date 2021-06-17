import React ,{useState}from "react";
import codeImgMix from "../../img/newhome.png";
import codeImg from "../../img/newhome1.png";
import profile from "../../img/profile.png";



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
      <React.Fragment>
    <div className="d-flex flex-wrap p-4 white position-relative scale-in-hor-center" onMouseOver={onMouseHover} onMouseOut={onMouseOut }>
        <Col><h1 className="display-2 font-weight-bold">title</h1><h1 className="display-4">subtitle</h1></Col>
        <Col xs ={6}sm={3} md={2} lg={6}><img src={codeImgMix} className="w-100  " alt='profile'/></Col>
        <Col><h1 className="display-2 font-weight-bold">{title}</h1><h1 className="display-4">subtitle</h1></Col>
        <div className={`position-absolute d-flex flex-wrap white ${hideImageLeft} w-100 p-4 homecard`}>
        <Col><h1 className="display-2 font-weight-bold">title</h1><h1 className="display-4">subtitletitle</h1></Col>
        <Col xs ={6}sm={3} md={2} lg={6} className="mx-auto"><img src={profile} className="w-100 " alt='profile'/></Col>
        <Col></Col>
        </div>
        <div className={`position-absolute d-flex flex-wrap white ${hideImageRight} w-100 p-4  homecard`}>
            <Col></Col>
        <Col xs ={6}sm={3} md={2} lg={6}><img src={codeImg} className="w-100" alt='profile'/></Col>
        <Col><h1 className="display-2 font-weight-bold">title</h1><h1 className="display-4">subtitletitle</h1></Col>
        </div>
        
    </div>
    <div className="light py-5 ">
            <p className="text-center pb-5 lead">loremSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSSS</p>
    </div>
</React.Fragment>
  );
};

export default Home;
