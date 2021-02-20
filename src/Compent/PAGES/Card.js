import React ,{useState} from 'react';
import './Product02.css'
import {Link} from 'react-router-dom'
import {useDispatch , useSelector} from 'react-redux'
import {
  Card, CardText, CardBody, CardLink,
  CardTitle, CardSubtitle
} from 'reactstrap';
import {EditArticle ,Increment02 } from '../js/actions/authActions'

const Card02 = ({el , user}) => {
    
    const [Quntites , setQuntites]=useState(el.Quntites)
    const [Price , setPrice]=useState(el.Price*el.Quntites)
    const Penie02 = useSelector((state)=>state.authReducer.user.Pannier.Number)
    const email = useSelector((state)=>state.authReducer.user.email)
    const[Penie04,setPenie04]=useState(Penie02)
    const[One , setOne] = useState(1)
    const Increment01 = () =>{
      setPenie04(Penie04+1)
    }
    const dispatch = useDispatch()
    const edit = () =>{
        dispatch(EditArticle(user.email,{name:el.name , price:Price ,Product:el.Imgae , Quntites:Quntites}))
        Increment01()
        dispatch(Increment02(email,{Number:Penie04}))
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
      
      {console.log(Penie04)}
      {console.log(email)}
      <Card>
          {console.log(user.email)}
        <CardBody>
          <CardTitle tag="h5"></CardTitle>
          <CardSubtitle tag="h6" className="mb-2 text-muted"></CardSubtitle>
        </CardBody>
        
        <img width="100%" src={el.Imgae} alt="Card image cap" />
    
        <CardBody>
          <CardText>{el.name}</CardText>
          <div className="Price">
             <div className="Text01">
        <button  onClick={edit}> <p>Add to Cart</p></button> 
        </div>
           
          <div className="Price01">
        <p > Price: {`${el.Price}DT`}</p> 
        <p>Total:</p>
        <p>{`${Price}DT`}</p>
     
        <div className="BorderAg">
          <button onClick={Decrement}>-</button> {Quntites&&Quntites}<button onClick={Agument}>+</button>
          </div>
          </div>
          </div>
        </CardBody>
      </Card>
    </div>
  );
};

export default Card02;
