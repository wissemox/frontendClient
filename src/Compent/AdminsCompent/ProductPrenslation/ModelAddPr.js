    import React, { useState } from 'react';
    import { Button, Modal, ModalHeader, ModalBody, ModalFooter, FormGroup, Label, Input, FormFeedback, FormText,Form } from 'reactstrap';
    import { useDispatch } from "react-redux";
    import {addPRPre} from '../../js/actions/authActions'
    
    const Add02 = ({el}) => {
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
    const [image , setimage]=useState()
    const [Name , setName]=useState()
    const [Price , setPrice]=useState()
    const [Quntites , setQuntites]=useState()
    const [Descripation , setDescripation]=useState()
    const AddPR = () =>{
        dispatch(addPRPre({Imgae:image,name:Name , Price:Price ,Quntites:Quntites ,Descripation:Descripation}))
    }

    return (
        <div>
        <Button color="danger" onClick={toggle}>Add</Button>
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
            <Button color="primary" onClick={AddPR} >save</Button>
            <Button color="secondary" onClick={toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>
        </div>
    );
    }

    export default Add02;