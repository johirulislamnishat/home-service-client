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
        <div className="container-fluid row" style={{ backgroundColor: '#F4FDFB' }}>

            <div id="responsive-dashboard" className="col-md-10 p-4 serviceForm mx-auto" style={{ backgroundColor: '#F4FDFB' }}>
                <h5 className="text-brand mb-4">Add Engineer</h5>
                <form onSubmit={handleSubmit(onSubmit)}>

                    {/* Engineer Image  */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputEmail1">Engineer Image</label>
                        <input
                            {...register("engineerImage")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Engineer Image Url"
                            required={true}
                        />
                    </div>

                    {/* engineer name  */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputEmail1">Engineer Name</label>
                        <input
                            {...register("engineerName")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Engineer Name"
                            required={true}
                        />
                    </div>
                    {/* engineer phone  */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputEmail1">Phone Number</label>
                        <input
                            {...register("engineerNumber")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Engineer Number"
                            required={true}
                        />
                    </div>

                    {/* engineer email  */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputEmail1">Engineer Email</label>
                        <input
                            {...register("engineerEmail")}
                            type="email"
                            className="form-control"
                            placeholder="Enter Engineer Email"
                            required={true}
                        />
                    </div>

                    {/* short description */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Write Short Description</label>
                        <input
                            {...register("shortDes")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Short Description"
                            required={true}
                        />
                    </div>

                    {/* long description  */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Long Description</label>
                        <input
                            {...register("longDes")}
                            type="text"
                            className="form-control"
                            placeholder="Write Long Description"
                            required={true}
                        />
                    </div>

                    {/* engineer location  */}
                    <div className="form-group col-6">
                        <label htmlFor="exampleInputPassword1">Engineer Location</label>
                        <input
                            {...register("engineerLocation")}
                            type="text"
                            className="form-control"
                            placeholder="Enter Engineer Location"
                            required={true}
                        />
                    </div>

                    <button type="submit" className="btn-main py-2 px-3 mt-3 ml-3">
                        Submit
                    </button>
                </form>
            </div>
        </div>
    );
};

export default AddEngineers;