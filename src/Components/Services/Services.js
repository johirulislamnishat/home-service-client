import React, { useEffect, useState } from 'react';
import SwiperCore, { A11y, Autoplay, Navigation, Pagination, Scrollbar, Virtual } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import Service from './Service';
import './Services.css';
import { Typography } from '@mui/material';

SwiperCore.use([Navigation, Pagination, Scrollbar, A11y, Autoplay, Virtual]);

const Services = () => {

    const [services, setServices] = useState([]);
    // const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('https://home-service24.herokuapp.com/services')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setServices(data))
    }, [])

    return (
        <div className="services">
            <div className="container my-5">
                <Typography sx={{ color: "#2097fc", mb: 2, mt: 10, textAlign: 'center' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <div className="services-view mt-5">
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