import React from 'react';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import TopBanner from '../Home/TopBar/TopBanner';
import AvailableServices from './AvailableServices';

const ServicesPage = () => {
    return (
        <div>
            <Header />
            <TopBanner />
            <AvailableServices />
            <Footer />
        </div>
    );
};

export default ServicesPage;