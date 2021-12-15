import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import image from '../../../images/home-serve.png';
import bg from '../../../images/banner-img-2.jpg';
import { Link } from 'react-router-dom';


const InfographicMiddle = () => {

    const appointmentBanner = {

        backgroundColor: '#2095fc07',
        backgroundBlendMode: 'darken',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        marginTop: 120,
    }

    return (
        <Box style={appointmentBanner} sx={{ flexGrow: 1, paddingTop: 5, paddingBottom: 5 }}>
            <Container>
                <Grid container spacing={2}>

                    <Grid item xs={12} md={7} sx={{ display: "flex", justifyContent: "center" }}>
                        <img style={{ width: '100%', padding: 15, }} src={image} alt="" />
                    </Grid>

                    <Grid item xs={12} md={5} sx={{ display: "flex", justifyContent: "flex-start", alignItems: 'center', textAlign: "left", paddingY: 4 }}>
                        <Box>
                            <Typography className='text-primary' variant="h5">
                                We are proving all type of cleaning solutions for every small and big businesses.   </Typography>

                            <Typography paragraph className='text-main' sx={{ marginTop: 2 }} >
                                It is a long established fact that a reader will be distracted by the readable
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
    );
};

export default InfographicMiddle;