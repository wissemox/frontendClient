import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Container,Row,Col,Form } from 'reactstrap';

import MapProfile from './mapProfile'
import {update003 ,getAuthUser}  from '../js/actions/authActions';
import { useDispatch, useSelector } from 'react-redux';


function Profile() {
  const userapdated =useSelector(state => state.authReducer.user)
  
  const dispatch = useDispatch();
  const [modal, setModal] = useState(false);

  const toggle = () => setModal(!modal);

  
  useEffect(()=>{
    dispatch(getAuthUser())
  },[])


  return (
  <>
  <div className="NavBar">
  <Link to='/Dashboard'> <button type="submit" className="button primary" ><p>Back to Dashboard</p></button></Link>
  </div>
  <div className="Bcktext">
  {userapdated && <MapProfile userapdated={userapdated}/>}
  </div>
  
 
  
   
  

      </>
    )
}


   



export default Profile
