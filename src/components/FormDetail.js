import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const FormDetail = () => {

    const [form, setForm] = useState("")

    const { id } = useParams();

    const history = useHistory();

    const getSingleForm = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/form-details/${id}`)
        console.log(data)
        setForm(data)
    }

    useEffect(() => {
        getSingleForm();
    }, [])

    // Delete Form
    const deleteForm = async () => {
        await axios.delete(`http://localhost:8000/api/form-details/${id}/`)
        history.push('/applications')
    }


    return (
        <div>

            <div className="container">
                <div className="row">

                    <h2 className="mt-5 mb-3">Form Details</h2>
                    <div className="mb-5">
                        <Link to='/applications' className="btn btn-secondary">Back</Link>
                    </div>
                    <div className="col-md-12 bg-light p-5 rounded">
                        <div className="row">
                            <div className="col-md-3">
                                <img className="img-fluid" src={form.logo} alt=""  />
                            </div>
                            <div className="col-md-9">
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="small">Name:</span>
                                        <h3>{form.name}</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="small">Address:</span>
                                        <h3>{form.address}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="small">City:</span>
                                        <h3>{form.city}</h3>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="small">State:</span>
                                        <h3>{form.state}</h3>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="small">Email:</span>
                                        <h5>{form.email}</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="small">Phone:</span>
                                        <h5>{form.phone}</h5>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="small">Company Name:</span>
                                        <h3>{form.company_name}</h3>
                                    </div>
                                </div>
                                <div>
                                    <span className="small">Team and Background:</span>
                                    <h6>{form.team_background}</h6>
                                </div>
                                <div>
                                    <span className="small">Company and Products:</span>
                                    <h6>{form.company_products}</h6>
                                </div>
                                <div className="row">
                                    <div className="col-md-6">
                                        <span className="small">Incubation Type:</span>
                                        <h5>{form.incubation_type}</h5>
                                    </div>
                                    <div className="col-md-6">
                                        <span className="small">Status:</span>
                                        <h5>{form.status}</h5>
                                    </div>
                                </div>

                                <div className="mt-4">
                                    <Link to={`/applications/${form.id}/update`} className="btn btn-primary m-2">Update Form</Link>
                                    <button onClick={() => deleteForm(form.id)} className="btn btn-danger m-2">Delete Form</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default FormDetail;