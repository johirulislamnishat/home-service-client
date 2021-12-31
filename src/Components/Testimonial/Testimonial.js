import React from 'react';
import Rating from 'react-rating';


const Testimonial = (props) => {
	const { quote, name, from, img, rating } = props.reviews;
	return (
		<div className="card-deck mt-4 mb-5">
			<div className="card shadow-md">
				<div class="card-body">
					<p class="card-text text-left">{quote}</p>
				</div>
				<div className="card-footer d-flex  align-items-center">
					<img className="mr-3 rounded-circle" src={img} alt="user" width="60" height="60" />
					<div>
						<h6 className="text-primary">{name}</h6>

						<Rating
							initialRating={rating}
							readonly
							emptySymbol='far fa-star text-warning'
							fullSymbol='fas fa-star text-warning'
						/>

						<p className="text-left">{from}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Testimonial;
