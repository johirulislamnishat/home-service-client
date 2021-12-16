import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import React, { useState } from 'react';

const EngineerInfo = ({ engineer }) => {

    const { engineerImage, engineerName, engineerNumber, engineerEmail, engineerLocation } = engineer;


    //Delete Engineer
    const [deleteEngineer, setDeleteEngineer] = useState([]);

    const handleDeleteEngineer = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/deleteEngineer/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingEngineer = deleteEngineer.filter(engineer => engineer._id !== id);
                        setDeleteEngineer(remainingEngineer);
                    }
                })
        }
    }
    return (
        <>

            <TableRow hover role="checkbox" tabIndex={-1}>

                <TableCell >
                    <img style={{ height: 40, width: 40 }} className='rounded-circle mr-2' src={engineerImage} alt={engineerName} />
                    {engineerName}
                </TableCell>

                <TableCell >
                    {engineerNumber}
                </TableCell>

                <TableCell >
                    {engineerEmail}
                </TableCell>

                <TableCell> {engineerLocation} </TableCell>

                <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteEngineer(engineer._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>


            </TableRow>
        </>
    );
};

export default EngineerInfo;