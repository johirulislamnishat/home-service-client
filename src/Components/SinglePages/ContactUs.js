import React, { useEffect } from 'react';
import FeaturedService from '../FeaturedService/FeaturedService';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import ContactForm from '../ContactForm/ContactForm';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="header-content">
      <Header />
      {/* <Banner /> */}
      <FeaturedService />
      <ContactForm />
      <Footer />
    </div>
  );
};

export default Contact;