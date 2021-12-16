import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import React, { useEffect, useState } from 'react';
import { Container, Typography } from '@mui/material';
import { Link } from 'react-router-dom';

const DashboardUser = () => {
    const banner = {

        backgroundColor: '#2095fc07',
        backgroundBlendMode: 'darken',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    // total services
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data.length))
    }, [])

    // total bookings
    const [bookings, setBookings] = useState([]);
    const email = localStorage.getItem('email');

    useEffect(() => {
        fetch(`http://localhost:5000/bookedService/${email}`)
            .then(res => res.json())
            .then(data => setBookings(data.length))
    }, [])

    // total engineers
    const [engineers, setEngineers] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/engineers')
            .then(res => res.json())
            .then(data => setEngineers(data.length))
    }, [])

    return (
        <>
            <Box sx={{ width: '100%' }}>
                <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {/* total services  */}
                    <Grid item xs={1} sm={2} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#f1536e', display: 'flex' }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        {services}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: 'left' }}>
                                        Total Services
                                    </div>
                                </Grid>
                            </div>

                        </div>
                    </Grid>

                    {/* total booking */}
                    <Grid item xs={1} sm={2} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#3da5f4', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        {bookings}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: 'left' }}>
                                        My Bookings
                                    </div>
                                </Grid>
                            </div>

                        </div>
                    </Grid>

                    {/* total engineers */}
                    <Grid item xs={1} sm={2} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#00c689', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        {engineers}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: 'left' }}>
                                        Total Engineers
                                    </div>
                                </Grid>
                            </div>

                        </div>
                    </Grid>

                    {/* total teams */}
                    <Grid item xs={1} sm={2} md={3}>
                        <div style={{ height: 100, width: '100%', backgroundColor: '#fda006', display: 'flex', padding: 4 }} className='rounded shadow-lg'>
                            <div style={{ textAlign: 'center', display: 'flex', fontSize: 26, color: 'white', justifyContent: 'center', width: '100%', alignItems: 'center' }} className='mx-auto '>

                                <Grid item xs={6}>
                                    <div>
                                        {engineers}
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <div style={{ textAlign: 'left' }}>
                                        Total Teams
                                    </div>
                                </Grid>
                            </div>

                        </div>
                    </Grid>
                </Grid>

                <div className='mt-5'>
                    <div>
                        <Box style={banner} sx={{ flexGrow: 1, paddingTop: 5, paddingBottom: 5 }}>
                            <Container>
                                <Grid container spacing={2}>

                                    <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "center" }}>
                                        <img style={{ width: '100%', padding: 15, }} src='https://i.ibb.co/ZKLS40f/slide1.png' alt="" />
                                    </Grid>

                                    <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', textAlign: "left", paddingY: 4 }}>
                                        <Box>
                                            <Typography className='text-primary' variant="h5">
                                                We are proving all type of cleaning solutions for every small and big businesses.    </Typography>

                                            <Typography paragraph className='text-main' sx={{ marginTop: 2 }} >
                                                Booking professional picture hangers through Handy gives you complete control over when and where they turn up. It is a long established fact that a reader will be distracted by the readable
                                                content of a page when looking at its
                                            </Typography>


                                            <Link to='/services' uppercase='true'>
                                                <button className=" btn-main py-1 px-3 mt-5">Get Our Service</button>
                                            </Link>
                                        </Box>
                                    </Grid>

                                </Grid>
                            </Container>
                        </Box>
                    </div>
                </div>

            </Box>
        </>
    );
};

export default DashboardUser;