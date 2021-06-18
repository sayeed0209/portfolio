import React, { useRef } from "react";
import { Col } from "react-bootstrap";
import profileIMG from "../../img/profile.png";
import percentageWhite from "../../img/percentage.PNG";
import "./About.css";

const About = () => {
	const percentageSectionRef = useRef(null);
	const firstUlElement = useRef(null);
	const secondUlElement = useRef(null);
	const onScrollAnimation = () => {
		const innerHeight = window.innerHeight;
		const scroll = window.scrollY;
		const element = percentageSectionRef.current;
		if (!element) return (window.onscroll = null);
		if (innerHeight + scroll >= element.offsetTop + 200) {
			firstUlElement.current.classList.add("move-right");
			secondUlElement.current.classList.add("move-right");
		} else {
			firstUlElement.current.classList.remove("move-right");
			secondUlElement.current.classList.remove("move-right");
		}
	};
	window.onscroll = onScrollAnimation;

	return (
		<div className='light'>
			<div className='shadow-sm p-5 mb-4 white'>
				<div className='d-flex flex-wrap'>
					<Col className='move-right'>
						<h1 className='display-2 font-weight-bold about text-break'>
							About
						</h1>
						<h2 className='lead my-4'>
							I'm web developer from Barcelona, Spain.
						</h2>
						<p>
							I'm Abu Sayeed I'm a Front end web developer based in Barcelona .I
							describe myself as a passionate developer who loves coding, open
							source, and the web platform. I have worked on a multitude of web
							and providing Web Design (Photoshop, Illustrator, Figma) and
							Development (HTML, CSS, SASS, JS,Bootstrap, Responsive
							Layouts,Node.js,MySQl,Mongodb,Express.js,ejs,pug).
						</p>
					</Col>
					<Col sm={12} md={6} lg={5} className='move-left'>
						<img
							src={profileIMG}
							alt='background'
							width='100%'
							className='ml-auto d-block'
						/>
					</Col>
				</div>
				<hr />
				<div className='d-flex flex-wrap justify-content-center'>
					<Col xs={6} sm={3} md={2} className='my-3'>
						<img
							src={profileIMG}
							alt='background'
							className='img-thumbnail bg-dark'
						/>{" "}
					</Col>
					<Col xs={6} sm={3} md={2} className='my-3'>
						<img src={profileIMG} alt='background' className='img-thumbnail' />
					</Col>
					<Col xs={6} sm={3} md={2} className='my-3'>
						<img src={profileIMG} alt='background' className='img-thumbnail' />
					</Col>
					<Col xs={6} sm={3} md={2} className='my-3'>
						<img src={profileIMG} alt='background' className='img-thumbnail' />
					</Col>
					<Col xs={6} sm={3} md={2} className='my-3'>
						<img src={profileIMG} alt='background' className='img-thumbnail' />
					</Col>
				</div>
			</div>
			{/*  */}

			<div
				className='d-flex flex-wrap justify-content-center align-items-stretch p-5 shadow-sm'
				ref={ref => {
					percentageSectionRef.current = ref;
				}}
			>
				<Col
					sm={12}
					md={4}
					className='d-flex flex-column justify-content-between'
				>
					<h1 className='text-break display-4 text-info font-weight-bold'>
						Backend
					</h1>
					<ul
						className='list-unstyled p-2 lead '
						ref={ref => {
							firstUlElement.current = ref;
						}}
					>
						<li className="text-warning font-weight-bold">Node</li>
						<li className="text-warning font-weight-bold">Express.js</li>
						<li className="text-warning font-weight-bold">MySql</li>
						<li className="text-warning font-weight-bold">Mongodb</li>
						<li className="text-warning font-weight-bold">Pug</li>
						<li className="text-warning font-weight-bold">ejs</li>
					</ul>
				</Col>
				<Col sm={12} md={4} className='mb-5'>
					<img
						src={percentageWhite}
						alt='background'
						width='100%'
						className='px-4'
					/>
				</Col>
				<Col
					sm={12}
					md={4}
					className='d-flex flex-column justify-content-between text-right'
				>
					<h1 className='text-break display-4 text-info font-weight-bold'>
						Front-end
					</h1>
					<ul
						className='list-unstyled  p-2 lead '
						ref={ref => {
							secondUlElement.current = ref;
						}}
					>
						<li className="text-warning font-weight-bold">HTML</li>
						<li className="text-warning font-weight-bold">CSS</li>
						<li className="text-warning font-weight-bold">SASS</li>
						<li className="text-warning font-weight-bold">JS</li>
						<li className="text-warning font-weight-bold">Bootstrap</li>
						<li className="text-warning font-weight-bold">jQuery</li>
						<li className="text-warning font-weight-bold">Bulma</li>
						<li className="text-warning font-weight-bold">Figma</li>
					</ul>
				</Col>
			</div>
		</div>
	);
};

export default About;
