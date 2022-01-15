import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import './TopBanner.css';

const TopBanner = () => {

    return (

        <>
            <Carousel showThumbs={false} autoPlay={2000} infiniteLoop={true}>
                <div id="myCarousel" className="carousel slide">
                    <div className="carousel-middle">
                        <div className="item active">

                            <div className="fill" style={{ backgroundImage: "url('https://media.istockphoto.com/photos/technician-services-outside-ac-units-and-generator-picture-id1315493892?k=20&m=1315493892&s=612x612&w=0&h=_b5fWkSRiFLGlSxMpMASBwNMw7fdgSukwzTwvWtLO64=')" }}></div>
                            <div className="carousel-caption">
                                <h2 className="animated fadeInLeft">Home Maintenance Check-ups
                                </h2>
                                <p className="animated fadeInUp">We offer a free educational inspection service for existing homeowners interested in learning about the health and safety of their home.

                                </p>
                                <p className="animated fadeInUp"><Link to="/services" className="btn btn-transparent btn-rounded btn-large">See More</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="myCarousel" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="item">

                            <div className="fill" style={{ backgroundImage: "url('https://media.istockphoto.com/photos/creating-3d-figures-picture-id897895830?k=20&m=897895830&s=612x612&w=0&h=4_JhmJYtfyptLUaCvOqGh38_wGDnzR8sNS9vh0I0PJM=')" }}></div>
                            <div className="carousel-caption">
                                <h2 className="animated fadeInDown">Remodeling Together
                                </h2>
                                <p className="animated fadeInUp">We provide free design service and discounted kitchen materials for your DIY kitchen project.

                                </p>
                                <p className="animated fadeInUp"><Link to="/services" className="btn btn-transparent btn-rounded btn-large">See More</Link></p>
                            </div>
                        </div>

                    </div>
                </div>
                <div id="myCarousel" className="carousel slide">
                    <div className="carousel-inner">
                        <div className="item">

                            <div className="fill" style={{ backgroundImage: "url('https://media.istockphoto.com/photos/cropped-view-of-repairman-putting-screwdriver-in-tool-box-at-bathroom-picture-id1091652396?k=20&m=1091652396&s=612x612&w=0&h=CBOrW30FI7pm56JACVWLJ6DxOAMvQr2mwx8fAEl1N7c=')" }}></div>
                            <div className="carousel-caption">
                                <h2 className="animated fadeInRight">Handyman Service

                                </h2>
                                <p className="animated fadeInRight">When you use the Handy app or website, you’ll be connected with local handyman professionals who can take care of this work for you.</p>
                                <p className="animated fadeInRight"><Link to="/services" className="btn btn-transparent btn-rounded btn-large">See More</Link></p>
                            </div>
                        </div>
                    </div>
                </div>
            </Carousel>

        </>
    );
};

export default TopBanner;