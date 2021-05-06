import React from 'react'
import { Modal, Button } from 'react-bootstrap'

function CartModal(props) {

    const sum = props.sum
    const items = props.cartitems
    const handleParfumeAdd = props.handleparfumeadd;
    const handleParfumeRemove = props.handleparfumeremove;
    const handleRemovePerfumeCart = props.handleRemovePerfumeCart;


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
                <table className="modal-ul w-100">
                    <thead>
                        <tr>
                            <th>Product</th>
                            <th>Description</th>
                            <th>Amount</th>
                        </tr>

                    </thead>
                    <tbody>
                        {items.map(i => {

                            const { counter } = i
                            return <>

                                <tr >
                                    <td >
                                        <img src={i.item.photo} alt="" style={{ height: '150px' }} />
                                    </td>
                                    <td className="table">
                                        <h2>{i.item.title}</h2>
                                        <p style={{ textTransform: 'uppercase' }}>{i.item.type}</p>
                                    </td>
                                    <td>
                                        <div>

                                            <button className="cart-amount-btn m-2" onClick={() => handleParfumeRemove(i.item.id)}>-</button>
                                            <input className="amountInput" disabled={true} value={counter} style={{ width: '50px' }} />
                                            <button className="cart-amount-btn m-2" onClick={() => handleParfumeAdd(i.item.id)}>+</button>
                                        </div>

                                    </td>
                                    <td>
                                        <button className="remove-btn" onClick={() => handleRemovePerfumeCart(i.item.id)}>Remove</button>
                                    </td>
                                </tr>


                            </>
                        })}
                    </tbody>



                </table>


            </Modal.Body>
            <Modal.Footer className="justify-content-between">
                <h4 className="pl-3">Summary: ${sum}</h4>
                <Button className="modal-btn" onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal >
    );
}


export default CartModal