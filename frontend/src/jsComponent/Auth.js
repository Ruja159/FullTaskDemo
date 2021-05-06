import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import LoginHtml from '../htmlComponent/LoginHtml'


const Auth = ({ loginHandler }) => {
    const history = useHistory();


    const [user, setUser] = useState({ email: '', password: '', token: '', error: '' });

    const handleChange = (e) => {
        const { name, value } = e.target
        setUser({ ...user, [name]: value })
    }


    const handleSubmit = (e) => {
        e.preventDefault();


        const url = "http://localhost:5000/login"

        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(user)
        };
        fetch(url, requestOptions)
            .then(response => response.json())
            .then(data => {
                if (data.msg) {
                    setUser({ ...user, error: data.msg })
                }
                else {
                    loginHandler(true);
                    localStorage.setItem('token', data.accessToken)
                    history.push("/home");

                }
            });
    }

    const handleLink = () => {
        history.push("/registration")
    }

    return (
        <LoginHtml user={user} handleChange={handleChange} handleSubmit={handleSubmit} handleLink={handleLink} />
    )
}

export default Auth;