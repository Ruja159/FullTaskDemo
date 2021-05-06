import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function CartModal(props) {

    const sum = props.sum
    const items = props.cartitems
    const handleParfumeAdd = props.handleparfumeadd;
    const handleParfumeRemove = props.handleparfumeremove;



    console.log(items)
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Cart
                </Modal.Title>
            </Modal.Header>
            <Modal.Body >
                <ul className="modal-ul">
                    {items.map(i => {
                        const { counter } = i
                        return <>

                            <li>
                                <div id="cart-item" className="d-flex justify-content-between border-bottom pb-2 mb-2">
                                    <div className="d-flex align-items-center">
                                        <img src={i.item.photo} style={{ height: '150px' }} />
                                        <div id="cart-text" className="px-5 text-center">
                                            <h4>{i.item.title}</h4>
                                            <p>gender: {i.item.type}</p>
                                            <p>amount: {counter}</p>
                                        </div>
                                    </div>
                                    <div id="cart-amount" className="d-flex flex-column justify-content-center align-items-center mr-5">
                                        <h5>price: {i.item.price * i.counter}</h5>
                                        <div className="d-flex">
                                            <button className="cart-amount-btn m-2" onClick={() => handleParfumeRemove(i.item.id)}>-</button>
                                            <button className="cart-amount-btn m-2" onClick={() => handleParfumeAdd(i.item.id)}>+</button>
                                        </div>
                                    </div>
                                </div>
                            </li>


                        </>
                    })}



                </ul>


            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <h4 className="pl-3">Summary: ${sum}</h4>
                <Button className="modal-btn" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default CartModal