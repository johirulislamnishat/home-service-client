import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const AddEngineers = () => {

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        axios.post('http://localhost:5000/engineers', data)
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
                                Add Engineer
                            </div>

                            <div className="mt-8">

                                {/* form start  */}
                                <form onSubmit={handleSubmit(onSubmit)}>

                                    {/* engineer image  */}
                                    <div className="flex flex-col mb-2">
                                        <div>
                                            <span>
                                                Image
                                            </span>
                                            <input
                                                {...register("engineerImage")}
                                                type="text" placeholder="Enter Engineer Image Url"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* engineer name  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Engineer Name
                                            </span>
                                            <input {...register("engineerName")}
                                                type="text"

                                                placeholder="Enter Engineer Name"
                                                required={true}
                                                placeholder="Enter Product Name"
                                                type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* number  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Engineer Number
                                            </span>
                                            <input {...register("engineerNumber")}
                                                type="text"
                                                placeholder="Enter Engineer Number"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* engineer email  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Engineer Email
                                            </span>
                                            <input {...register("engineerEmail")}
                                                type="email"
                                                placeholder="Enter Engineer Email"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* write short description  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Short Description
                                            </span>
                                            <textarea {...register("shortDes")}
                                                type="text"
                                                placeholder="Enter Short Description"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>


                                    {/* long description  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Long Description
                                            </span>
                                            <textarea {...register("longDes")}
                                                type="text"
                                                placeholder="Write Long Description"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    {/* location  */}
                                    <div className="flex flex-col mb-6">
                                        <div>
                                            <span>
                                                Engineer Location
                                            </span>
                                            <input {...register("engineerLocation")}
                                                type="text"
                                                placeholder="Enter Engineer Location"
                                                required={true} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                                        </div>
                                    </div>

                                    <button type="submit" className="py-2 px-4  btn-dash hover:bg-blue-400 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                        Add Engineer
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

export default AddEngineers;