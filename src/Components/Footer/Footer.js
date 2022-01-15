import { faFacebookF, faGooglePlusG, faInstagram } from '@fortawesome/free-brands-svg-icons';
import { faUser } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import Modal from 'react-modal';
import { Link } from 'react-router-dom';
import './Footer.css';
import FooterCol from './FooterCol';

const Footer = () => {
	const [modalIsOpen, setModalIsOpen] = useState(false);

	const noNamed = [
		{ name: 'support@clining.com', link: '/' },
		{ name: '+091-8660-3539', link: '/' },
		{ name: 'Emergency Home Service', link: '/' },
		{ name: 'House Checkup', link: '/' },
		{ name: 'School Service', link: '/' },
		{ name: 'Home Extraction', link: '/' },
		{ name: 'Home Repairing', link: '/' }
	];
	const ourAddress = [
		{ name: 'Block#09, House#39, London', link: '/' },
		{ name: 'Location in Google', link: '/' }
	];
	const houseCleaning = [
		{ name: 'Homeowner', link: '/' },
		{ name: 'Self-Help Services', link: '/' },
		{ name: 'Housing Counseling', link: '/' },
		{ name: 'Housing & Education', link: '/' },
		{ name: 'Repair & Access Services', link: '/' },
		{ name: 'Cleaning with Care', link: '/' },
		{ name: 'Self-Help Services', link: '/' }
	];
	const services = [
		{ name: 'Enjoy Cleanliness', link: '/' },
		{ name: 'Easy Online Scheduling', link: '/' },
		{ name: 'Housing & Education', link: '/' },
		{ name: 'Get Amazing Cleaning', link: '/' },
		{ name: 'Residential Cleaning', link: '/' },
		{ name: 'Commercial Cleaning', link: '/' },
		{ name: 'After Renovation', link: '/' }
	];
	return (
		<>
			<footer className="footer-area clear-both">
				<div className="container pt-3">
					<div className="row py-5">
						<FooterCol key={1} menuTitle={"Online 's Portal"} menuItems={noNamed} />
						<FooterCol key={2} menuTitle="Services" menuItems={services} />
						<FooterCol key={3} menuTitle="Oral Health" menuItems={houseCleaning} />
						<FooterCol key={4} menuTitle="Our Address" menuItems={ourAddress}>
							<ul className="social-media list-inline">
								<li className="list-inline-item">
									<a href="//facebook.com">
										<FontAwesomeIcon className="icon" icon={faFacebookF} />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="//google.com">
										<FontAwesomeIcon className="icon" icon={faGooglePlusG} />
									</a>
								</li>
								<li className="list-inline-item">
									<a href="//instagram.com">
										<FontAwesomeIcon className="icon" icon={faInstagram} />
									</a>
								</li>
							</ul>
							<div className="mt-2">
								<h6 className="mb-2"> Open Admin Pannel</h6>
								<button className="btn-main py-2 px-4" onClick={() => setModalIsOpen(true)}>
									<FontAwesomeIcon className="icon mr-2" icon={faUser} />Admin Panel
								</button>
							</div>
						</FooterCol>
					</div>
					<div className="copyRight text-center pb-3 text-secondary">
						<p> &copy; 2021 Developed by Johirul Islam Nishat</p>
					</div>
				</div>
			</footer>

			<Modal
				isOpen={modalIsOpen}
				onRequestClose={() => setModalIsOpen(false)}
				id="modal-responsive"
				style={{
					overlay: {
						backgroundColor: 'rgba(130,125,125,0.75)'
					},
					content: {
						top: '50%',
						left: '50%',
						right: 'auto',
						bottom: 'auto',
						marginRight: '-50%',
						width: '50%',
						transform: 'translate(-50%, -50%)'
					}
				}}
			>
				<form className="px-5 my-3 text-center">
					<p className="text-center mb-2 mt-3">
						<small>You need to Login with this email and password</small>
					</p>
					<h5 className="text-secondary mb-3">Email: admin@admin.com</h5>
					<h6 className="text-secondary mb-3">Password: admin@123456</h6>
					<p className="text-center mb-2 mt-3 px-5">
						<small>Or you can create a new account or signIn with a account which You did not use or provide. </small>
					</p>
					<div className="form-group text-center mt-2">
						<Link to="/dashboard">
							<button className="btn-main py-2 px-4 mr-3 text-white">Open Admin Panel</button>
						</Link>
					</div>
				</form>
			</Modal>
		</>
	);
};

export default Footer;
