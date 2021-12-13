import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';


const Applications = () => {

    const [applications, setApplications] = useState([])
    const [accepted, setAccepted] = useState([])


    const getApplications = async () => {
        const response = await axios.get('http://localhost:8000/api/form/')
        console.log(response.data);
        setApplications(response.data)
    }

    const getAcceptedApplications = async () => {
        const response = await axios.get('http://localhost:8000/api/accepted/')
        console.log(response.data);
        setAccepted(response.data)
    }

    useEffect(() => {
        getApplications();
        getAcceptedApplications();
    }, [])

    const acceptForm = async (id) => {
        try {
            const form = applications.filter(form => form.id === id)[0]
            form.status = 'Accepted'
            await axios.put(`http://127.0.0.1:8000/api/status/${id}/`, form)
            getApplications();
            getAcceptedApplications();
        } catch (err) {
            console.log(err);
        }
    }

    const declineForm = async (id) => {
        try {
            const form = accepted.filter(form => form.id === id)[0]
            console.log(form);
            form.status = 'Declined'
            await axios.put(`http://127.0.0.1:8000/api/status/${id}/`, form)
            getApplications();
            getAcceptedApplications();
        } catch (err) {
            console.log(err);
        }
    }


    return (
        <div>
            <div className="container">
                <div className="row">
                    <h3 className="mt-5">Appliactions</h3>
                    <div className="col-md-12 mt-5">
                        {
                            applications.map((application, index) => (
                                <div className="row bg-light p-3 rounded mb-3 shadow">
                                    <div className="col-md-2">
                                        <h5>{index + 1}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <img src={application.logo} alt="" height="50px" />
                                    </div>
                                    <div className="col-md-2">
                                        <h5>{application.company_name}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <h5>{application.name}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <Link to={`/applications/${application.id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={() => acceptForm(application.id)} className="btn btn-success">Accept</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>


                <div className="row">
                    <h3 className="mt-5">Accepted Appliactions</h3>
                    <div className="col-md-12 mt-5">
                        {
                            accepted.map((application, index) => (
                                <div className="row bg-light p-3 rounded mb-3 shadow">
                                    <div className="col-md-2">
                                        <h5>{index + 1}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <img src={application.logo} alt="" height="50px" />
                                    </div>
                                    <div className="col-md-2">
                                        <h5>{application.company_name}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <h5>{application.name}</h5>
                                    </div>
                                    <div className="col-md-2">
                                        <Link to={`/applications/${application.id}`} className="btn btn-primary">Details</Link>
                                    </div>
                                    <div className="col-md-2">
                                        <button onClick={() => declineForm(application.id)} className="btn btn-danger">Decline</button>
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>



            </div>
        </div>
    );
};

export default Applications;