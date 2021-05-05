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
            <Modal.Body>
                    {items.map(i => {
                        const {counter} = i
                        return <div>    
                        
                        <p>{i.item.title}</p>
                        <p>{i.item.type}</p>
                        <p>{i.item.price * i.counter}</p>
                        <p>{counter}</p>
                        <button onClick={() => handleParfumeAdd(i.item.id)}>+</button>
                        <button onClick={() => handleParfumeRemove(i.item.id)}>-</button>
                        </div>
                        
                    })}
         
                
            </Modal.Body>
            <Modal.Footer>
                    <div>Summary: {sum}</div>
                <Button onClick={props.onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}


export default CartModal