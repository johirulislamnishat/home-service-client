import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';

const AddServices = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/services', data)
            .then(res => {
                console.log(res);
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
                                Add a Service
                            </div>

                            <div className="mt-8">

                                {/* form start  */}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* Service Type  */}
                                    <div className="flex flex-col mb-2">
                                        <div>
                                            <span>
                                                Service Type
                                            </span>
                                            <input
                                                {...register("serviceType")} placeholder="Enter Type Of Service"
                                                required={true}
                                                type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* service name  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Service Name
                                            </span>
                                            <input {...register("serviceName")}
                                                type="text"

                                                placeholder="Enter Service Name"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* Service Title  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Service Title
                                            </span>
                                            <input {...register("serviceTitle")}
                                                type="text"

                                                placeholder="Write Service Title"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* Another Service Title  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Another Service Title                 </span>
                                            <input {...register("serviceSecondTitle")}
                                                type="text"

                                                placeholder="Write Another Service Title"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* Short Description  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Short Description                                            </span>
                                            <textarea {...register("shortDes")}
                                                type="text"

                                                placeholder="Write Short Description"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* Long Description  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Long Description                                            </span>
                                            <textarea {...register("serviceLongDes")}
                                                type="text"

                                                placeholder="Write Long Description"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* price  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Service Price
                                            </span>
                                            <input {...register("price")}
                                                type="number"
                                                placeholder="Enter Service Price"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* Rating  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Service Rating
                                            </span>
                                            <input {...register("serviceRating")}
                                                type="number"
                                                placeholder="Enter Service Rating"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* main image  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Upload Main Image
                                            </span>
                                            <input {...register("mainImage")}
                                                type="text"

                                                placeholder="Paste main image link here"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* second image  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Upload Another Image
                                            </span>
                                            <input {...register("secondImage")}
                                                type="text"

                                                placeholder="Paste second image link here"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* third image  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Upload Another Image
                                            </span>
                                            <input {...register("thirdImage")}
                                                type="text"

                                                placeholder="Paste third image link here"
                                                required={true}
                                                className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    <button type="submit" className="py-2 px-4  btn-dash hover:bg-blue-400 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Add Service
                                    </button>
                                </form>


                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    );
};

export default AddServices;