import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container,Row,Col,Form } from 'reactstrap';


import {update003}  from '../js/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';

function Profile02() {
  const userapdated = useSelector(state => state.authReducer.user)
  const [name, setName] = useState(userapdated&&userapdated.name);
  const [lastName, setLastName] = useState(userapdated&&userapdated.lastName);
  const [password, setPassword] = useState(userapdated&&userapdated.password);
  const [email, setEmail] = useState(userapdated&&userapdated.email);
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);
  
  

  const submitHandler = () => {
    dispatch(update003(userapdated._id,{name,lastName,email,password}))

    setModal(!modal)
    
  }

  return (
  <>
    <div>
      
           
  
 
  
    <Button onClick={toggle}>  Update Profile</Button>
    

      <Modal isOpen={modal} modalTransition={{ timeout: 700 }} backdropTransition={{ timeout: 1300 }}
        toggle={toggle} >
        <ModalHeader style={{background:"#CBE7EE"}} toggle={toggle}></ModalHeader>
        <ModalBody style={{background:"#CBE7EE"}} >
        <form  >
          <ul className="form-container" style={{listStyleType:"none"}} >
            <li>
              {console.log(userapdated)}
              <span style={{fontFamily: 'Times New Roman',marginLeft:"10px", fontSize:"30px", fontWeight:"bold"}} >User Profile</span>
            </li>
            
            <li>
                
               <label htmlFor="name">
               <span style={{color:"#6C757D", marginLeft:"60px" , fontSize:"35", fontWeight: "bold"}}>
                Name
                </span>
          </label>
          <br/>
              <input value={name} type="name" name="name" id="name" onChange={(e) => setName(e.target.value)}>
              </input>
            </li>
            <li>
                
                <label htmlFor="name">
                <span style={{color:"#6C757D",marginLeft:"40px" , fontSize:"35", fontWeight: "bold"}}>
                 LastName
                 </span>
           </label>
           <br/>
               <input value={lastName} type="name" name="name" id="name" onChange={(e) => setLastName(e.target.value)}>
               </input>
             </li>
             
             <li> 
              <label htmlFor="email">
              <span style={{color:"#6C757D",marginLeft:"60px" , fontSize:"35", fontWeight: "bold"}}>
                Email
                </span>
          </label>
          <br/>
              <input value={email} type="email" name="email" id="email" onChange={(e) => setEmail(e.target.value)}>
              </input>
            </li> 

            <li> 
              <label htmlFor="email">
              <span style={{color:"#6C757D",marginLeft:"50px" , fontSize:"35", fontWeight: "bold"}}>
                Password
                </span>
          </label>
          <br/>
              <input value={password} type="password" name="email" id="email" onChange={(e) => setPassword(e.target.value)}>
              </input>
            </li> 
           
          </ul> 
        </form>
        </ModalBody>
        <ModalFooter style={{background:"#CBE7EE"}} >
        <Button color="secondary" onClick={submitHandler} >Update</Button>
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
      </div>
   
      </>
    )
}


   



export default Profile02