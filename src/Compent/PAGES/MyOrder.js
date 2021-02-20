import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Card, CardBody,
    CardTitle, CardSubtitle } from 'reactstrap';
import { useDispatch, useSelector } from 'react-redux';

const Orders = () => {
    const myOrder = useSelector(state => state.authReducer.user)

  

  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  const closeBtn = <button className="close" onClick={toggle}>&times;</button>;

  return (
  <div>
      {console.log(myOrder)}
    <Button style={{border: "none", borderRadius: "1.5", padding: "2%", fontWeight: "600"}} color="danger" onClick={toggle}>My Orders</Button>
    <Modal isOpen={modal} toggle={toggle} >
      <ModalHeader toggle={toggle} close={closeBtn}>Modal title</ModalHeader>
      <ModalBody>
     <center> My Orders List:</center>
     {   myOrder&&myOrder.article01.map((el)=>

<div>
<Card>
  
  <CardBody>
    <CardTitle tag="h5"></CardTitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{`Product: ${el.name}`}</CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{`Price:     ${el.price}`}</CardSubtitle>
    <CardSubtitle tag="h6" className="mb-2 text-muted">{`Qunatites: ${el.Quntites}`}</CardSubtitle>
  </CardBody>
</Card>
</div>

      )}   
        </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={toggle}>OK</Button>{' '}
      </ModalFooter>
    </Modal>
  </div>
);
}

export default Orders;