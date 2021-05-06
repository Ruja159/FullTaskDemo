import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import RegistrationHtml from '../htmlComponent/RegistrationHtml'


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
                if (data.email) {
                    history.push("/login")
                    console.log("radi")
                }
            });
    }

    return (
        <RegistrationHtml
            handleChange={handleChange}
            handleSubmit={handleSubmit}
            user={user} />
    )
}

export default Registration