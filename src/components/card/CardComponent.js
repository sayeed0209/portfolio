import React from 'react';
import {Col} from 'react-bootstrap'
const CardComponenet=({picture,title,subtitle,description})=>{
  return(<div className="shadow-sm p-5 mb-1 bg-white">
  <div className="d-flex flex-wrap">
    <Col className="move-right">
      <h1 className="display-2 font-weight-bold about text-break">{title}</h1>
      <h2 className="lead my-4">
        {subtitle}
      </h2>
      <p>
        {description}
      </p>
    </Col>
    <Col sm={12} md={6} lg={5} className="move-left">
      <img
        src={picture}
        alt="background"
        width="100%"
        className="ml-auto d-block"
      />
    </Col>
  </div>
  <hr />
  
</div>)
    
}

export default CardComponenet