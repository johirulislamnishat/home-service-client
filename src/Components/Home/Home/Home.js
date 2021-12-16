import React from 'react';
import InfographicMiddle from '../InfographicMiddle/InfographicMiddle';
import Header from '../../Header/Header';
import Footer from '../../Footer/Footer';
import Features from '../../Features/Features';
import Testimonials from '../../Testimonials/Testimonials';
import FeaturedService from '../../FeaturedService/FeaturedService';
import Blogs from '../../Blogs/Blogs';
import TopBanner from '../TopBar/TopBanner';
import TopInfographics from '../TopInfographics/TopInfographics';
import Services from '../../Services/Services';
import Engineers from '../Engineers/Engineers';
import Package from '../Package/Package';

const Home = () => {
    return (
        <>

            <div >

                <Header />
                <TopBanner />
                <TopInfographics />
                <Services />
                <Package />
                <InfographicMiddle />
                <Engineers />
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