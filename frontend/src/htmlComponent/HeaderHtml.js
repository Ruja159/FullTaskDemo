import React, { useState } from 'react'


import { FaShoppingCart } from 'react-icons/fa';
import { NavDropdown, Navbar, Nav, Form, FormControl } from 'react-bootstrap'
import logo from '../img/logo1.jpg';
import { Link } from 'react-router-dom'
import CartModal from '../jsComponent/Cart'


const HeaderHtml = (

    { cartItems,
        sum,
        handleParfumeTypeChange,
        handleSearch,
        handleParfumeAdd,
        handleParfumeRemove,
        handleRemovePerfumeCart,
        handleLogOut,
        handleAbout,
        handleContact }
) => {


    const [modalShow, setModalShow] = useState(false);
    return (

        <>
            <div className="header sticky-top">
                <div className="logo-holder py-3 w-100 d-flex justify-content-between container-lg align-items-center">
                    <Link to="/home" >
                        <img src={logo} className="logo-img" alt="#" width="100" />
                    </Link>
                    <h1 className="text-white font-italic font-weight-light">Ruja's perfumes</h1>
                    <div className="d-flex flex-column position-relative align-items-center">
                        <button type="button" className="cursor-pointer cart" onClick={() => setModalShow(true)}>
                            <FaShoppingCart id="shopping-cart" />
                        </button>

                        <div className="bg-danger position-absolute cart-number-box" >
                            <span className="cart-number">{cartItems.numberOfItems}</span>
                        </div>
                        <div className="cart-items-show text-white position-absolute" style={{ bottom: '-25px' }}>
                            {sum}$
                    </div>
                    </div>
                </div>

                <Navbar bg="light" expand="lg">
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" >
                        <Nav className="w-100 d-flex justify-content-between">
                            <Nav.Link className=" nav-item" onClick={() => { handleParfumeTypeChange("all") }}>All perfumes</Nav.Link>
                            <Nav.Link className=" nav-item" onClick={() => { handleParfumeTypeChange("man") }}>Men's perfume</Nav.Link>
                            <Nav.Link className=" nav-item" onClick={() => { handleParfumeTypeChange("woman") }}>Woman's perfume</Nav.Link>
                            <NavDropdown title="Menu" id="basic-nav-dropdown">
                                <NavDropdown.Item onClick={handleAbout}>About</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleContact}>Contact</NavDropdown.Item>
                                <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                                <NavDropdown.Divider />
                            </NavDropdown>
                        </Nav>
                        <Form inline>
                            <FormControl
                                type="search"
                                placeholder="Search"
                                className="mr-sm-2"
                                onChange={event => { handleSearch(event.target.value) }} />
                        </Form>
                    </Navbar.Collapse>
                </Navbar>
            </div>



            <CartModal show={modalShow}
                onHide={() => setModalShow(false)}
                cartitems={cartItems.items}
                sum={sum}
                handleparfumeadd={handleParfumeAdd}
                handleparfumeremove={handleParfumeRemove}
                handleRemovePerfumeCart={handleRemovePerfumeCart} />
        </>
    )
}
export default HeaderHtml
