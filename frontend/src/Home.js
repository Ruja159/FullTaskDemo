import React from 'react'
import { Redirect } from 'react-router-dom'
import Header from './Header'
import Perfumes from './Perfumes'

const Home = ({ authorized, loginHandler }) => {

    if (!authorized) {
        return <Redirect to="/login" />
    }

    

    return (
        <>
            <Header loginHandler={loginHandler} />
            <Perfumes />
        </>
    )
}

export default Home