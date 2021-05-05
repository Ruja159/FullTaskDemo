import React, { useState } from 'react';
import { FaShoppingCart } from 'react-icons/fa';
import { Dropdown, DropdownButton } from 'react-bootstrap'
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

    const [currency, setCurrency] = useState("EUR");

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
            switch (currency) {
                case "USD":
                    genericPrice *= 2;
                    break;
                default: //for EURO 
                    genericPrice = genericPrice;
            }
            console.log(genericPrice);
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

    // cartItems = [
    //     items: {
    //         item: {
    //             id: 1,
    //             name: "a"
    //         }
    //         conter: 1;
    //     },
    //     {
    //         item: {
    //             id: 2,
    //             name: "b"
    //         }
    //         counter: 2;
    //     },
    // numberOfItems: 2
    // ]


    const handleCurrencyChange = (curr) => {
        setCurrency(curr);
        let reCalculatedItems = cartItems.items.map(i => {
            switch (currency) {
                case "USD":
                    i.price *= 2;
                    break;
                default: //for EURO 
                    i.price = i.price / 2;
            }
            return { ...i, price: i.price };
        });
        setCartItems({ ...cartItems, items: reCalculatedItems });

        setSum(cartItems.items);
    }

    return (<>
        <div className="header sticky-top">
            <div className="logo-holder py-3 w-100 d-flex justify-content-between container align-items-center">
                <Link to="/home" >
                    <img src={logo} className="logo-img" alt="#" width="100" />
                </Link>
                <h1 className="text-white font-italic font-weight-light">Ruja's perfumes</h1>
                <div className="d-flex flex-column position-relative align-items-center">
                    <button type="button" className="btn btn-link" onClick={() => handleCurrencyChange("USD")}>USD</button>
                    <button type="button" className="btn btn-link" onClick={() => handleCurrencyChange("EUR")}>EUR</button>
                    <button type="button" className="cursor-pointer cart" onClick={() => setModalShow(true)}>
                        <FaShoppingCart style={{ width: 40, height: 40, fill: 'white' }} />
                    </button>

                    <div className="bg-danger position-absolute cart-number-box" >
                        <span className="cart-number">{cartItems.numberOfItems}</span>
                    </div>
                    <div className="cart-items-show text-white position-absolute" style={{ bottom: '-25px' }}>
                        {sum}$
                    </div>
                </div>
            </div>
            <div className="">
                <nav className="navbar navbar-expand-lg navbar-light bg-light w-10 nav-fill ">
                    <ul className="navbar-nav w-100">
                        <li className="nav-item">
                            <button onClick={() => { handleParfumeTypeChange("all") }} className="nav-link btn btn-link" >Home</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => { handleParfumeTypeChange("man") }} className="nav-link btn btn-link" >Men's perfumes</button>
                        </li>
                        <li className="nav-item">
                            <button onClick={() => { handleParfumeTypeChange("woman") }} className="nav-link btn btn-link " >Women's perfumes</button>
                        </li>

                        <DropdownButton variant="link" id="dropdown-basic-button" title="Dropdown button">

                            <Dropdown.Item onClick={handleAbout}>About</Dropdown.Item>
                            <Dropdown.Item onClick={handleContact}>Contact</Dropdown.Item>
                            <Dropdown.Item onClick={handleLogOut}>Logout</Dropdown.Item>
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
                </nav>
            </div>
        </div>

        {parfumeType == "all" ? <Perfumes handleCartItems={handleCartItems} search={search} currency={currency} /> : <GenderFiltered type={parfumeType} currency={currency} />}


        <CartModal show={modalShow} onHide={() => setModalShow(false)} cartitems={cartItems.items} sum={sum} handleparfumeadd={handleParfumeAdd} handleparfumeremove={handleParfumeRemove} currency={currency} />
    </>

    )


}

export default Header