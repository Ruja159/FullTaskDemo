import React from 'react'
import ReactRouter from './Router'
import Footer from './jsComponent/Footer'

import { BrowserRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
    return (
        <BrowserRouter>
            <ReactRouter />
            <Footer />
        </BrowserRouter>
    )
}

export default App