import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Services.css';

const Service = ({ service }) => {
	const { serviceType
		, serviceName, shortDes, serviceRating, mainImage, price } = service;

	const [descriptionCollapse, setDescriptionCollapse] = useState(false);

	const showMore = () => {
		setDescriptionCollapse(true);
	};

	const showLess = () => {
		setDescriptionCollapse(false);
	};

	return (
		<div className="single-service">

			<img className="img-fluid service-image" src={mainImage} alt="service" />
			{/* {!doctorsData.image ? (
			) : (
				<img style={{ height: '200px' }} src={`data:image/png;base64,${doctorsData.image.img}`} alt="doctor" />
			)} */}

			<div className="service-description">
				<p className="service-category">{serviceType}</p>
				<h4 className="service-name">{serviceName}</h4>
				<span className="service-education">{descriptionCollapse ? shortDes : shortDes.substr(0, 80)}</span>
				{shortDes.length > 80 ? descriptionCollapse ? (
					<span onClick={showLess} className="collapse-btn">
						See Less
					</span>
				) : (
					<span onClick={showMore} className="collapse-btn">
						See More
					</span>
				) : (
					<span> </span>
				)}

				<h6 className="smallText">{serviceRating}</h6>
				<h6 className="smallText">৳ {price}</h6>
				<div className="text-center">
					<Link to="/services">
						<button className="btn-main button-style mt-3 py-2 px-3">
							<FontAwesomeIcon icon={faCalendarCheck} className="mr-3" /> Book A Service
						</button>
					</Link>
				</div>
			</div>
		</div>
	);
};

export default Service;
