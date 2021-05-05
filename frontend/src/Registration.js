import React, { useState } from 'react'

import { useHistory } from 'react-router-dom'


const Registration = () => {
    const history = useHistory();

    const [user, setUser] = useState({ email: '', password: '', confirmedPassword: '', error: {} });

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();


        const url = "http://localhost:5000/api/user"

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (!data.success) {
                    setUser({ ...user, error: data })
                }
                if(data.email){
                    history.push("/login")
                    console.log("radi")
                }
            });
    }

    
    return (
        <>
            <div className="login" >
                <div className="container  d-flex justify-content-end ">
                    <div className="form input-form">
                        <form>
                            <div className="form-group text-left">
                                <label>Email address</label>
                                <input
                                    className="form-control"
                                    type="text"
                                    id="email"
                                    name="email"
                                    value={user.email}
                                    onChange={handleChange}
                                    placeholder="Example@gmail.com" />
                                <small className="text-danger form-text">{user.error.success ? "" : user.error.emailMsg}</small>

                                <small className="text-danger form-text">{user.error.success ? "" : user.error.msg}</small>

                            </div>
                            <div className="form-group">
                                <label>Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    id="password"
                                    name="password"
                                    value={user.password}
                                    onChange={handleChange}
                                    placeholder="Password" />
                                <small className="text-danger form-text">{user.password ? "" : user.error.msg1}</small>

                                <small className="text-danger form-text">{user.error.success ? "" : user.error.passMsg}</small>
                            </div>
                            <div className="form-group">
                                <label>Confirm Password</label>
                                <input
                                    className="form-control"
                                    type="password"
                                    id="confirmedPassword"
                                    name="confirmedPassword"
                                    value={user.confirmedPassword}
                                    onChange={handleChange}
                                    placeholder="Confirm password" />

                                <small className="text-danger form-text">{user.password !== user.confirmedPassword ? "Please enter exact password!!" : ""}</small>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block" disabled={user.password !== user.confirmedPassword} onClick={handleSubmit}>Sign in</button>
                            </div>

                        </form>


                    </div>
                </div>
            </div>
        </>
    )
}

export default Registration