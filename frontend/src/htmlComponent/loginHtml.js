import '../css/loginHtml.css';

const LoginHtml = ({ user, handleChange, handleSubmit, handleLink }) => {
    return <>
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
                            <small className="text-danger form-text">{user.error}</small>

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
                        </div>
                        <div className="form-group">
                            <button className="btn btn-primary btn-block" onClick={handleSubmit}>Log in</button>
                        </div>

                        <nav aria-label="breadcrumb">
                            <ol className="breadcrumb">
                                <li className="breadcrumb-item">Forgot password?</li>
                            </ol>
                        </nav>
                        <div className="line"></div>

                        <div className="form-group">
                            <button className="btn btn-success btn-block" onClick={handleLink} >Create new account</button>
                        </div>
                    </form>


                </div>
            </div>
        </div>
    </>
}

export default LoginHtml