import React, { useState } from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Home from './Home'
import Auth from './jsComponent/Auth'
import Error from "./Error";
import Registration from './Registration'


const ReactRouter = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(true)

    const loginHandler = (value) => {
        setIsLoggedIn(value);
    };

    return (


        <Router>
            <Switch>

                <Route exact path="/login">
                    <Auth loginHandler={loginHandler} />
                </Route>
                <Route path="/registration">
                    <Registration />
                </Route>

                <Route path="/">
                    <Home authorized={isLoggedIn} loginHandler={loginHandler} />
                </Route>
                <Route path="*">
                    <Error />
                </Route>
            </Switch>

        </Router>
    )

}

export default ReactRouter