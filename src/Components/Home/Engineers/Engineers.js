import React, { useEffect, useState } from 'react';
import './Engineers.css';
import '../../Services/Services.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';


const Engineers = () => {

    const [engineers, setEngineers] = useState([]);
    // const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('http://localhost:5000/engineers')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setEngineers(data.slice(0, 6)))
    }, [])

    return (
        <>
            <Box sx={{ flexGrow: 1 }} style={{ marginTop: 40 }}>
                <Container>
                    <Typography sx={{ color: "#2097fc", mb: 2, mt: 10, textAlign: 'center' }} variant="h6" component="div">
                        Expert Teams
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                        Here Are Our Expert Teams
                    </Typography>
                    <Grid style={{ marginTop: 40 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} >
                        {engineers.map((engineer, index) => (
                            <Grid item xs={4} sm={6} md={4} key={index}>
                                <div class="image-flip" >
                                    <div class="mainflip flip-0">
                                        <div class="frontside">
                                            <div class="card">
                                                <div class="card-body text-center">
                                                    <img class="d-inline mb-3" src={engineer.engineerImage} alt="engineers" />
                                                    <h4 class="text-primary mt-2">{engineer.engineerName}</h4>
                                                    <p class="card-text">{engineer.shortDes}</p>
                                                    <a href="#" class="btn-main btn-sm"><i class="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div class="backside">
                                            <div class="card">
                                                <div class="card-body text-center mt-4">
                                                    <h4 class="text-primary">{engineer.engineerName}</h4>
                                                    <p class="card-text">{engineer.longDes}</p>
                                                    <ul class="list-inline">
                                                        <li class="list-inline-item">
                                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                                <i class="fab fa-facebook text-blue-600"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                                <i class="fab fa-twitter text-blue-600"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                                <i class="fab fa-skype text-blue-600"></i>
                                                            </a>
                                                        </li>
                                                        <li class="list-inline-item">
                                                            <a class="social-icon text-xs-center" target="_blank" href="#">
                                                                <i class="fab fa-google text-blue-600"></i>
                                                            </a>
                                                        </li>
                                                    </ul>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </Grid>
                        ))}
                    </Grid>
                </Container>
            </Box >

        </>
    );
};

export default Engineers;