import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Service from './Service';
import './Services.css';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Services = () => {

    const [services, setServices] = useState([]);
    // const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('http://localhost:5000/services')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services">
            <div className="container my-5">
                <h1 className="text-center text-primary my-5">Our Services</h1>
                <div className="services-view">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={3}
                        centeredslide="true"
                        navigation
                        autoplay={true}
                        key={'services._id'}
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <Service key={service.id} service={service} />
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>
        </div>
    );
};

export default Services;