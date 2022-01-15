import React, { useEffect, useState } from 'react';
import ServiceInfo from './ServiceInfo';

const ManageServices = () => {

    // services data
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('https://home-service24.herokuapp.com/services')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <>
            <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                <header className="px-3 py-3 border-b border-gray-100">
                    <h5 className="font-semibold text-gray-800">Manage Services</h5>
                </header>
                <div className="p-3">

                    {/* Table */}
                    <div className="overflow-x-auto">
                        <table className="table-auto w-full">
                            {/* Table header */}
                            <thead className="text-xs font-semibold uppercase text-gray-800 bg-indigo-50">
                                <tr>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Service Name</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Service Type</div>
                                    </th>

                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Service Title</div>
                                    </th>
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Service Price</div>
                                    </th>

                                    {/* rating  */}
                                    <th className="p-2 whitespace-nowrap">
                                        <div className="font-semibold text-left">Service Rating</div>
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
                                    services.map(service => {
                                        return (

                                            <ServiceInfo
                                                key={service.id}
                                                service={service}
                                            ></ServiceInfo>
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

export default ManageServices;