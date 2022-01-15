import React, { useState } from 'react';

const BlogInfo = ({ blog }) => {

    const { blogMainImage, blogTitle, shortDescription, blogLongDescription, tags } = blog;

    //modal 
    // const [open, setOpen] = useState(false);
    // const handleOpen = () => setOpen(true);
    // const handleClose = () => setOpen(false);

    const [deleteBlog, setDeleteBlog] = useState([]);

    //Delete Blog
    const handleDeleteBlog = id => {
        const proceed = window.confirm('Are you sure you want to delete?');
        if (proceed) {
            const url = `https://home-service24.herokuapp.com/deleteBlogs/${id}`;
            fetch(url, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.deletedCount > 0) {
                        alert('Delete Success');
                        const remainingBlog = deleteBlog.filter(blog => blog._id !== id);
                        setDeleteBlog(remainingBlog);
                    }
                })
        }
    }

    return (
        <>
            <tr>
                <td className="p-2 whitespace-nowrap">
                    <div className="w-10 h-10 flex-shrink-0 mr-2 sm:mr-3">
                        <img className='rounded-md' src={blogMainImage} width="40" height="40" alt='blog' />
                    </div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="font-medium text-gray-800 w-52 truncate">{blogTitle}</div>
                </td>
                <td className="p-2 whitespace-nowrap">
                    <div className="text-left w-52 truncate">{shortDescription}</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left w-52 truncate">{blogLongDescription}</div>
                </td>

                <td className="p-2 whitespace-nowrap">
                    <div className="text-left">{tags}</div>
                </td>

                {/* update  */}
                {/* <td className="p-2 whitespace-nowrap">
                          <div className="text-lg text-left"><i className="far fa-edit text-indigo-600"></i></div>
                        </td> */}

                {/* delete button  */}
                <td className="p-2 whitespace-nowrap">
                    <button onClick={() => handleDeleteBlog(blog._id)} className="text-lg text-left"><i className="far fa-trash-alt text-red-600"></i></button>
                </td>
            </tr>

            {/* update */}
            {/* <TableCell className="border-0" style={{ fontSize: 20 }} > <button className='bg-transparent border-0' onClick={() => handleOpen(blog._id)}><i style={{ cursor: 'pointer' }} className="border-0 far fa-edit text-success"></i></button> </TableCell> */}

            {/* <UpdateService
                open={open}
                handleClose={handleClose}
                service={service}
            ></UpdateService> */}
        </>
    );
};

export default BlogInfo;