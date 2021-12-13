import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const UpdateForm = () => {

    const [name, setName] = useState("")
    const [address, setAddress] = useState("")
    const [city, setCity] = useState("")
    const [state, setState] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")
    const [companyName, setCompanyName] = useState("")
    const [teamBackground, setTeamBackground] = useState("")
    const [companyProducts, setCompanyProducts] = useState("")
    const [incubationType, setIncubationType] = useState("")
    const [logo, setLogo] = useState(null)

    const history = useHistory();
    const { id } = useParams();

    const loadForm = async () => {
        const { data } = await axios.get(`http://localhost:8000/api/form-details/${id}`)
        console.log(data)
        setName(data.name)
        setAddress(data.address)
        setCity(data.city)
        setState(data.state)
        setEmail(data.email)
        setPhone(data.phone)
        setCompanyName(data.company_name)
        setTeamBackground(data.team_background)
        setCompanyProducts(data.company_products)
        setIncubationType(data.setIncubationType)
        setLogo(data.logo)
    }

    useEffect(() => {
        loadForm()
    }, [])

    //update Products
    const updateForm = async () => {
        let formField = new FormData()

        formField.append('name', name)
        formField.append('address', address)
        formField.append('city', city)
        formField.append('state', state)
        formField.append('email', email)
        formField.append('phone', phone)
        formField.append('company_name', companyName)
        formField.append('team_background', teamBackground)
        formField.append('company_products', companyProducts)
        formField.append('incubation_type', incubationType)

        if (logo !== null) {
            formField.append('logo', logo)
        }

        await axios({
            method: 'put',
            url: `http://localhost:8000/api/form-details/${id}/`,
            data: formField
        }).then(response => {
            console.log(response.data);
            history.push(`/applications/${id}`)
        })
    }

    return (
        <div>

            <div className='container mt-5'>
                <h3 className="mt-0">Update Form</h3>
                <div className="text-center">
                    <img src={logo} alt="" height="150px" />
                </div>

                <form className="m-5">
                    <div className="row">
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='text'
                                placeholder='Name'
                                name='name'
                                value={name}
                                onChange={(e) => setName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='text'
                                placeholder='Address'
                                name='address'
                                value={address}
                                onChange={(e) => setAddress(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='text'
                                placeholder='City'
                                name='city'
                                value={city}
                                onChange={(e) => setCity(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='text'
                                placeholder='State'
                                name='state'
                                value={state}
                                onChange={(e) => setState(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='email'
                                placeholder='Email'
                                name='email'
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='number'
                                placeholder='Phone'
                                name='phone'
                                value={phone}
                                onChange={(e) => setPhone(e.target.value)}
                                required
                            />
                        </div>
                    </div>

                    <div className="row">
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='text'
                                placeholder='Company Name'
                                name='companyName'
                                value={companyName}
                                onChange={(e) => setCompanyName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group mb-3 col">
                            <input
                                className='form-control'
                                type='file'
                                name='logo'
                                onChange={(e) => setLogo(e.target.files[0])}
                                required
                            />
                        </div>
                    </div>

                    <div className="form-group mb-3 col">
                        <textarea
                            className='form-control'
                            placeholder='Describe Your Team and Background'
                            name="teamBackground"
                            value={teamBackground}
                            onChange={(e) => setTeamBackground(e.target.value)}
                            cols="30"
                            rows="3"
                        >{teamBackground}</textarea>
                    </div>

                    <div className="form-group mb-3 col">
                        <textarea
                            className='form-control'
                            placeholder='Describe Your Company and Products'
                            name="companyProducts"
                            value={companyProducts}
                            onChange={(e) => setCompanyProducts(e.target.value)}
                            cols="30"
                            rows="3"
                        ></textarea>
                    </div>

                    <div className="radio-btn-container">
                        <div
                            className="radio-btn"
                            onClick={() => {
                                setIncubationType("Physical Incubation");
                            }}
                        >
                            <input
                                type="radio"
                                value={incubationType}
                                name="incubationType"
                                checked={incubationType === "Physical Incubation"}
                            />
                            Physical Incubation
                        </div>
                        <div
                            className="radio-btn"
                            onClick={() => {
                                setIncubationType("Virtual Incubation");
                            }}
                        >
                            <input
                                type="radio"
                                value={incubationType}
                                name="incubationType"
                                checked={incubationType === "Virtual Incubation"}
                            />
                            Virtual Incubation
                        </div>
                    </div>

                    <button onClick={updateForm} className='btn btn-primary mt-3 mb-5' type='button' >Update Form</button>
                    <Link to={`/applications/${id}`} className="btn btn-warning mt-3 m-5" >Cancel</Link>
                </form>
            </div>
        </div>
    );
};

export default UpdateForm;