import React, { useState } from 'react';

const UserInfo = ({ user }) => {
    const { displayName, email, role } = user;

    //Delete User
    const [deleteUser, setDeleteUser] = useState([]);

    const handleDeleteUser = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://home-service24.herokuapp.com/deleteUser/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    // console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingUser = deleteUser.filter(user => user._id !== id);
                        setDeleteUser(remainingUser);
                    }
                })
        }
    }

    return (
        <>
            <tr key={user._id}>
                <td className="p-2 whitespace-nowrap">

                    <div className="font-medium text-gray-800">{displayName ? <span>{`${displayName}`}</span> : 'N/A'}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{email}</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{role ? <span>{`${role}`}</span> : 'N/A'}</div>
                </td>

                {/* update  */}
                {/* <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left"><i className="far fa-edit text-indigo-600"></i></div>
                        </td> */}

                {/* delete button  */}
                <td className="p-2 whitespace-nowrap">
                    <button onClick={() => handleDeleteUser(user._id)} className="text-lg text-left"><i className="far fa-trash-alt text-red-600"></i></button>
                </td>
            </tr>
        </>
    );
};

export default UserInfo;