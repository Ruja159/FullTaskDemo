import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { GiMagnifyingGlass } from 'react-icons/gi';
import {Dropdown, DropdownButton} from 'react-bootstrap'
import logo from './img/logo.jpg';



const Header = () => {
    return (
        <div className="header sticky-top">
            <div className="logo-holder py-3 w-100 d-flex justify-content-center position-relative container">
                <a href="#">
                    <img src={logo} className="logo-img" alt="#" width="100" />
                </a>
                <div className="position-absolute d-flex flex-column align-items-center" style={{ right: 0, top: 25 }}>
                    <button type="button" className="cursor-pointer cart" href="#">
                        <FaShoppingCart className='position-relative' style={{ width: 40, height: 40 }} />
                    </button>
                    <div className="bg-danger position-absolute cart-number-box" >
                        <span className="cart-number">0</span>
                    </div>
                    <div className="cart-items-show">
                        TEST
                    </div>
                </div>
            </div>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-10 nav-fill ">
                    <ul class="navbar-nav w-100">
                        <li class="nav-item">
                            <a class="nav-link" href="#">Link</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">Disabled</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">nest</a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link " href="#">test</a>
                        </li>
                       
                        <DropdownButton variant = "link" id="dropdown-basic-button" title="Dropdown button">
                            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                            <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                            <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                        </DropdownButton>

                        <form class="form-inline my-2 my-lg-0 position-relative">
                            <input
                                class="form-control mr-sm-2"
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