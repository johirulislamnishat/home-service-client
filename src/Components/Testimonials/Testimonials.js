import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Testimonial from '../Testimonial/Testimonial';
import { Typography } from '@mui/material';
import './Testimonials.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Testimonials = () => {

	const [reviews, SetReviews] = useState([]);

	useEffect(() => {
		fetch("https://home-service24.herokuapp.com/addReviews")
			.then(res => res.json())
			.then(data => {
				SetReviews(data);
			});
	}, []);

	return (
		<div className="testimonials mt-5 py-4">
			<div className="container">
				<Typography sx={{ color: "#2097fc", mb: 2, mt: 10, textAlign: 'center' }} variant="h6" component="div">
					OUR CLIENT SAYS
				</Typography>
				<Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
					See Our Clients Feedback
				</Typography>

				<Swiper
					spaceBetween={30}
					slidesPerView="auto"
					centeredslide="false"
					navigation
					autoplay={true}
					key={reviews.length}
				>
					{reviews.map((reviews, index) => (
						<SwiperSlide key={index}>
							<Testimonial reviews={reviews} />
						</SwiperSlide>
					))}
				</Swiper>
			</div>
		</div>
	);
};

export default Testimonials;
