import React, { useEffect, useState } from 'react';
import BlogInfo from './BlogInfo';

const ManageBlogs = () => {

    // services data
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        fetch('https://home-service24.herokuapp.com/blogs')
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])

    return (
        <div className="col-span-full xl:col-span-6 bg-white shadow-lg rounded-sm border border-gray-200">
            <header className="px-3 py-3 border-b border-gray-100">
                <h5 className="font-semibold text-gray-800">Manage Blogs</h5>
            </header>
            <div className="p-3">

                {/* Table */}
                <div className="overflow-x-auto">
                    <table className="table-auto w-full">
                        {/* Table header */}
                        <thead className="text-xs font-semibold uppercase text-gray-800 bg-indigo-50">
                            <tr>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Blog Main Image</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Blog Title</div>
                                </th>

                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Blog Small Description</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Blog Long Description</div>
                                </th>
                                <th className="p-2 whitespace-nowrap">
                                    <div className="font-semibold text-left">Blog Tag</div>
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
                                blogs.map(blog => {
                                    return (

                                        <BlogInfo
                                            key={blog._id}
                                            blog={blog}
                                        ></BlogInfo>
                                    );
                                })
                            }
                        </tbody>
                    </table>

                </div>

            </div>
        </div>
    );
};

export default ManageBlogs;