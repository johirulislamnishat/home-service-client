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
	// const [isSticky, setSticky] = useState(false);
	// const [isCollapsed, setCollapsed] = useState(null);
	// const [navStyle, setNavStyle] = useState('text-gray');

	// useEffect(() => {
	// 	window.addEventListener('scroll', () => {
	// 		if (window.scrollY > 50) {
	// 			setSticky(true);
	// 			setNavStyle('');
	// 		} else {
	// 			setSticky(false);
	// 			setNavStyle('text-gray');
	// 		}
	// 	});
	// }, []);
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
							<Link to="/appointment">
								Make Appointment
							</Link>

							<Link to="/dashboard/dashboard">
								Dashboard
							</Link>

							<Link to="/contact">
								Contact Us
							</Link>

							{user?.email ?
								<Link onClick={logOut} to="/">
									Sign Out
								</Link> : <Link to="/login">
									Sign In
								</Link>}
						</nav>
					</CSSTransition>
					<button onClick={toggleNav} className="Burger">
						🍔
					</button>
				</div>
			</div>
			{/* <nav
			{require("../assets/logo.png")}
			className={
				isSticky || isCollapsed ? (
					'slide in show shadow-sm navbar navbar-expand-sm bg-white navbar-light py-3 '
				) : (
					'slide out show navbar navbar-expand-sm navbar-light py-4  '
				)
			}
		>
			<div className="container">
				<Link className="navbar-brand" to="/" style={{ color: '#15D1C8' }}>
					<img src={logo} alt="logo" /><span className="logo-name"> Online Doctor's Portal </span>
				</Link>
				<button
					onClick={() => setCollapsed(!isCollapsed ? 'show' : null)}
					className="navbar-toggler d-lg-none"
					type="button"
					data-toggle="collapse"
					data-target="#collapsibleNavId"
					aria-controls="collapsibleNavId"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon" />
				</button>
				<div className={`collapse navbar-collapse ${isCollapsed}`} id="collapsibleNavId">
					<ul className="navbar-nav ml-auto mt-2 mt-lg-0">
						<li className="nav-item active">
							<Link className="nav-link" to="/">
								Home
							</Link>
						</li>
						<li className="nav-item">
							<Link className="nav-link" to="/appointment">
								Make Appointment
							</Link>
						</li>
						<li className="nav-item">
							<Link className={`nav-link ${navStyle}`} to="/dashboard/dashboard">
								Dashboard
							</Link>
						</li> */}
			{/* <li className="nav-item">
							<Link className={`nav-link ${navStyle}`} to="/reviews">
								Reviews
							</Link>
						</li> */}
			{/* <li className="nav-item">
							<Link className={`nav-link ${navStyle}`} to="/contact">
								Contact Us
							</Link>
						</li>

						{user?.email ? <li className="nav-item">
							<Link onClick={logOut} className={`nav-link ${navStyle}`} to="/">
								Sign Out
							</Link>
						</li> : <li className="nav-item">
							<Link className={`nav-link ${navStyle}`} to="/login">
								Sign In
							</Link>
						</li>}
					</ul>
				</div>
			</div>
		</nav> */}

		</>
	);
};

export default Header;
