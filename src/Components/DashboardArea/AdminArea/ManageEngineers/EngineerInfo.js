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
            <tr key={engineer._id}>
                <td className="p-2 whitespace-nowrap">
                    <div className="flex items-center">
                        <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                            <img className='rounded-md' src={engineerImage} width="40" height="40" alt={engineerName} />
                        </div>
                        <div className="font-medium text-gray-800">{engineerName}</div>
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{engineerNumber}</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{engineerEmail}</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{engineerLocation}</div>
                </td>

                {/* update  */}
                {/* <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left"><i className="far fa-edit text-indigo-600"></i></div>
                        </td> */}

                {/* delete button  */}
                <td className="p-2 whitespace-nowrap">
                    <button onClick={() => handleDeleteEngineer(engineer._id)} className="text-lg text-left"><i className="far fa-trash-alt text-red-600"></i></button>
                </td>
            </tr>
        </>
    );
};

export default EngineerInfo;