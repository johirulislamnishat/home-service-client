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
        <div className="container-fluid row" style={{ backgroundColor: '#F4FDFB' }}>

            <div id="responsive-dashboard" className="col-md-10 p-4 serviceForm mx-auto" style={{ backgroundColor: '#F4FDFB' }}>
                <h5 className="text-brand mb-4">Add a Service</h5>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* service type  */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputEmail1">Service Type</label>
                        <input
                            {...register("serviceType")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Type Of Service"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Name Of Service</label>
                        <input
                            {...register("serviceName")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Service Name"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Service Title</label>
                        <input
                            {...register("serviceTitle")}
                            type="text"
                            className="form-control"
                            placeholder="Write Service Title"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Another Service Title</label>
                        <input
                            {...register("serviceSecondTitle")}
                            type="text"
                            className="form-control"
                            placeholder="Write Another Service Title"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Short Description</label>
                        <textarea
                            {...register("shortDes")}
                            type="text"
                            className="form-control"
                            placeholder="Write Short Description"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Service Overview</label>
                        <textarea
                            {...register("serviceOverview")}
                            type="text"
                            className="form-control"
                            placeholder="Write Service Overview"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Service Long Description</label>
                        <textarea
                            {...register("serviceLongDes")}
                            type="text"
                            className="form-control"
                            placeholder="Write Service Description"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Service Rating</label>
                        <input
                            {...register("serviceRating")}
                            type="number"
                            className="form-control"
                            placeholder="Enter Service Rating"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6 pt-2">
                        <label htmlFor="exampleInputPassword1">
                            Upload main image
                            <a
                                href="https://imgur.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-black px-2"
                            >
                                <strong>imgur</strong>
                            </a>
                            & Paste the image link here
                        </label>
                        <input
                            {...register("mainImage")}
                            type="text"
                            className="form-control"
                            placeholder="Paste main image link here"
                            required={true}
                        />
                    </div>

                    {/* second image  */}
                    <div className="form-group col-6 pt-2">
                        <label htmlFor="exampleInputPassword1">
                            Upload another image
                            <a
                                href="https://imgur.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-black px-2"
                            >
                                <strong>imgur</strong>
                            </a>
                            & Paste the image link here
                        </label>
                        <input
                            {...register("secondImage")}
                            type="text"
                            className="form-control"
                            placeholder="Paste second image link here"
                            required={true}
                        />
                    </div>

                    {/* third image  */}
                    <div className="form-group col-6 pt-2">
                        <label htmlFor="exampleInputPassword1">
                            Upload another image
                            <a
                                href="https://imgur.com/"
                                rel="noopener noreferrer"
                                target="_blank"
                                className="text-black px-2"
                            >
                                <strong>imgur</strong>
                            </a>
                            & Paste the image link here
                        </label>
                        <input
                            {...register("thirdImage")}
                            type="text"
                            className="form-control"
                            placeholder="Paste third image link here"
                            required={true}
                        />
                    </div>

                    <button type="submit" className="btn-main py-2 px-4 mt-4 ml-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddServices;