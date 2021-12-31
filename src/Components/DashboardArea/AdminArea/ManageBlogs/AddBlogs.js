import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const AddBlogs = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        // console.log(data);
        axios.post('http://localhost:5000/blogs', data)
            .then(res => {
                // console.log(res);
                if (res.data.insertedId) {
                    alert('Success');
                    reset();
                }
            }).catch((error) => {
                console.error(error);
            });
    };

    return (
        <>
            <div className="bg-indigo-100 w-full">
                <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                    <div className="px-2 md:px-0 my-10 md:my-24 w-full max-w-lg">

                        <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                            <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                                Publish New Blog
                            </div>

                            <div className="mt-8">

                                {/* form start  */}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* blog image  */}
                                    <div className="flex flex-col mb-2">
                                        <div>
                                            <span>
                                                Image
                                            </span>
                                            <input
                                                {...register("blogMainImage")}
                                                placeholder="Enter Blog Header Image URL"
                                                type="text" required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* blog banner image  */}
                                    <div className="flex flex-col mb-2">
                                        <div>
                                            <span>
                                                Banner Image
                                            </span>
                                            <input
                                                {...register("blogBannerImageMain")}
                                                placeholder="Enter Blog Banner Image URL"
                                                type="text" required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* blog banner image  */}
                                    <div className="flex flex-col mb-2">
                                        <div>
                                            <span>
                                                Banner Image
                                            </span>
                                            <input
                                                {...register("blogBannerImageSecond")}
                                                placeholder="Enter Blog Banner Image URL"
                                                type="text" required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* blog title  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Blog Title
                                            </span>
                                            <input {...register("blogTitle")}
                                                placeholder="Enter Blog Title"
                                                type="text" required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* blog short description  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Short Description
                                            </span>
                                            <textarea {...register("shortDescription")}
                                                placeholder="Enter Blog Short Description"
                                                type="text" required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* long description  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Long Description
                                            </span>
                                            <textarea {...register("blogLongDescription")}
                                                placeholder="Enter Blog Long Description"
                                                type="text" required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* reading time  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Reading Time
                                            </span>
                                            <input {...register("readingTime")}
                                                placeholder="Enter Reading Time"
                                                type="number" required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* tag 1 */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>Choose Blog Tag</span>
                                            <select {...register("itemTag")} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                                <option value="Service">Service</option>
                                                <option value="Engineer">Engineer</option>
                                                <option value="News">News</option>
                                                <option value="Home">Home</option>
                                                <option value="Corporate">Corporate</option>
                                            </select>
                                        </div>
                                    </div>

                                    {/* tag  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>Choose Tag</span>
                                            <select {...register("tags")} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                                                <option value="Coming">Coming</option>
                                                <option value="New">New</option>
                                                <option value="Old">Old</option>
                                            </select>
                                        </div>
                                    </div>

                                    <button type="submit" className="py-2 px-4  btn-dash hover:bg-blue-400 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Add Blogs
                                    </button>
                                </form>


                            </div>
                        </div >

                    </div >
                </div >
            </div >
        </>
    );
};

export default AddBlogs;