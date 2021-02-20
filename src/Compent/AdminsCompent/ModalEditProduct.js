import React, { useState } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormFeedback, FormText,Form } from 'reactstrap';
import { useDispatch , useSelector } from "react-redux";
import {GetEdit} from '../js/actions/authActions'

const EditModal01 = ({el}) => {
const dispatch= useDispatch() ; 

const [modal, setModal] = useState(false);

const toggle = () => {
    setModal(!modal);
    setimage()
    setName()
    setPrice()
    setQuntites()
    setDescripation()
}

console.log(el)
const [image , setimage]=useState()
const [Name , setName]=useState()
const [Price , setPrice]=useState()
const [Quntites , setQuntites]=useState()
const [Descripation , setDescripation]=useState()
console.log(el._id)
const Edit05 = () =>{
    dispatch(GetEdit(el._id,{name:Name , Price:Price ,Imgae:image,Quntites:Quntites ,Descripation:Descripation}))
}

return (
    <div>
    <Button color="danger" onClick={toggle}>Edit</Button>
    <Modal isOpen={modal} toggle={toggle} >
        <ModalHeader toggle={toggle}>Modal title</ModalHeader>
        <ModalBody>
        <Form>
           
            <FormGroup>
                <Label for="exampleEmail">image</Label>
               
                <Input
                    value={image}  onChange={(e)=>setimage(e.target.value)} id="exampleEmail" placeholder="img" />
                </FormGroup>
                <FormGroup>
                    
                <Label for="examplePassword">Name</Label>
                <Input  value={Name}  onChange={(e)=>setName(e.target.value)} type="text" id="examplePassword" placeholder="Name Product" />
                <Label for="examplePassword">Price</Label>
                <Input value={Price}  onChange={(e)=>setPrice(e.target.value)} type="number" min="1" name="Price" id="examplePassword" placeholder="Price"  />
                <Label for="examplePassword">Quntites</Label>
                <Input value={Quntites}  onChange={(e)=>setQuntites(e.target.value)}  min="1" type="number" name="Price" id="examplePassword" placeholder="Quntites"  />
                <Label for="examplePassword">Descripation</Label>
                <Input  value={Descripation}  onChange={(e)=>setDescripation(e.target.value)} type="text" name="Price" id="examplePassword" placeholder="Quntites"  />
            </FormGroup>
        
        </Form>
        </ModalBody>
        <ModalFooter>
        <Button color="primary" onClick={Edit05} >save</Button>
        <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
    </Modal>
    </div>
);
}

export default EditModal01;