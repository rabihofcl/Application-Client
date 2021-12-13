import axios from 'axios';
import React, { useState } from 'react';
import { useHistory } from 'react-router';

const ApplicationForm = () => {

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

    const submitForm = async () => {
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
            method: 'post',
            url: 'http://localhost:8000/api/form/',
            data: formField
        }).then((response) => {
            console.log(response.data)
            history.push('/applications')
        })
    }


    return (
        <div>
            <div className='container mt-5'>
                <h1>Registration Form</h1>

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
                            rows="5"
                        ></textarea>
                    </div>

                    <div className="form-group mb-3 col">
                        <textarea
                            className='form-control'
                            placeholder='Describe Your Company and Products'
                            name="companyProducts"
                            value={companyProducts}
                            onChange={(e) => setCompanyProducts(e.target.value)}
                            cols="30"
                            rows="5"
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

                    {/* <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="incubationType"
                            id="incubationType1"
                            value={incubationType}
                            onChange={(e) => setIncubationType(e.target.value)}
                            checked
                        />
                        <label
                            className="form-check-label"
                            htmlFor="incubationType1">
                            Physical Incubation
                        </label>
                    </div>
                    <div className="form-check">
                        <input
                            className="form-check-input"
                            type="radio"
                            name="incubationType"
                            id="incubationType2"
                            value={incubationType}
                            onChange={(e) => setIncubationType(e.target.value)}
                        />
                        <label
                            className="form-check-label"
                            htmlFor="incubationType2">
                            Virtual Incubation
                        </label>
                    </div> */}

                    <button onClick={submitForm} className='btn btn-primary mt-3 mb-5' type='button' >Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ApplicationForm;