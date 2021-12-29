import React from 'react';

const AddBlogs = () => {
    return (
        <>
            {/* <div className="bg-indigo-100 w-full">
            <div className="container flex items-center justify-center flex-1 h-full mx-auto">
                <div className="px-2 md:px-0 my-10 md:my-24 w-full max-w-lg">

                    <div className="flex flex-col w-full max-w-md px-4 py-8 bg-white rounded-lg shadow dark:bg-gray-800 sm:px-6 md:px-8 lg:px-10">
                        <div className="self-center mb-6 text-xl font-light text-gray-600 sm:text-2xl dark:text-white">
                            Upload New Products
                        </div>

                        <div className="mt-8">

                            {/* form start  */}
            <form onSubmit={handleSubmit(onSubmit)}>

                {/* product image  */}
                <div className="flex flex-col mb-2">
                    <div>
                        <span>
                            Image
                        </span>
                        <input
                            {...register("img")}
                            placeholder="Enter Product Image URL"
                            type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* product name  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>
                            Product Name
                        </span>
                        <input {...register("productName")}
                            placeholder="Enter Product Name"
                            type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* price  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>
                            Product Price
                        </span>
                        <input {...register("productPrice")}
                            placeholder="Enter Product Price"
                            type="number" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* description  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>
                            Product Description
                        </span>
                        <input {...register("productDescription")}
                            placeholder="Enter Product Description"
                            type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* rating  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>
                            Rating
                        </span>
                        <input {...register("rating")}
                            placeholder="Enter Product Rating"
                            type="number" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* color  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>Choose Color</span>
                        <select {...register("color")} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                            <option value="Jet Black">Jet Black</option>
                            <option value="Blue">Blue</option>
                            <option value="Pink">Pink</option>
                            <option value="Ash">Ash</option>
                            <option value="White">White</option>
                            <option value="Red">Red</option>
                        </select>
                    </div>
                </div>

                {/* mileage  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>
                            Enter Mileage
                        </span>
                        <input {...register("mileage")}
                            placeholder="Enter Product Mileage"
                            type="number" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* year  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>
                            Enter Year
                        </span>
                        <input {...register("year")}
                            placeholder="Enter Product Year"
                            type="number" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* fuel type  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>
                            Fuel Type
                        </span>
                        <input {...register("fuelType")}
                            placeholder="Enter Fuel Type"
                            type="text" className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" />
                    </div>
                </div>

                {/* tag  */}
                <div className="flex flex-col mb-6">
                    <div>
                        <span>Choose Tag</span>
                        <select {...register("tags")} className=" rounded-r-lg flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent">
                            <option value="Jet Black">Jet Black</option>
                            <option value="Blue">Money</option>
                            <option value="Pink">Premium</option>
                            <option value="Ash">Golden</option>
                            <option value="White">Luxury</option>
                            <option value="Red">Diamond</option>
                        </select>
                    </div>
                </div>



                <button type="submit" className="py-2 px-4  bg-purple-600 hover:bg-purple-700 focus:ring-purple-500 focus:ring-offset-purple-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2  rounded-lg ">
                    Add Item
                </button>
            </form>


        </div>
                    </div >

                </div >
            </div >
        </div > * /}
        </>
    );
};

export default AddBlogs;