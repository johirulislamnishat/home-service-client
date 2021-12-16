import TableCell from '@mui/material/TableCell';
import React, { useState } from 'react';

import TableRow from '@mui/material/TableRow';
import UpdateService from './UpdateService';

const ServiceInfo = ({ service }) => {

    const { serviceName, serviceType, serviceTitle, price, serviceRating } = service;

    //modal 
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    const [deleteService, setDeleteService] = useState([]);

    //Delete Service
    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/services/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingService = deleteService.filter(service => service._id !== id);
                        setDeleteService(remainingService);
                    }
                })
        }
    }

    return (
        <>
            <TableRow hover role="checkbox" tabIndex={-1}>
                <TableCell >
                    {serviceName}
                </TableCell>

                <TableCell >
                    {serviceType}
                </TableCell>

                <TableCell >
                    {serviceTitle}
                </TableCell>

                <TableCell> {price} </TableCell>

                <TableCell> {serviceRating} </TableCell>

                {/* update */}
                <TableCell className="border-0" style={{ fontSize: 20 }} > <button className='bg-transparent border-0' onClick={() => handleOpen(service._id)}><i style={{ cursor: 'pointer' }} className="border-0 far fa-edit text-success"></i></button> </TableCell>

                {/* delete */}
                <TableCell style={{ fontSize: 20 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteService(service._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>

            </TableRow>

            <UpdateService
                open={open}
                handleClose={handleClose}
                service={service}
            ></UpdateService>
        </>
    );
};

export default ServiceInfo;