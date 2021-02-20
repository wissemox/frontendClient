import React ,{useState} from 'react';
import './Product02.css'
import {Link} from 'react-router-dom'
import {useDispatch} from 'react-redux'
import { getPers } from "../js/actions/authActions";
import Fromo02 from './Test05'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {EditArticle} from '../js/actions/authActions'

const Card03= ({el , user}) => {
  const dispatch= useDispatch()

    const [Quntites , setQuntites]=useState(el.Quntites)
    const [Price , setPrice]=useState(el.Price*el.Quntites)
    const[model , setModel]=useState(false)
    
    const fidform=()=>{
      dispatch(getPers(el._id))
      setModel(true)
    }
     
      const Agument = () =>{
        setQuntites(Quntites+1)
        setPrice((Quntites+1)*el.Price)
        
      }
      const Decrement = () =>{
        
        if(Quntites<=0) {
          setQuntites(0)
          setPrice(0)
        }
        else{
          setQuntites(Quntites-1)
          setPrice((Quntites-1)*el.Price)
        }
      }
  return (

    <div className="Product02">
      {model &&    <Fromo02 setModel={setModel} model={model}/>}
      {console.log(Price)}
      <Card>
         
        <CardBody>
          <CardTitle tag="h5">{el.name}</CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted">Card subtitle</CardSubtitle>
        </CardBody>
        <img width="100%" src={el.Imgae} alt="Card image cap" />
    
        <CardBody>
          <CardText>{el.Descripation}</CardText>
          <div className="Price">
              <div className="Text01">
     <button onClick={fidform} > <p>Add to card</p></button> 
     </div>
         
          <div className="Price01">
            
         <p >  {`${Price}DT`}</p>
          
          <div className="BorderAg02">
          <button onClick={Decrement}>-</button> {Quntites&&Quntites}<button onClick={Agument}>+</button>
          </div>
          </div>
          </div>
      
        </CardBody>
      </Card>
    </div>
  );
};

export default Card03;
