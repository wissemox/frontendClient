import React from 'react'
import {Form} from 'react-bootstrap'
import "./Forum02.css"
import { Link } from 'react-router-dom';


const Forum02 = () => {
    return (
        <div className="frm02">
            <Link to ="/Dashboard"><button>Back to Dashboard</button> </Link>
            <Form.Group>
  <Form.Row>
    <Form.Label column="lg" lg={2}>
      Merci de mettre votre avis a propos de nos services
    </Form.Label>
    
    
      <Form.Control size="lg" type="text" placeholder="Type your texte here" />
      <button>Submit your comment</button>
    
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column lg={5}>
      Merci de nous faire des propositions 
    </Form.Label>
    
    
      <Form.Control type="text" placeholder="Type your texte here" />
      <button>Submit your comment</button>
  </Form.Row>
  <br />
  <Form.Row>
    <Form.Label column="sm" lg={5}>
      Merci de nous indiquer votre niveau de satisfaction
    </Form.Label>
     
    
      <Form.Control size="sm" type="text" placeholder="Type your texte here" />
      <button>Submit your comment</button>
  </Form.Row>
</Form.Group>
        </div>
        
    )
}

export default Forum02
