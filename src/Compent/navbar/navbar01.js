
import React,{useState} from 'react'
import './navbar02.css'
import {  useSelector , useDispatch} from 'react-redux'
import {logout} from '../js/actions/authActions'
import MapCard from './MapCard'
import MapProduct from './MapProduct'
const Navbar=({Link})=> {
  const [Card023 , setCard023]=useState([
    {image:"O4YIMC1K.png"  , title:"Ne manquez pas nos promos" , Descraption: "Avec LABASNI portez le plus et payer moins !"},
    {image:"Tshirt02.png"  , title:"Qui dit textile dit LABASNI" ,Descraption:"Si on parle de la qualité, chez nous vous serez plus que satifaits. إلبس و تمتع"},
    {image:"morgd.png"  , title:"Meilleurs services aprés vente sur le territoire" , Descraption:"La livraions de vos produits est hyper rapide et à la charge de la societé"}
  ])
  const [Product , setProduct]=useState([
    {image:"https://www.buycustomlogo.com/assets/images/tshirt-image1.png",name:"Tshirt",Price:"15DT",Quantites:"15",Description:"Tshirt Pula hight q"},
    {image:"https://www.buycustomlogo.com/assets/images/tshirt-image1.png",name:"Tshirt",Price:"15DT",Quantites:"15",Description:"Tshirt Pula hight q"},
    {image:"https://www.buycustomlogo.com/assets/images/tshirt-image1.png",name:"Tshirt",Price:"15DT",Quantites:"15",Description:"Tshirt Pula hight q"},
    {image:"https://www.buycustomlogo.com/assets/images/tshirt-image1.png",name:"Tshirt",Price:"15DT",Quantites:"15",Description:"Tshirt Pula hight q"},
    {image:"https://www.buycustomlogo.com/assets/images/tshirt-image1.png",name:"Tshirt",Price:"15DT",Quantites:"15",Description:"Tshirt Pula hight q"},
    {image:"https://www.buycustomlogo.com/assets/images/tshirt-image1.png",name:"Tshirt",Price:"15DT",Quantites:"15",Description:"Tshirt Pula hight q"}
   
  ])
  const dispatch = useDispatch()
  const isAuth = useSelector((state) =>state.authReducer.isAuth)
  const user = useSelector((state) =>state.authReducer.user)
  const authLinks = (
    <div className="flexbox">
      {console.log(isAuth)}
     <div class="input-field01">
                  <i class="fa fa-search"></i>
                  <input type="text" placeholder="Serach" />
        </div>
        <div className="button">
         <button onClick={()=>dispatch(logout())}>Logut</button>
        <button>Profile</button>
         <p>{user ? `Welcome ${user.name}`:null}</p> 
        </div>
    </div>
  )
  const guestLinks=(
    <div className="flexbox">
      {console.log(isAuth)}
     <div class="input-field01">
                  <i class="fa fa-search"></i>
                  <input className="wiss" type="text" placeholder="Serach" />
        </div>
        <div className="button">
          <div className="moazd">
        <Link to="/login"> <button >login</button> </Link>
        </div> 
        
        <div className="backe">
        <Link to="/register?#"><button id="ahla">azdazd</button></Link>  
        </div>
       
     
        </div>
    </div>
  )
    
  
  return (
    <div className="flexbox">
    {console.log(isAuth)}

        <div className="Backgroud02">
          <div className="FlexboxNav">
            <a href="/login?#"> <p>login</p></a>
            <a href="/register?#"><p>Register</p></a>
          </div>
        <div className="Flex-box-Online">
          <div className="Shopinglist">
        <p>Shop Online </p>
        <h4>Bienvenue dans notre virtual shop, nous sommes <br/> les premier dans
          la vente du pret à porter en ligne, <br/>votre satisfaction  est notre objectif !!</h4>
        </div>
  
        </div>
        <div className="Morg0">
             <a href="register?#"> <button><p>show more</p></button></a>
        </div>
    
      </div>  
      <div className="Main">
        
        
        <img src="Shopong.png" />
        <h4>OPTER POUR VOTRE T-SHIRT </h4>
        <p>Votre style vestimentaire nous intersse, habillez vous en style LABASNI</p>
        <div className="CardShpoing">
          
        
        {Card023.map((el)=><MapCard el={el}/>)}
        </div>

      </div>
      <div className="MapProduct">
      {Product.map((el)=><MapProduct el={el}/>)}
      
      </div>
      <div className="Sponsor">
 
      </div>
      
      </div>

    // <div className="flexbox">
    //   {console.log(isAuth)}
    //  <div class="input-field01">
    //               <i class="fa fa-search"></i>
    //               <input type="text" placeholder="Serach" />
    //     </div>
    //     <div className="button">
    //     <Link to="/login"> <button>login</button> </Link> 
    //     <Link to="/register"><button>register</button></Link>  
    //     </div>
    // </div>
  );
}

export default Navbar;
