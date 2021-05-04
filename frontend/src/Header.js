import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Dropdown, DropdownButton } from 'react-bootstrap'
import logo from './img/logo.jpg';
import { Link } from 'react-router-dom'



const Header = ({ loginHandler }) => {

    const handleLogOut = () => {
        loginHandler(false);
        localStorage.removeItem('token')
    }


    return (
        <div className="header sticky-top">
            <div className="logo-holder py-3 w-100 d-flex justify-content-between container align-items-center">
                <Link to="/home" >
                    <img src={logo} className="logo-img" alt="#" width="100" />
                </Link>
                <h1 className="text-white font-italic font-weight-light">Ruja's perfumes</h1>
                <div className="d-flex flex-column position-relative align-items-center">
                    <button type="button" className="cursor-pointer cart">
                        <FaShoppingCart  style={{ width: 40, height: 40, fill: 'white' }} />
                    </button>
                        <div className="bg-danger position-absolute cart-number-box" >
                            <span className="cart-number">0</span>
                        </div>
                    <div className="cart-items-show text-white position-absolute" style={{bottom: '-25px'}}>
                        TEST
                    </div>
                </div>
            </div>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-10 nav-fill ">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <Link to="/home" className="nav-link" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/mensperfume", state: { type: "men" } }} className="nav-link " >Men's perfumes</Link>
                        </li>
                        <li className="nav-item">
                            <Link to={{ pathname: "/womensperfume", state: { type: 'woman' } }} className="nav-link " >Women's perfumes</Link>
                        </li>

                        <DropdownButton variant="link" id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="/about">About</Dropdown.Item>
                            <Dropdown.Item href="/contact">Contact</Dropdown.Item>
                            <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
                        </DropdownButton>

                        <form className="form-inline my-2 my-lg-0 position-relative">
                            <input
                                className="form-control mr-sm-2"
                                type="search"
                                placeholder="Search"
                                aria-label="Search"
                            />
                        </form>
                    </ul>
                </nav>
            </div>
        </div>
    )


}

export default Header