import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import ServiceInfo from './ServiceInfo';

const columns = [

    { id: 'serviceName', label: 'Service Name', minWidth: 200, height: 100 },
    { id: 'serviceType', label: 'Service Type', minWidth: 120, height: 100 },
    { id: 'serviceTitle', label: 'Service Title', minWidth: 250, height: 100 },
    { id: 'price', label: 'Service Price', minWidth: 140, height: 100 },
    { id: 'serviceRating', label: 'Service Rating', minWidth: 140, height: 100 },
    { id: 'update', label: 'Update', height: 100 },
    { id: 'delete', label: 'Delete', height: 100 }

];
const ManageServices = () => {

    //   table 
    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    // services data
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])



    return (
        <>
            <Paper sx={{ width: '100%', overflow: 'hidden' }}>
                <TableContainer sx={{ height: 550 }}>
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
                            {services
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((service) => {
                                    return (

                                        <ServiceInfo
                                            key={service.id}
                                            service={service}
                                        ></ServiceInfo>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={services.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </>
    );
};

export default ManageServices;