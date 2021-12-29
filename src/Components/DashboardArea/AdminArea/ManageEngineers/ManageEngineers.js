import { Paper, TableContainer } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import React, { useEffect, useState } from 'react';
import EngineerInfo from './EngineerInfo';

const ManageEngineers = () => {

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

            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-3 py-3 border-b border-gray-100">
                    <h5 className="font-semibold text-gray-800">Manage Engineers</h5>
                </header>
                <div className="p-3">

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">

                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-gray-800 bg-indigo-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Engineer Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Phone Number</div>
                                    </th>

                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Engineer Email</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Engineer Location</div>
                                    </th>

                                    {/* rating  */}
                                    {/* <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Engineer Rating</div>
                                    </th> */}

                                    {/* update button  */}
                                    {/* <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Update</div>
                                    </th> */}

                                    {/* delete button */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Delete</div>
                                    </th>
                                </tr>
                            </thead>

                            {/* Table body */}
                            <tbody className="text-sm divide-y divide-gray-100">
                                {
                                    engineers.map(engineer => {
                                        return (

                                            <EngineerInfo
                                                key={engineer._id}
                                                engineer={engineer}
                                            ></EngineerInfo>
                                        );
                                    })
                                }
                            </tbody>
                        </table>

                    </div>

                </div>
            </div>

        </>
    );
};

export default ManageEngineers;