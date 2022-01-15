import React, { useEffect, useState } from 'react';
import UserInfo from './UserInfo';

const ManageUsers = () => {

    // users data
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch('https://home-service24.herokuapp.com/users')
            .then(res => res.json())
            .then(data => setUsers(data))
    }, [])

    return (
        <>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-3 py-3 border-b border-gray-100">
                    <h5 className="font-semibold text-gray-800">Manage Users</h5>
                </header>
                <div className="p-3">

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">

                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-gray-800 bg-indigo-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">User Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">User Email</div>
                                    </th>

                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">User Role</div>
                                    </th>

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
                                    users.map(user => {
                                        return (

                                            <UserInfo
                                                key={user.id}
                                                user={user}
                                            ></UserInfo>
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

export default ManageUsers;