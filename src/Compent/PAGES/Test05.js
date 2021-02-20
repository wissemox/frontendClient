import{ React, useState} from 'react';
import { Button, Alert, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import {useDispatch , useSelector} from 'react-redux'
import {addFormulaire} from '../js/actions/authActions'
const Fromo02 = ({setModel ,model}) => {
  const testState= useSelector((state)=>state.ForPers.Formul.Productone
  )
  const formulaireState= useSelector((state)=>state.Formulaire.Formulaires
  )
  const dispatch = useDispatch(); //Formulaires
  
  
  const[name, setName]= useState('')
  const[Price, setPrice]= useState('')
  const [text, setText]= useState('')
  const[Image, setImage]= useState('')
  const [Quntites, setQuntites]= useState('')
  
  const [modal, setModal] = useState(false);

  const toggle = () =>  setModel(false);
  

  
  const addPersonel = () => {
    dispatch(addFormulaire({name:testState.name , Price:testState.Price , text:text ,Image:Image ,Quntites:Quntites  }));
    setName(testState.name)
    setPrice(testState.Price)
    setModal(!modal)
    setModel(false)
  };

  return (
    <div>
      
      
        <ModalHeader style={{background:"#CBE7EE"}} toggle={toggle}>
        <span style={{fontFamily: 'Times New Roman',marginLeft:"5px",color:"black", fontSize:"30px", fontWeight:"bold"}} >
          Make your design
          </span>
          </ModalHeader>
        <ModalBody style={{background:"#CBE7EE", textAlign:"center"}} >
        <span style={{fontFamily: 'Times New Roman',marginLeft:"5px",color:"black", fontSize:"18px", fontWeight:"bold"}} >
        Product :
              </span>
        {testState&&testState.name}
      <br />
      <span style={{fontFamily: 'Times New Roman',marginLeft:"3px",color:"black", fontSize:"18px", fontWeight:"bold"}} >
      Unit price :
      </span>
      
      {testState&&testState.Price}
      <br />
      <span style={{fontFamily: 'Times New Roman',marginLeft:"5px",color:"black", fontSize:"18px", fontWeight:"bold"}} >
      Text or logo URL to print
      </span>
      <input type='text' placeholder="put your logo..." value={text} onChange={(e)=>setText(e.target.value)} />
      <br />
      <span style={{fontFamily: 'Times New Roman',marginLeft:"5px",color:"black", fontSize:"18px", fontWeight:"bold"}} >
      URL of image to print
      </span>
      <input type='text' placeholder="put your image link..." value={Image} onChange={(e)=>setImage(e.target.value)} />
      <br />
      <span style={{fontFamily: 'Times New Roman',marginLeft:"5px",color:"black", fontSize:"18px", fontWeight:"bold"}} >
      Quantities you want
      </span>
      <input type='number' value={Quntites} onChange={(e)=>setQuntites(e.target.value)} />

        </ModalBody>
        <ModalFooter style={{background:"#CBE7EE"}} >
          <Button color="primary" onClick={addPersonel}>Submit</Button>
          
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
     
    </div>
  );
}

export default Fromo02;