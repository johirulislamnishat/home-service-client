import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import EngineerInfo from './EngineerInfo';

const columns = [
    { id: 'engineerName', label: 'Engineer Name', minWidth: 180, },
    { id: 'engineerNumber', label: 'Phone Number', minWidth: 140, },
    { id: 'engineerEmail', label: 'Engineer Email', minWidth: 180, },
    { id: 'engineerLocation', label: 'Engineer Location', minWidth: 150, },
    { id: 'action', label: 'Action', }

];

const ManageEngineers = () => {


    const [page, setPage] = useState(0);
    const [rowsPerPage, setRowsPerPage] = useState(15);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };


    // engineer data

    const [engineers, setEngineers] = useState([]);

    useEffect(() => {
        const url = (`http://localhost:5000/engineers/`)
        fetch(url)
            .then(res => res.json())
            // .then(data => console.log(data))
            .then(data => setEngineers(data))
    }, [])

    return (

        <>

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
                            {engineers
                                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                .map((engineer) => {
                                    return (
                                        <EngineerInfo
                                            key={engineer._id}
                                            engineer={engineer}
                                        ></EngineerInfo>
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <TablePagination
                    rowsPerPageOptions={[10, 25, 100]}
                    component="div"
                    count={engineers.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    onPageChange={handleChangePage}
                    onRowsPerPageChange={handleChangeRowsPerPage}
                />
            </Paper>

        </>
    );
};

export default ManageEngineers;