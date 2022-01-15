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
        const url = ('https://home-service24.herokuapp.com/engineers')
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
                                <div className="image-flip" >
                                    <div className="mainflip flip-0">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <img className="d-inline mb-3" src={engineer.engineerImage} alt="engineers" />
                                                    <h4 className="text-primary mt-2">{engineer.engineerName}</h4>
                                                    <p className="card-text">{engineer.shortDes}</p>
                                                    <a href="#" className="btn-main btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="text-primary">{engineer.engineerName}</h4>
                                                    <p className="card-text">{engineer.longDes}</p>
                                                    <ul className="list-inline">
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-facebook text-blue-600"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-twitter text-blue-600"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-skype text-blue-600"></i>
                                                            </a>
                                                        </li>
                                                        <li className="list-inline-item">
                                                            <a className="social-icon text-xs-center" target="_blank" href="#">
                                                                <i className="fab fa-google text-blue-600"></i>
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