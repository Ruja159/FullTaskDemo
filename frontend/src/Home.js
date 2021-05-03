import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from './Header'

const Home = ({ authorized, loginHandler }) => {

    if (!authorized) {
        return <Redirect to="/login" />
    }

    const handleLogOut = () => {
        loginHandler(false);
        localStorage.removeItem('token')
    }

    return (
        <>
        <Header />
            {/* <h1>HOME</h1>
            <button onClick={handleLogOut}>Log Out</button> */}
        </>
    )
}

export default Home