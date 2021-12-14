import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Services from '../Services/Services';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Features from '../../Features/Features';
import Testimonials from '../../Testimonials/Testimonials';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Blogs from '../../Blogs/Blogs';
import Doctors from '../../Doctors/Doctors';
import TopBanner from '../TopBar/TopBanner';

const Home = () => {
    return (
        <>

            <div >

                <Header />
                <TopBanner />
                <Services />
                <AppointmentBanner />
                <Doctors />
                <Features />
                <Testimonials />
                <FeaturedService />
                <Blogs />
                <Footer />

            </div>
        </>
    );
};

export default Home;