import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

const TopInfographic = ({ infographic }) => {
    const { name, description, image } = infographic;
    return (
        <Card sx={{ minWidth: 275, boxShadow: 0, mt: 10 }}>
            <CardContent >

                <i style={{ fontSize: 50, textAlign: 'center', width: '100%', height: '80', marginBottom: 10, color: '#2097fc' }} className={image}></i>

                <Typography sx={{ textAlign: 'center', my: 2 }} variant="h5" component="div">
                    {name}
                </Typography>
                <Typography sx={{ textAlign: 'center', mb: 1.5 }} color="text.secondary">
                    {description}
                </Typography>
            </CardContent>
        </Card>
    );
};

export default TopInfographic;