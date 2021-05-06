
import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { NavDropdown, Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap'
import logo from './img/logo.jpg';
import { Link } from 'react-router-dom'
import CartModal from './Cart'
import Perfumes from './Perfumes'
import GenderFiltered from './GenderFiltered'

import { useHistory } from 'react-router-dom'



const Header = ({ loginHandler }) => {
    const history = useHistory();

    const [modalShow, setModalShow] = useState(false);
    let [sum, setSum] = useState(0)
    const [cartItems, setCartItems] = useState({
        numberOfItems: 0, //ukupno izabrao parfema
        items: [] //svi koji su izabrani i koliko puta su izabrani
    });
    const [search, setSeatch] = useState('')

    const [parfumeType, setParfumeType] = useState("all");

    const handleParfumeTypeChange = (value) => {
        setParfumeType(value);
    }

    const handleLogOut = () => {
        loginHandler(false);
        localStorage.removeItem('token')
        history.push('/login')
    }
    const handleCartItems = (item) => {

        const items = cartItems.items;

        const oneItem = items.find(i => i.item.id == item.id);
        if (oneItem === undefined) {
            items.push({ item: item, counter: 1 });
        } else {
            oneItem.counter = oneItem.counter + 1;
        }

        setCartItems({ numberOfItems: cartItems.numberOfItems + 1, items: items });


        setSum(calculateSum(items));
    }

    const calculateSum = (selectedItems) => {
        const newPriceArray = selectedItems.map(i => {
            let genericPrice = i.item.defaultPrice * i.counter;
            return genericPrice;
        })


        const total = newPriceArray.reduce((accumulator, currentValue) => {
            return accumulator + currentValue
        }, 0)

        return total;
    }

    const handleAbout = () => {
        history.push("/about")
    }
    const handleContact = () => {
        history.push("/contact")
    }

    const handleParfumeAdd = (id) => {
        const items = cartItems.items;

        const oneItem = items.find(i => i.item.id == id);

        if (oneItem !== undefined) {
            oneItem.counter++;
            setCartItems({ ...cartItems, numberOfItems: cartItems.numberOfItems + 1 });

            setSum(calculateSum(items));
        }
    }

    const handleParfumeRemove = (id) => {
        const items = cartItems.items;

        const oneItem = items.find(i => i.item.id == id);

        if (oneItem !== undefined) {
            oneItem.counter--;
            setCartItems({ ...cartItems, numberOfItems: cartItems.numberOfItems - 1 });
            setSum(calculateSum(items));
        }
    }

    return (<>
        <div className="header sticky-top">
            <div className="logo-holder py-3 w-100 d-flex justify-content-between container-lg align-items-center">
                <Link to="/home" >
                    <img src={logo} className="logo-img" alt="#" width="100" />
                </Link>
                <h1 className="text-white font-italic font-weight-light">Ruja's perfumes</h1>
                <div className="d-flex flex-column position-relative align-items-center">
                    {/* <button type="button" className="btn btn-link" onClick={() => handleCurrencyChange("USD")}>USD</button>
                    <button type="button" className="btn btn-link" onClick={() => handleCurrencyChange("EUR")}>EUR</button> */}
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

            {/* <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light nav-fill ">
                    <button aria-controls="basic-navbar-nav" type="button" aria-label="Toggle navigation" class="navbar-toggler">
                        <span class="navbar-toggler-icon">
                        </span>
                    </button>
                    <div class="navbar-collapse collapse" id="basic-navbar-nav">
                        <ul className="navbar-nav w-100 mr-auto">
                            <li className="nav-item active">
                                <button onClick={() => { handleParfumeTypeChange("all") }} className="nav-link nav-btn btn-link"><span class="sr-only">(current)</span>Home</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => { handleParfumeTypeChange("man") }} className="nav-link nav-btn btn-link" >Men's perfumes</button>
                            </li>
                            <li className="nav-item">
                                <button onClick={() => { handleParfumeTypeChange("woman") }} className="nav-link nav-btn btn-link " >Women's perfumes</button>
                            </li>

                            <DropdownButton variant="link" id="dropdown-basic-button" title="Dropdown button">

                                <Dropdown.Item onClick={handleAbout} className="dropdown-item-btn">About</Dropdown.Item>
                                <Dropdown.Item onClick={handleContact} className="dropdown-item-btn">Contact</Dropdown.Item>
                                <Dropdown.Item onClick={handleLogOut} className="dropdown-item-btn">Logout</Dropdown.Item>
                            </DropdownButton>

                            <form className="form-inline my-2 my-lg-0 position-relative">
                                <input
                                    className="form-control mr-sm-2"
                                    type="search"
                                    placeholder="Search"
                                    aria-label="Search"
                                    onChange={event => { setSeatch(event.target.value) }}
                                />
                            </form>

                        </ul>
                    </div>
                </nav>
            </div> */}
            <Navbar bg="light" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto w-100 d-flex justify-content-center ml-5">
                        <Nav.Link className="mr-auto " onClick={() => { handleParfumeTypeChange("all") }}>Home</Nav.Link>
                        <Nav.Link className="mr-auto" onClick={() => { handleParfumeTypeChange("man") }}>Men's perfume</Nav.Link>
                        <Nav.Link className="mr-auto" onClick={() => { handleParfumeTypeChange("woman") }}>Woman's perfume</Nav.Link>
                        <NavDropdown className="mr-auto" title="Dropdown" id="basic-nav-dropdown">
                            <NavDropdown.Item onClick={handleAbout}>About</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleContact}>Contact</NavDropdown.Item>
                            <NavDropdown.Item onClick={handleLogOut}>Logout</NavDropdown.Item>
                            <NavDropdown.Divider />
                        </NavDropdown>
                    </Nav>
                    <Form inline>
                        <FormControl type="search" placeholder="Search" className="mr-sm-2" onChange={event => { setSeatch(event.target.value) }} />
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>

        { parfumeType == "all" ? <Perfumes handleCartItems={handleCartItems} search={search} /> : <GenderFiltered type={parfumeType} />}


        <CartModal show={modalShow} onHide={() => setModalShow(false)} cartitems={cartItems.items} sum={sum} handleparfumeadd={handleParfumeAdd} handleparfumeremove={handleParfumeRemove} />
    </>

    )


}

export default Header
