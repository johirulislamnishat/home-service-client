import React, { useState } from 'react';
import Rating from 'react-rating';
import UpdateService from './UpdateService';

const ServiceInfo = ({ service }) => {

    const { mainImage, serviceName, serviceType, serviceTitle, price, serviceRating } = service;

    //modal 
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const [deleteService, setDeleteService] = useState([]);

    //Delete Service
    const handleDeleteService = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://home-service24.herokuapp.com/services/${id}`;
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

            <tr key={service._id}>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img className='rounded-md' src={mainImage} width="40" height="40" alt={serviceName} />
                        </div>
                        <div className="font-medium text-gray-800">{serviceName}</div>
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{serviceType}</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{serviceTitle}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left font-medium text-green-500">$ {price}</div>
                </td>

                {/* rating  */}
                <td className="p-2 whitespace-nowrap">
                    <Rating
                        initialRating={serviceRating}
                        readonly
                        emptySymbol='far fa-star text-warning'
                        fullSymbol='fas fa-star text-warning'
                    />
                </td>

                {/* update  */}
                {/* <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left"><i className="far fa-edit text-indigo-600"></i></div>
                        </td> */}

                {/* delete button  */}
                <td className="p-2 whitespace-nowrap">
                    <button onClick={() => handleDeleteService(service._id)} className="text-lg text-left"><i className="far fa-trash-alt text-red-600"></i></button>
                </td>
            </tr>

            {/* update */}
            {/* <TableCell className="border-0" style={{ fontSize: 20 }} > <button className='bg-transparent border-0' onClick={() => handleOpen(service._id)}><i style={{ cursor: 'pointer' }} className="border-0 far fa-edit text-success"></i></button> </TableCell> */}

            {/* delete */}
            {/* <TableCell style={{ fontSize: 20 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteService(service._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>

            </TableRow> */}

            {/* <UpdateService
                open={open}
                handleClose={handleClose}
                service={service}
            ></UpdateService> */}
        </>
    );
};

export default ServiceInfo;