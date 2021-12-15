import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import TopInfographic from './TopInfographic';

const infographicsTop = [
    {
        name: 'Online Scheduling',
        description: 'We offer a variety of income-based services to support vulnerable homeowners.',
        image: "fas fa-clipboard-list"
    },
    {
        name: 'Cleaning with Care',
        description: 'We do this by providing critical home repairs and accessibility modifications to those in need.',
        image: "fas fa-broom"
    },
    {
        name: 'Add Protection',
        description: 'We offer a variety of income-based services to support vulnerable homeowners.',
        image: "fas fa-shield-virus",
    },
    {
        name: 'Enjoy Cleanliness',
        description: 'We do this by providing critical home repairs and accessibility modifications to those in need.',
        image: "fas fa-hand-sparkles",
    }
]

const TopInfographics = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{ color: "#2097fc", mb: 2, mt: 10, textAlign: 'center' }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                    Services We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {infographicsTop.map((infographic, index) => (
                        <Grid item xs={4} sm={4} md={3} key={index}>
                            <TopInfographic
                                infographic={infographic}
                            ></TopInfographic>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box >
    );
};

export default TopInfographics;