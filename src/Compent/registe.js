import React ,{useState} from 'react'
import {BrowserRouter,Link,link,Route , Redirect } from "react-router-dom"
import {useDispatch , useSelector} from 'react-redux'
import {registerUser} from './js/actions/authActions'
const Registe = () => {
  const[Toggel , setToggel]=useState(false)
  const [name , setName]=useState('')
  const [lastName , setLastname]=useState('')
  const [email , setEmail]=useState('')
  const [password , setPassword]=useState('')
  const [Validator , setValidator]=useState(false)
  const [Validator01 , setValidator01]=useState(false)
  
  const dispatch = useDispatch() 
  const validaton = ()=>{
      if(name.length===0 || lastName.length===0 || email.length===0 || password.length===0)
      {
        setValidator(true)
      }
      if(password.length<6 || email.length<6){
        setValidator01(true)
      }
  }
  const handleRegister = () =>{
    console.log("hh")
    const newUser = {name:name , lastName:lastName , email:email , password:password}
    dispatch(registerUser(newUser))
    validaton()
    setEmail("")
    setName("")
    setLastname("")
    setPassword("")
    setToggel(true)
  }
  const ahla = useSelector((state)=>state.authReducer)
    return (
    
        <div>
          
          {
            ahla.isAuth ? (<Redirect to="/Dashboard"/>) : ( <body>
              {console.log(Validator)}
              <div class="container">
                <div class="forms-container">
                  <div class="signin-signup">
                    <form action="#" class="sign-in-form">
                      <h2 class="title">Sign Up</h2>
                     {Validator && <p className="Validation">enter all fieleds</p>}
                     {Validator01 && <p className="Validation">incorcter password or email</p>}

                      <div class="input-field">
                        <i class="fa fa-user"></i>
                        <input value={name} onChange={(e)=>setName(e.target.value)} type="text" placeholder="First Name" />
                      </div>

                      <div class="input-field">
                        <i class="fa fa-lock"></i>
                        <input value={lastName} onChange={(e)=>setLastname(e.target.value)} type="LastName" placeholder="Last Name" />
                      </div>

                      <div class="input-field">
                        <i class="fa fa-lock"></i>
                        <input value={email} onChange={(e)=>setEmail(e.target.value)}type="email" placeholder="Email" />
                      </div>

                      <div class="input-field">
                        <i class="fa fa-lock"></i>
                        <input value={password} onChange={(e)=>setPassword(e.target.value)} type="password" placeholder="Password" />
                      </div>
                      
                      
                  <input onClick={handleRegister}  type="submit" value="Sign in" class="btn solid" /> 
                  {/* <button onClick={handleRegister}>Register</button> */}
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
                      <a href="/login?#">
                      <button class="btn transparent" id="sign-up-btn">
                        login
                      </button>
                      </a>
                    </div>
                   
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
          
          
            </body>)
          }
            
        </div>
    )
}

export default Registe
