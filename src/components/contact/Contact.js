import React from "react";
import CardComponent from "../card/CardComponent";
import { ReactComponent as LinkedinIMG } from "../../img/linkedin.svg";
import { ReactComponent as TwitterIMG } from "../../img/twitter.svg";
import { ReactComponent as GithubIMG } from "../../img/github.svg";
import { Col, Form, Button } from "react-bootstrap";
import logo from "../../img/a.svg";
const Contact = () => {
	const onIconClick = link => {
		window.location.href = link;
	};

	const onSubmitForm = e => {
		e.preventDefault();
		const validRegex =
			/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
		const email = document.forms[0]._replyto.value;
		const name = document.forms[0].name.value;
		const message = document.forms[0].message.value;

		if (!email.match(validRegex) || name.length < 1 || message.length < 1) {
			alert("Please see all the field has filed with the valid value");
		} else {
			document.forms[0].submit({
				_replyto: email,
				name,
				message,
			});
			document.forms[0].reset();
		}
	};

	const title = "Contact";
	const subtitle =
		"Do you speak Na’vi? It's ok if you don't, I speak English too";
	const socialIcon = [
		{
			SVG: (
				<LinkedinIMG
					fill='blue'
					width='100%'
					className='h-auto'
					onClick={() => {
						onIconClick("https://www.linkedin.com/in/sayeed0209/");
					}}
				/>
			),
			title: "Linkedin",
		},
		{
			SVG: (
				<TwitterIMG
					fill='skyblue'
					width='100%'
					className='h-auto '
					onClick={() => {
						onIconClick("https://mobile.twitter.com/sayeed32295761");
					}}
				/>
			),
			title: "Twitter",
		},
		{
			SVG: (
				<GithubIMG
					fill='green'
					width='100%'
					className='h-auto'
					onClick={() => {
						onIconClick("https://github.com/sayeed0209");
					}}
				/>
			),
			title: "Github",
		},
	];

	const description = (
		<div className='d-flex flex-wrap white'>
			{socialIcon.map((item, index) => (
				<Col
					xs={10}
					sm={6}
					md={8}
					lg={6}
					className='my-3 d-flex flex-wrap'
					key={index}
				>
					<Col xs={7} sm={6} md={6} lg={6}>
						{item.SVG}
					</Col>
					<Col
						xs={5}
						sm={6}
						md={6}
						lg={6}
						className='d-flex align-items-center'
					>
						<h2>{item.title}</h2>
					</Col>
				</Col>
			))}
		</div>
	);
	const picture = logo;
	return (
		<div className='white'>
			<CardComponent
				picture={picture}
				title={title}
				description={description}
				subtitle={subtitle}
			/>
			<Form
				className='d-flex flex-wrap light p-5'
				action='https://formspree.io/f/mjvjrekp'
				method='POST'
				onSubmit={onSubmitForm}
			>
				<Form.Group
					className='mb-3'
					as={Col}
					xs={6}
					controlId='exampleForm.ControlInput1'
				>
					<Form.Label>Name</Form.Label>
					<Form.Control type='text' placeholder='Sayeed' name='name' />
				</Form.Group>
				<Form.Group
					className='mb-3'
					as={Col}
					xs={6}
					controlId='exampleForm.ControlInput1'
				>
					<Form.Label>Email address</Form.Label>
					<Form.Control
						type='email'
						placeholder='name@example.com'
						name='_replyto'
					/>
				</Form.Group>
				<Form.Group
					className='mb-3'
					as={Col}
					xs={6}
					controlId='exampleForm.ControlTextarea1'
				>
					<Form.Label>Example textarea</Form.Label>

					<Form.Control as='textarea' rows={3} name='message' />
				</Form.Group>
				<Col sm={12}>
					<Button variant='dark' className='py-2 px-5 white' type='submit'>
						Send
					</Button>
				</Col>
			</Form>
		</div>
	);
};

export default Contact;
