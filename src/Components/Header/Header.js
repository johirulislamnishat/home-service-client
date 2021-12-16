import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../../App.css';
import useAuth from '../../Authentication/Hooks/useAuth';
import logo from '../../logo.png';
import "./Header.css";
import { CSSTransition } from "react-transition-group";

const Header = () => {
	const { user, logOut } = useAuth();

	const [isNavVisible, setNavVisibility] = useState(false);
	const [isSmallScreen, setIsSmallScreen] = useState(false);

	useEffect(() => {
		const mediaQuery = window.matchMedia("(max-width: 700px)");
		mediaQuery.addListener(handleMediaQueryChange);
		handleMediaQueryChange(mediaQuery);

		return () => {
			mediaQuery.removeListener(handleMediaQueryChange);
		};
	}, []);

	const handleMediaQueryChange = mediaQuery => {
		if (mediaQuery.matches) {
			setIsSmallScreen(true);
		} else {
			setIsSmallScreen(false);
		}
	};

	const toggleNav = () => {
		setNavVisibility(!isNavVisible);
	};

	return (

		<>
			<div className='HeaderBg'>
				<div className="Header container mx-auto">
					<img src={logo} className="Logo" alt="logo" />
					<CSSTransition
						in={!isSmallScreen || isNavVisible}
						timeout={350}
						classNames="NavAnimation"
						unmountOnExit
					>
						<nav className="Nav">

							<Link to="/"> Home </Link>
							<Link to="/services">
								Services
							</Link>

							<Link to="/teams">
								Teams
							</Link>

							<Link to="/dashboard/dashboard">
								Dashboard
							</Link>

							<Link to="/contact">
								Contact Us
							</Link>

							{user?.email ?
								<Link className='btn-main py-2 px-4' onClick={logOut} to="/">
									Sign Out
								</Link> : <Link className='btn-main py-2 px-4' to="/login">
									Sign In
								</Link>}
						</nav>
					</CSSTransition>
					<button onClick={toggleNav} className="Burger">
						<i class="fas fa-bars"></i>
					</button>
				</div>
			</div>

		</>
	);
};

export default Header;
