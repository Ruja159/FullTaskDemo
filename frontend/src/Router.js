import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Home from './Home';
import Auth from './jsComponent/Auth';
import Error from "./Error";
import Registration from './Registration';
import Contact from './Contact';
import EachPerfume from './EachPerfume';
import MensPerfume from './MensPerfume';
import WomensPerfume from './WomensPerfume';
import About from './About';
import Cart from './Cart';


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
                <Route path="/mensperfume" render={(props) => <MensPerfume {...props} /> } />

               
                <Route path="/womensperfume" render={(props) => <WomensPerfume {...props} /> } />
                <Route path="/about">
                    <About />
                </Route>
                <Route path="/cart">
                    <Cart />
                </Route>
                <Route path="/eachperfume" render={(props) => <EachPerfume {...props} /> } />

                <Route path="/contact">
                    <Contact authorized={isLoggedIn} loginHandler={loginHandler} />
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