import React, { useState } from 'react';
import Grid from '@mui/material/Grid';
import CardActions from '@mui/material/CardActions';
import BookingModal from './BookingModal';
const ServiceBooking = ({ service }) => {

    const { serviceType
        , serviceName, shortDes, serviceRating, mainImage, price } = service;

    //modal
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);


    return (
        <>
            <Grid item xs={4} sm={4} md={4}>
                <div className="single-service">

                    <img className="img-fluid service-image" src={mainImage} alt="service" />

                    <div className="service-description">
                        <p className="service-category">{serviceType}</p>
                        <h4 className="service-name">{serviceName}</h4>

                        <h6 className="smallText">{serviceRating}</h6>
                        <h6 className="smallText">৳ {price}</h6>

                    </div>

                    <CardActions sx={{ display: 'flex', justifyContent: 'center', }}>

                        <input onClick={handleOpen} className="btn-main button-style mt-3 py-2 px-3" type="submit" value="Book A Service" />
                    </CardActions>
                </div>
            </Grid>

            <div>
                <BookingModal

                    open={open}
                    handleClose={handleClose}
                    service={service}
                ></BookingModal>

            </div>


        </>
    );
};

export default ServiceBooking;