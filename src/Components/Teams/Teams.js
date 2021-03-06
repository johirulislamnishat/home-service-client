import React, { useEffect, useState } from 'react';
import '../Services/Services.css';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container, Typography } from '@mui/material';
import '../Home/Engineers/Engineers.css';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { Link } from 'react-router-dom';
const Teams = () => {

    const banner = {

        backgroundColor: '#2095fc07',
        backgroundBlendMode: 'darken',
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    }

    const [teams, setTeams] = useState([]);
    // const { isLoading } = useAuth();

    useEffect(() => {
        const url = ('https://home-service24.herokuapp.com/engineers')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setTeams(data))
    }, [])

    return (
        <>

            <Header />

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

            <Box sx={{ flexGrow: 1 }} style={{ marginTop: 40, marginBottom: 30 }}>
                <Container>
                    <Typography sx={{ color: "#2097fc", mb: 2, mt: 10, textAlign: 'center' }} variant="h6" component="div">
                        Expert Teams
                    </Typography>
                    <Typography sx={{ textAlign: 'center' }} variant="h4" component="div">
                        Here Are Our Expert Teams
                    </Typography>
                    <Grid style={{ marginTop: 40 }} container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 12, md: 12 }} >
                        {teams.map((team, index) => (
                            <Grid item xs={4} sm={6} md={4} key={index}>
                                <div className="image-flip" >
                                    <div className="mainflip flip-0">
                                        <div className="frontside">
                                            <div className="card">
                                                <div className="card-body text-center">
                                                    <img className="d-inline mb-3" src={team.engineerImage} alt="engineers" />
                                                    <h4 className="text-primary mt-2">{team.engineerName}</h4>
                                                    <p className="card-text">{team.shortDes}</p>
                                                    <a href="#" className="btn-main btn-sm"><i className="fa fa-plus"></i></a>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="backside">
                                            <div className="card">
                                                <div className="card-body text-center mt-4">
                                                    <h4 className="text-primary">{team.engineerName}</h4>
                                                    <p className="card-text">{team.longDes}</p>
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


            <Footer />

        </>
    );
};

export default Teams;