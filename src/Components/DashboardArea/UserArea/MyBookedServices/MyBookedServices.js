import React, { useEffect, useState } from 'react';
import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import useAuth from '../../../../Authentication/Hooks/useAuth';
import { Link } from 'react-router-dom';

const columns = [

    { id: 'clientName', label: 'Name', minWidth: 200, },
    { id: 'serviceName', label: 'Service Name', minWidth: 200, },
    { id: 'serviceType', label: 'Service Type', minWidth: 120, },
    { id: 'price', label: 'Service Price', minWidth: 140, },
    { id: 'serviceRating', label: 'Service Rating', minWidth: 140, },
    { id: 'status', label: 'Status', },
    { id: 'payment', label: 'Payment', minWidth: 130 },
    { id: 'delete', label: 'Delete', }

];

const MybookedServices = () => {

    const { user } = useAuth();
    // console.log(user);

    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    const [bookedServices, setBookedServices] = useState([]);
    // console.log(bookedServices)
    const email = localStorage.getItem('email');

    // console.log(email)

    useEffect(() => {
        const url = (`http://localhost:5000/bookedService/${email}`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setBookedServices(data))
    }, [email])

    const [deleteBookedService, setDeleteBookedService] = useState([]);

    // Delete Booked Service
    const handleDeleteBookedService = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `http://localhost:5000/cancelBookedServices/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingBook = deleteBookedService.filter(book => book._id !== id);
                        setDeleteBookedService(remainingBook);
                    }
                })
        }
    }


    return (
        <>

            {
                bookedServices.length === 0 ? (
                    <div >
                        <h1>Hello!!! {user.displayName}</h1>
                        <h1>Please book Book A Service</h1>
                    </div>
                )
                    :
                    (
                        <Paper sx={{ width: '100%', overflow: 'hidden' }}>

                            <TableContainer sx={{ maxHeight: 550 }}>
                                <Table stickyHeader aria-label="sticky table">
                                    <TableHead>
                                        <TableRow>
                                            {columns.map((column) => (
                                                <TableCell
                                                    key={column.id}
                                                    align={column.align}
                                                    style={{ minWidth: column.minWidth }}
                                                >
                                                    {column.label}
                                                </TableCell>
                                            ))}
                                        </TableRow>
                                    </TableHead>

                                    <TableBody>
                                        {bookedServices
                                            .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                            .map((bookedService) => {
                                                return (
                                                    <TableRow hover role="checkbox" tabIndex={-1}>

                                                        <TableCell >{bookedService.clientName}</TableCell>
                                                        <TableCell >{bookedService.serviceName}</TableCell>
                                                        <TableCell >{bookedService.serviceType}</TableCell>
                                                        <TableCell> {bookedService.price} </TableCell>
                                                        <TableCell> {bookedService.serviceRating} </TableCell>

                                                        <TableCell style={{ fontSize: 17 }}> {bookedService.status} </TableCell>
                                                        <TableCell> {bookedService.payment ? <div style={{ fontSize: 17 }}>Paid</div> : (
                                                            <Link className='btn-main py-1 px-2' style={{ fontSize: 17 }} to={`/dashboard/payment/${bookedService._id}`}> Pay Now </Link>
                                                        )} </TableCell>

                                                        {/* delete button*/}
                                                        <TableCell style={{ fontSize: 23 }} > <button className='bg-transparent border-0' onClick={() => handleDeleteBookedService(bookedService._id)}><i style={{ cursor: 'pointer' }} className="far fa-trash-alt text-danger"></i></button> </TableCell>

                                                    </TableRow>
                                                );
                                            })}
                                    </TableBody>
                                </Table>
                            </TableContainer>

                            <TablePagination
                                rowsPerPageOptions={[10, 25, 100]}
                                component="div"
                                count={bookedServices.length}
                                rowsPerPage={rowsPerPage}
                                page={page}
                                onPageChange={handleChangePage}
                                onRowsPerPageChange={handleChangeRowsPerPage}
                            />
                        </Paper>)
            }
        </>
    );
};

export default MybookedServices;