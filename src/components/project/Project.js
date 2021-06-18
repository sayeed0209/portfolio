import React from "react";
import CardComponenet from "../card/CardComponent";
import { Card, Col } from "react-bootstrap";
import codeImg from "../../img/projectFile.jpg";
import ProjectJSON from "../../db/project.json";
const Project = () => {
	const title = "Project";
	const subtitle =
		"My Recent Work";
	const description = "Here are a few design projects I've worked on recently.";
	const picture = codeImg;
	const projectList = ProjectJSON.map(project => {
		return (
			<Col key={project.id} className=' mb-5' xs={12} sm={6} md={4}>
				<Card className='h-100 white'>
					<Card.Img variant='top' src={project.img} />
					<Card.Body className='d-flex flex-column justify-content-between'>
						<Card.Title>{project.title}</Card.Title>
						<Card.Text>{project.description}</Card.Text>
						<a className='btn btn-primary' href={project.link}>
							Go to
						</a>
					</Card.Body>
				</Card>
			</Col>
		);
	});
	return (
		<div className='white'>
			<CardComponenet
				picture={picture}
				title={title}
				subtitle={subtitle}
				description={description}
			/>
			<div className='d-flex flex-wrap  justify-content-center light p-5 shadow-sm'>
				{projectList}
			</div>
		</div>
	);
};

export default Project;
