import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import ManageUsers from './ManageUsers/ManageUsers';


const DashboardAdmin = () => {

    // total services
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://home-service24.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data.length))
    }, [])

    // total bookings
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        fetch('https://home-service24.herokuapp.com/bookedServices')
            .then(res => res.json())
            .then(data => setBookings(data.length))
    }, [])

    // total engineers
    const [engineers, setEngineers] = useState([]);

    useEffect(() => {
        fetch('https://home-service24.herokuapp.com/engineers')
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
                                        Total Bookings
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

                <div className='mt-5'><ManageUsers /></div>

            </Box>

        </>
    );
};

export default DashboardAdmin;