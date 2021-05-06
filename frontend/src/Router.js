import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './jsComponent/Home';
import Auth from './jsComponent/Auth';
import Registration from './jsComponent/Registration';
import Contact from './jsComponent/Contact';
import About from './jsComponent/About';
import Cart from './jsComponent/Cart';


const ReactRouter = () => {

    const [isLoggedIn, setIsLoggedIn] = useState(false)

    const loginHandler = (value) => {
        setIsLoggedIn(value);
    };


    const PrivateRoutes = () => {
        return (
            <>
                <Switch>

                    <Route path="/about">
                        <About />
                    </Route>
                    <Route path="/cart">
                        <Cart />
                    </Route>
                    <Route path="/contact">
                        <Contact />
                    </Route>
                    <Route path="/">
                        <Home />
                    </Route>
                </Switch>
            </>
        )
    }

    const AuthRoutes = () => {
        return (
            <>
                <Switch>
                    <Route exact path="/login">
                        <Auth loginHandler={loginHandler} />
                    </Route>
                    <Route path="/registration">
                        <Registration />
                    </Route>
                    <Route path="*">
                        <Auth />
                    </Route>
                </Switch>
            </>
        )

    }

    return (


        <Router>
            {isLoggedIn ? <PrivateRoutes /> : <AuthRoutes />}
        </Router>
    )

}

export default ReactRouter