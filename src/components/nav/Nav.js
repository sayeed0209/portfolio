import React, { useState, useEffect } from "react";
import "./Nav.css";
import { Navbar, Nav } from "react-bootstrap";
import { ReactComponent as LinkedinIMG } from "../../img/linkedin.svg";
import { ReactComponent as TwitterIMG } from "../../img/twitter.svg";
import { ReactComponent as GithubIMG } from "../../img/github.svg";
import logo from "../../img/a.svg";
import logo2 from "../../img/s.svg";
const NavComponent = ({
	props: {
		onClickShowAbout,
		onClickShowProject,
		onClickShowContact,
		isRendered,
		onRendered,
		onLogoClick,
	},
}) => {
	const [navbarClass, setNavbarClass] = useState(`p-3 px-5 move-down`);
	const [darkMode, setDarkMode] = useState(false);

	const onDarkMode = () => {
		setDarkMode(prevValue => {
			document.body.className = !prevValue ? "dark" : "";
			return !prevValue;
		});
	};
	useEffect(() => {
		if (isRendered) {
			setNavbarClass(`p-3 px-5 move-down`);
			onRendered();
			setTimeout(() => {
				setNavbarClass("p-3 px-5");
			}, 500);
		}
	}, [isRendered, onRendered]);

	return (
		<Navbar
			collapseOnSelect
			expand='lg'
			bg={darkMode ? "light" : "dark"}
			variant='dark'
			className={`${navbarClass}`}
		>
			<Navbar.Brand href='#home' onClick={onLogoClick} xs={10}>
				<img src={logo} width='50px' className='rounded-circle' alt='logo' />
				<img src={logo2} width='50px' className='rounded-circle' alt='logo' />
			</Navbar.Brand>
			<Navbar.Toggle aria-controls='responsive-navbar-nav' />
			<Navbar.Collapse id='responsive-navbar-nav'>
				<Nav className='ml-auto align-items-center'>
					<Nav.Link
						className={`px-4 btn btn-outline-warning my-2 ${
							darkMode ? "text-dark" : "text-white"
						}`}
						onClick={onClickShowAbout}
					>
						About
					</Nav.Link>
					<Nav.Link
						className={`px-4 mx-4 btn btn-outline-warning my-2 ${
							darkMode ? "text-dark" : "text-white"
						}`}
						onClick={onClickShowProject}
					>
						Projects
					</Nav.Link>
					<Nav.Link
						className={`px-4 btn btn-outline-warning my-2 ${
							darkMode ? "text-dark" : "text-white"
						}`}
						onClick={onClickShowContact}
					>
						Contact
					</Nav.Link>
					<Nav.Link
						href='https://www.linkedin.com/in/sayeed0209/'
						className='mx-4'
					>
						<LinkedinIMG
							width='35'
							height='35'
							fill={darkMode ? "blue" : "white"}
						/>
					</Nav.Link>
					<Nav.Link
						href='https://mobile.twitter.com/sayeed32295761'
						className='mx-2'
					>
						<TwitterIMG
							width='40'
							height='40'
							fill={darkMode ? "skyblue" : "white"}
						/>
					</Nav.Link>
					<Nav.Link href='https://github.com/sayeed0209' className='mx-2'>
						<GithubIMG
							width='40'
							height='40'
							fill={darkMode ? "dark" : "white"}
						/>
					</Nav.Link>

					<label className='switch ml-4 my-2'>
						<input type='checkbox' onChange={onDarkMode} />
						<span className='slider round'></span>
					</label>
				</Nav>
			</Navbar.Collapse>
		</Navbar>
	);
};

export default NavComponent;
