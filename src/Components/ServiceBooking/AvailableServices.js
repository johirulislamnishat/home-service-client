import React, { useEffect, useState } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import ServiceBooking from './ServiceBooking';

const AvailableServices = () => {

    const [services, setServices] = useState([]);

    useEffect(() => {
        const url = ('http://localhost:5000/services')
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setServices(data))
    }, [])

    return (
        <Container>
            <Box sx={{ flexGrow: 1 }} className='my-5'>

                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>

                    {
                        services.map(service => <ServiceBooking
                            key={service.id}
                            service={service}
                        ></ServiceBooking>
                        )
                    }
                </Grid>

            </Box>

        </Container>
    );
};

export default AvailableServices;