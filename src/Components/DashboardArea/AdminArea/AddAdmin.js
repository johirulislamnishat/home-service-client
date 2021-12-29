import axios from 'axios';
import React, { useState } from 'react';
import { useForm } from 'react-hook-form';

const AddAdmin = () => {


    const { register, handleSubmit, reset, formState: { errors } } = useForm();
    const [success, setSuccess] = useState(false);

    const onSubmit = data => {
        // const user = { email };
        // setEmail(data)
        // console.log(data);
        // console.log(data)

        axios.put('http://localhost:5000/users/admin', data)
            .then(res => {
                // console.log(res.data);
                if (res.data.upsertCount) {
                    // console.log(data);
                    setSuccess(true);
                    // alert('Success');
                    reset();
                }
            })

    };
    return (
        <div>
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="px-2 md:px-0 my-10 md:my-24 w-full max-w-lg">

                    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                            Make An Admin
                        </div>

                        <div className="mt-8">
                            <form onSubmit={handleSubmit(onSubmit)}>
                                <div className="flex flex-col mb-2">
                                    <div className="flex  ">
                                        <span className="rounded-l-md inline-flex  items-center px-3 border-t bg-white border-l border-b  border-gray-300 text-gray-500 shadow-sm text-sm">
                                            <svg width="15" height="15" fill="currentColor" viewBox="0 0 1792 1792" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1792 710v794q0 66-47 113t-113 47h-1472q-66 0-113-47t-47-113v-794q44 49 101 87 362 246 497 345 57 42 92.5 65.5t94.5 48 110 24.5h2q51 0 110-24.5t94.5-48 92.5-65.5q170-123 498-345 57-39 100-87zm0-294q0 79-49 151t-122 123q-376 261-468 325-10 7-42.5 30.5t-54 38-52 32.5-57.5 27-50 9h-2q-23 0-50-9t-57.5-27-52-32.5-54-38-42.5-30.5q-91-64-262-182.5t-205-142.5q-62-42-117-115.5t-55-136.5q0-78 41.5-130t118.5-52h1472q65 0 112.5 47t47.5 113z">
                                                </path>
                                            </svg>
                                        </span>
                                        <input
                                            {...register("email")}
                                            type="email" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Enter Admin Email" />
                                        {errors.exampleRequired && <span>This field is required</span>}
                                    </div>
                                </div>

                                <button type="submit" className="py-2 px-4 btn-dash mt-4 hover:bg-blue-400 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                                    Make Admin
                                </button>
                            </form>


                        </div>

                    </div>

                </div>
            </div>

            {/* <div class="form-box">
                <h1>Add A New Admin</h1>

                <form className='mt-5' onSubmit={handleSubmit(onSubmit)}>
                    <div class="form-group">
                        <label>Email</label>
                        <input
                            {...register("email")}
                            type="email" required
                            placeholder="Enter Admin Email"
                            class="form-control" />
                        {errors.exampleRequired && <span>This field is required</span>}
                    </div>

                    <input class="btn-main py-2 px-3" type="submit" value="Submit" />
                </form>
            </div> */}
        </div>
    );
};

export default AddAdmin;