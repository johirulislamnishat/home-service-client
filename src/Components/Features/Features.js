import React from 'react';
import { Carousel, CarouselControl, CarouselIndicators, CarouselItem } from 'reactstrap';
import features from '../../Data/features';
import './Features.css';

const items = [
	{
		src: 'https://i.ibb.co/r6VtMFs/slide5.png'
	},
	{
		src: 'https://i.ibb.co/1n7QLsP/slide3.png'
	},
	{
		src: 'https://i.ibb.co/XWTy3w4/banner3.png'
	},
	{
		src: 'https://i.ibb.co/6wDJNfh/banner2.png'
	}
];

const Features = () => {
	const [activeIndex, setActiveIndex] = React.useState(0);
	const [animating, setAnimating] = React.useState(false);

	const onExiting = () => {
		setAnimating(true);
	};
	const onExited = () => {
		setAnimating(false);
	};
	const next = () => {
		if (animating) return;
		const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
		setActiveIndex(nextIndex);
	};
	const previous = () => {
		if (animating) return;
		const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
		setActiveIndex(nextIndex);
	};
	const goToIndex = (newIndex) => {
		if (animating) return;
		setActiveIndex(newIndex);
	};

	const slides = items.map((item) => {
		return (
			<CarouselItem onExiting={onExiting} onExited={onExited} key={item.src}>
				<img src={item.src} alt={item.altText} width="100%" className="img-fluid carousel-inner" />
			</CarouselItem>
		);
	});

	return (
		<section id="features">
			<div className="container">
				<div className="row">
					<div className="mt-4">
						<h4 className="mb-5 mt-5 text-center">
							Home Repair Services strengthens vulnerable Kent County
							homeowners because strong homeowners build strong communities.
						</h4>
					</div>
					<div className="col-md-6 align-self-center">
						<ul>
							{features.map((feature) => (
								<li key={feature.icon}>
									<div className="d-flex">
										<div className="icon">
											<span>{feature.icon}</span>
										</div>
										<div className="features-item-text">
											<h6>{feature.title}</h6>
											<p style={{ textAlign: 'left' }}>{feature.description}</p>
										</div>
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className="col-md-6 carousel-inner">
						<Carousel
							activeIndex={activeIndex}
							next={next}
							previous={previous}
							keyboard={false}
							pause={false}
							ride="carousel"
							interval="2000"
							slide={false}
							className="carousel-fade"
						>
							<CarouselIndicators items={items} activeIndex={activeIndex} onClickHandler={goToIndex} className="d-none" />
							{slides}
							{/* <CarouselControl direction="prev" directionText="Previous" onClickHandler={previous} />
							<CarouselControl direction="next" directionText="Next" onClickHandler={next} /> */}
						</Carousel>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Features;
