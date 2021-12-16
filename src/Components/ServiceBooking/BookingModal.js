import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { TextField } from '@mui/material';
import Sneackbar from '../Sneackbar';


const BookingModal = ({ open, handleClose, service }) => {

    const { serviceType
        , serviceName, shortDes, serviceRating, mainImage, price } = service;

    const [openSneackBar, setOpenSneackBar] = useState(false);
    const [bookingInfo, setBookingInfo] = useState();
    const email = localStorage.getItem('email');

    const handleOnSubmit = e => {
        e.email = (email)
        // collect data
        const bookService = {
            ...bookingInfo,
            serviceType,
            serviceName,
            shortDes,
            serviceRating,
            mainImage,
            price,
            email,
            status: 'Pending'

        }

        //send data to server
        fetch('http://localhost:5000/bookedServices', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(bookService)
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data)
                setBookingInfo(data)
            })

        alert('Success')
        setOpenSneackBar(true);
        e.preventDefault();
        handleClose();
    };


    // modal color style
    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '50%',
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };


    //POST INFO
    const handleOnBlur = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newInfo = { ...bookingInfo };
        newInfo[field] = value;
        setBookingInfo(newInfo);
    }


    return (
        <>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography marginBottom='20px' variant="h6" textAlign='center'>
                        Book A Service
                    </Typography>

                    <h4 className="text-primary text-center">{serviceType}</h4>
                    <h5 className="text-center style-color">{serviceName}</h5>

                    <form onSubmit={handleOnSubmit} style={{ height: '350px', overflowY: 'scroll', padding: 10 }} >

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Service Image"
                            defaultValue={mainImage}
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Service Name"
                            defaultValue={serviceName}
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="ServiceType"
                            defaultValue={serviceType}
                        />

                        <TextField
                            disabled
                            id="outlined-disabled"
                            sx={{ width: '100%', mb: 2 }}
                            label="Service Price"
                            defaultValue={price}
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='clientName'
                            id="outlined-disabled"
                            placeholder='Enter Your Full Name'
                            sx={{ width: '100%', mb: 2 }}
                            label="Full Name"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='clientNumber'
                            id="outlined-disabled"
                            type='text'
                            placeholder='Enter Your Number'
                            sx={{ width: '100%', mb: 2 }}
                            label="Phone Number"
                        />

                        <TextField
                            onBlur={handleOnBlur}
                            name='clientAddress'
                            id="outlined-disabled"
                            type='text'
                            placeholder='Enter Your Address'
                            sx={{ width: '100%', mb: 2 }}
                            label="Address"
                        />

                        <input class="btn-main my-3 py-2 px-3" type="submit" value="Submit" />

                    </form>

                </Box>

            </Modal>

            <Sneackbar openSneackBar={openSneackBar} setOpenSneackBar={setOpenSneackBar} />
        </>

    );
};

export default BookingModal;