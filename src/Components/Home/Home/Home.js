import React from 'react';
import InfographicMiddle from '../InfographicMiddle/InfographicMiddle';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Features from '../../Features/Features';
import Testimonials from '../../Testimonials/Testimonials';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Blogs from '../../Blogs/Blogs';
import Doctors from '../../Doctors/Doctors';
import TopBanner from '../TopBar/TopBanner';
import TopInfographics from '../TopInfographics/TopInfographics';

const Home = () => {
    return (
        <>

            <div >

                <Header />
                <TopBanner />
                <TopInfographics />
                <Doctors />
                <InfographicMiddle />
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