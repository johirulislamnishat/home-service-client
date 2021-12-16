import axios from 'axios';
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';


const AddProjects = () => {

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
                        <label htmlFor="exampleInputPassword1">Client Name</label>
                        <input
                            {...register("clientName")}
                            type="email"
                            className="form-control"
                            placeholder="Enter service Email"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Education</label>
                        <textarea
                            {...register("education")}
                            type="text"
                            className="form-control"
                            placeholder="Enter service Education"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Designation</label>
                        <input
                            {...register("designation")}
                            type="text"
                            className="form-control"
                            placeholder="Enter service Designation"
                            required={true}
                        />
                    </div>
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Department</label>
                        <input
                            {...register("department")}
                            type="text"
                            className="form-control"
                            placeholder="Enter service Department"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Hospital</label>
                        <input
                            {...register("hospital")}
                            type="text"
                            className="form-control"
                            placeholder="Enter service Hospital"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Price</label>
                        <input
                            {...register("price")}
                            type="number"
                            className="form-control"
                            placeholder="Enter Price"
                            required={true}
                        />
                    </div>

                    <div className="form-group col-6 pt-2">
                        <label htmlFor="exampleInputPassword1">
                            Upload a image in
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
                            {...register("img")}
                            type="text"
                            className="form-control"
                            placeholder="Upload Picture in imgur and paste the img link here"
                            required={true}
                        />
                    </div>

                    <button type="submit" className="btn btn-primary mt-2 ml-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddProjects;