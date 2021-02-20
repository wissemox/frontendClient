import React,{useState} from 'react'
import { Link } from 'react-router-dom';
import './login.css';

import {loginUser} from './js/actions/authActions'
import {useDispatch , useSelector } from 'react-redux'
import {Redirect} from 'react-router-dom'
import {Hopeso} from './js/actions/authActions'
import {Hopeso01} from './js/actions/authActions'

function Login() {
  
  const [email , setEmail]=useState('')
  const[password , setPassword]=useState('')
  const[isAdmidns , setAdmins]=useState('')
  const[EmailVD , setEmailVD]=useState(false)
  const[EmailVD01 , setEmailVD01]=useState(false)
  const[PasswordVD , setPasswordVD]=useState(false)
  const[PasswordVD02 , setPasswordVD02]=useState(false)
  const dispatch = useDispatch()
  const valdition=()=>{
    if(email.length===0 ){
      setEmailVD(true)
    }
    if(email.length<6){
      setEmailVD01(true)
    }
  }
  const valditionPassword=()=>{
    if(password.length===0 ){
      setPasswordVD(true)
    }
    if(password.length<=6){
      setPasswordVD02(true)
    }
  }
  
  const handlelogin = () => { 
    dispatch(loginUser({email , password}))
    valdition()
    valditionPassword()
    setEmail('');
    setPassword('')
  }
  const handleAdmins = () =>{
    dispatch(Hopeso(isAdmidns))
   
    
  }
  
 const Verifed =  useSelector((state)=>state.authReducer.isAuth)
 const isAdmins = useSelector((state)=>state.Admins01.isAdmin)
 const idAdmins02 = useSelector((state)=>state.Admins02.Admin02.Productall)
 const dazdz = () =>{
  dispatch(Hopeso(isAdmidns))
  localStorage.setItem('id',  JSON.stringify(isAdmidns))
}
// const LDasd=()=>{
//   dispatch(Hopeso01(isAdmidns))
// }
  
    return (
       
        <body>
        
   
{/* 
      {idAdmins02&&idAdmins02.isAdmins ? (<Redirect to="/Admins02"/>) : (null) }
     */}

        {isAdmins && <Redirect to="/Admins"/>}
          {Verifed ?(<Redirect to="/Dashboard"/>) :   <div class="container">
          
          <div class="forms-container">
            {console.log(Verifed)}
            {console.log(email.length)}
            {console.log(EmailVD)}
            <div class="signin-signup">
              <form action="#" class="sign-in-form">
                <h2 class="title">Sign in</h2>
             
                {EmailVD && <p className="Validation">enter  Email</p>}
                {EmailVD01 && <p className="Validation">invalid Email</p>}
                {PasswordVD && <p className="Validation">enter  Password</p>}
                {PasswordVD02 && <p className="Validation">passsword in correct</p>}
                <div class="input-field">
                  <i class="fa fa-user"></i>
                  
                  <input value={email} onChange={(e)=> setEmail(e.target.value)} type="text" placeholder="Email" />
            
                </div>
                <div class="input-field">
                  
                  <i class="fa fa-lock"></i>
                  <input value={password} onChange={(e)=> setPassword(e.target.value)} type="password" placeholder="Password" />
                </div>
           <input onClick={handlelogin} type="submit" value="Login" class="btn solid" />
                <p class="social-text">Or Sign in with social platforms</p>
                <div class="social-media">
                  <a href="#" class="social-icon">
                    <i class="fa fa-facebook-f"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-twitter"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-google"></i>
                  </a>
                  <a href="#" class="social-icon">
                    <i class="fa fa-linkedin-in"></i>
                  </a>
                </div>
                <input value={isAdmidns} onChange={(e)=>setAdmins(e.target.value)}/>
                {/* <button onClick={LDasd}>dzaazd</button> */}
                <button onClick={dazdz}>Clickeme</button>
              </form>
           
            </div>
          </div>
    
          <div class="panels-container">
            <div class="panel left-panel">
              <div class="content">
                <h3>New here ?</h3>
                <p>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
                  ex ratione. Aliquid!
                </p>
            <a href="/register?#">   <button class="btn transparent" id="sign-up-btn">
                  Sign up
                </button>
                </a> 
              </div>
              <img src="log.svg" class="image" alt="" />
            </div>
            <div class="panel right-panel">
              <div class="content">
                <h3>One of us ?</h3>
                
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                  laboriosam ad deleniti.
                </p>
               <button class="btn transparent" id="sign-in-btn">
                  Sign in
                </button>
             
              </div>
              
            </div>
          </div>
        
        </div> 
          
        }
   
      
    
    
      </body>
    )
}

export default Login
