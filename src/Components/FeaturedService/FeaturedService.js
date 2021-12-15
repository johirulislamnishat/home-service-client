import React from 'react';
import { Link } from 'react-router-dom';
import featuredImg from '../../images/slide2.png';

const FeaturedService = () => {
	return (
		<section className="features-service my-5">
			<div className="container mb-5">
				<div className="row mb-5">
					<div className="col-md-7 align-self-center">
						<h1 className="style-color"> Are You a Specialized Engineer ?</h1>
						<p className="text-secondary my-5" style={{ fontSize: '20px' }}>
							Welcome. And We are inviting to join our creative team and Create your own identity. Provide Engineer
							Consultancy via video call and expand the reach of your service. We have a strong network.
						</p>
						<Link to="/registration">
							<button className="btn-main py-2 px-4 button-style mb-5">Sign Up</button>
						</Link>
					</div>
					<div className="col-md-5 mb-4">
						<img className="img-fluid" src={featuredImg} alt="doctor-need" />
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeaturedService;
