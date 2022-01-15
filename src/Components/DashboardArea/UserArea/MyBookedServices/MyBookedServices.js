import React, { useEffect, useState } from 'react';
import Rating from 'react-rating';
import useAuth from '../../../../Authentication/Hooks/useAuth';
import { Link } from 'react-router-dom';

const MybookedServices = () => {

    const { user } = useAuth();
    // console.log(user);

    const [bookedServices, setBookedServices] = useState([]);
    // console.log(bookedServices)
    const email = localStorage.getItem('email');

    // console.log(email)

    useEffect(() => {
        const url = (`https://home-service24.herokuapp.com/bookedService/${email}`)
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
            const url = `https://home-service24.herokuapp.com/cancelBookedServices/${id}`;
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
                ) : (
                    <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
                        <header className="px-3 py-3 border-b border-gray-100">
                            <h5 className="font-semibold text-gray-800">My Booking Services</h5>
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
                                                <div className="font-semibold text-left">Your Name</div>
                                            </th>                                     <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Service Type</div>
                                            </th>

                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Service Price</div>
                                            </th>

                                            {/* rating  */}
                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Service Rating</div>
                                            </th>

                                            <th className="p-2 whitespace-nowrap">
                                                <div className="font-semibold text-left">Payment</div>
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
                                            bookedServices.map(bookedService => {
                                                return (

                                                    <tr key={bookedService._id}>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="flex items-center">
                                                                <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                                                                    <img className='rounded-md' src={bookedService.mainImage} width="40" height="40" alt={bookedService.serviceName} />
                                                                </div>
                                                                <div className="font-medium text-gray-800">{bookedService.serviceName}</div>
                                                            </div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{bookedService.clientName}</div>
                                                        </td>

                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left">{bookedService.serviceType}</div>
                                                        </td>
                                                        <td className="p-2 whitespace-nowrap">
                                                            <div className="text-left font-medium text-green-500">$ {bookedService.price}</div>
                                                        </td>

                                                        {/* rating  */}
                                                        <td className="p-2 whitespace-nowrap">
                                                            <Rating
                                                                initialRating={bookedService.serviceRating}
                                                                readonly
                                                                emptySymbol='far fa-star text-warning'
                                                                fullSymbol='fas fa-star text-warning'
                                                            />
                                                        </td>

                                                        <td className="p-2 whitespace-nowrap">
                                                            {bookedService.payment ? <div className='text-green-700' style={{ fontSize: 17, fontWeight: 600 }}>Paid</div> : (
                                                                <Link className='btn-main py-2 px-3' style={{ fontSize: 17 }} to={`/dashboard/payment/${bookedService._id}`}> Pay Now </Link>
                                                            )}
                                                        </td>

                                                        {/* update  */}
                                                        {/* <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left"><i className="far fa-edit text-indigo-600"></i></div>
                        </td> */}

                                                        {/* delete button  */}
                                                        <td className="p-2 whitespace-nowrap">
                                                            <button onClick={() => handleDeleteBookedService(bookedService._id)} className="text-lg text-left"><i className="far fa-trash-alt text-red-600"></i></button>
                                                        </td>
                                                    </tr>
                                                );
                                            })
                                        }
                                    </tbody>
                                </table>

                            </div>

                        </div>
                    </div>)
            }
        </>
    );
};

export default MybookedServices;