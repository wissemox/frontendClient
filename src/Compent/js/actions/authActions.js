import axios from 'axios'
import {
    USER_LOADING ,
     LOGIN_USER , 
     REGISTER_USER , 
     LOGOUT_USER ,
      GET_AUTH_USER ,
       AUTH_ERRORS,
        GET_PRODUCT,
        GET_PERSONLISE,
        GET_FORMULAIRE,
        ADD_FORMULAIRE,
        GET_PERSID,
        GET_ADMIN,
        GET_HOPE, 
        GET_HOPE02,
        GET_ALLUSERS,
        GET_ALLUSERVD,
        USER_UPDATE,
        PRGET_ALL,
        SEARCH_BYNAME ,
        ADDD_INCREMENT,
        GET_COMMENT
   

        }  
from '../constants/ActionsTypes'

const userLoading = () => dispatch => {
    dispatch({
        type:USER_LOADING,
    }) 
}
export const registerUser = (formData) => async dispatch =>{
   
    try{
        const res = await axios.post('/api/auth/register/',formData);
        dispatch({
            type:REGISTER_USER , 
            //prends le token
            payload:res.data,
        })
    }catch(error){
        console.log(error)
    }
}
//Login 
export const loginUser = (formData)=> async dispatch =>{
    dispatch(userLoading())
    try {
        const res = await axios.post('/api/auth/login/',formData);
        dispatch({
            type:LOGIN_USER,
            payload: res.data,
        })
    } catch (error) {
        console.log(error)
    }
} 

//user update
export const update003 = (userid02 , formdata02) =>  dispatch => {
   
   
        axios.put(`/api/auth/updateInfo/${userid02}`,formdata02)
        .then(res => dispatch(getAuthUser()))
        .catch(err=>console.log(err))
}
// export const getAdmin02 = (nb)=> async dispatch =>{

//     try {
//         const res = await axios.post('/api/FindoneAdmin/',nb);
//         dispatch({
//             type:GET_ADMIN,
//             payload: res.data,
//         })
//     } catch (error) {
//         console.log(error)
//     }
// } 

// export const getAdmin = (nb) => (dispatch) => {
    
//     axios.get('/api/FindoneAdmin/',nb)
//       .then(res => dispatch({type:GET_ADMIN, payload:res.data}))
//       .catch(err=> console.log(err));
//   };
  
// get user 
export const getAuthUser =() => async dispatch=>{
    dispatch(userLoading())
    try{
        const config = {
            headers:{
                'x-auth-token':localStorage.getItem('token')
            }
        }
        const res = await axios.get('/api/auth/user',config)
        dispatch({
            type:GET_AUTH_USER, 
            payload: res.data
        })
    }catch(error){
          console.log(error);
        dispatch({
            type:AUTH_ERRORS,
        })
    }
}

export const logout = () => dispatch =>{
    dispatch({
        type:LOGOUT_USER
    })
}
export const getProduct = () => dispatch => {
    console.log("ahla")
    axios.get('/api/auth/Product')
      .then(res => dispatch({type:GET_PRODUCT, payload:res.data}))
      .catch(err=> console.log(err));
  };
  export const EditArticle = (EmailContact,editeContact)=>(dispatch)=>{
    axios.put(`/api/auth/update/${EmailContact}`,editeContact)
    .then(res => dispatch(getAuthUser()))
    .catch(err=>console.log(err))
  }
  export const DeletArticle = (EmailContact02,editeContact02)=>(dispatch)=>{
    axios.put(`/api/auth/Dell/${EmailContact02}`,editeContact02)
    .then(res => dispatch(getAuthUser()))
    .catch(err=>console.log(err))
  }
    
  export const Hopeso = (Reasrch)=>(dispatch)=>{
    axios.get(`/api/hopeso/${Reasrch}`)
    .then(res => dispatch({type:GET_HOPE , payload:res.data}))
    .catch(err=>console.log(err))
  }
    
  export const getPersonlise = () => dispatch => {
    console.log("ahla")
    axios.get('/api/auth/Personlise/')
      .then(res => dispatch({type:GET_PERSONLISE, payload:res.data}))
      .catch(err=> console.log(err));
  };
  export const Hopeso01 = (Reasrch01)=>(dispatch)=>{
    axios.put(`/api/FindAdmins/${Reasrch01}`)
    .then(res => dispatch({type:GET_HOPE02 , payload:res.data}))
    .catch(err=>console.log(err))
}
export const addProduct005 =(NewProduct) => dispatch =>{ 
    axios.post("/api/auth/addProduct",NewProduct)
    .then(res => dispatch(getProduct()))
    .catch(err=>console.log(err))
}
export const DeleteProduct005 =(IdProduct005) => dispatch =>{ 
    axios.delete(`/api/auth/DeleteProd/${IdProduct005}`)
    .then(res=>dispatch(getProduct()))
    .catch(err=>console.log(err))
}

export const getalluser = () => dispatch => {
    axios.get('/api/auth/alluser/')
      .then(res => dispatch({type:GET_ALLUSERS, payload:res.data}))
      .catch(err=> console.log(err));
  };
export const AddValid = (NewValid) => dispatch => {
    axios.post('/api/addProduct01/',NewValid)
    .then(res=>dispatch(getAlluserVD()))
  };
export const DeltedUser02 = (EmailDelted) => dispatch =>{ 
    axios.delete(`/api/auth/DeletedUser/${EmailDelted}`)
    .then(dispatch(getalluser()))
    .catch(err => console.log(err))
}
export const getAlluserVD=()=>dispatch=>{ 
    axios.get('/api/Validator/')
    .then(res=>dispatch({type:GET_ALLUSERVD,payload:res.data}))
    .catch(err=>console.log(err))
}
export const DeletedVD = (idDeleted) =>dispatch=>{
    axios.delete(`/api/DeleteProd/${idDeleted}`)
    .then(dispatch(getAlluserVD()))
    .catch(err=>console.log(err))
}

//pick article to personalise
export const getPers = (idpers) => dispatch => {
    axios.get(`/api/auth/Personlisefindone/${idpers}`)
      .then(res => dispatch({type: GET_PERSID, payload:res.data}))
      .catch(err=> console.log(err));
  };
  
  
  //ADD FORMULAIRE

  export const addFormulaire = (formData) => async dispatch =>{
   
    try{
        const res = await axios.post('/api/auth/addFormulaire/',formData);
        dispatch({
            type:ADD_FORMULAIRE , 
            //prends le token
            payload:res.data,
        })
    }catch(error){
        console.log(error)
    }
}
//GET FORMULAIRE ADMIN
export const getFormulaire = () => dispatch => {
    axios.get('/api/auth/formulaire/')
      .then(res => dispatch({type:GET_FORMULAIRE, payload:res.data}))
      .catch(err=> console.log(err));
  };
  export const GetEdit = (idProduct , ProductEdit) => dispatch => {
    axios.put(`/api/auth/ProductUpdate/${idProduct}`,ProductEdit)
      .then(res => dispatch(getProduct()))
      .catch(err=> console.log(err));
  };

  export const addPRPre = (newProPR) => dispatch => {
      axios.post("/api/auth/addPersonlise",newProPR)
      .then(res=>dispatch(getPersonlise()))
      .catch(err=> console.log(err))
  }
  export const DeletedPR = (idDeletedPR) =>dispatch=>{
    axios.delete(`/api/auth/DeleteProdPr/${idDeletedPR}`)
    .then(dispatch(getPersonlise()))
    .catch(err=>console.log(err))
}
export const EditPR = (idProductPR , ProductEdiPRt) => dispatch => {
    axios.put(`/api/auth/ProductUpdatePR/${idProductPR}`,ProductEdiPRt)
      .then(res => dispatch(getPersonlise()))
      .catch(err=> console.log(err));
  };
export const GETforall = () => dispatch => {
    axios.get('/api/auth/formulaire/')
      .then(res => dispatch({type:PRGET_ALL, payload:res.data}))
      .catch(err=> console.log(err));
};
export const DeletedPR02 = (idDeletedPR02) =>dispatch=>{
    axios.delete(`/api/auth/DeletedFormul/${idDeletedPR02}`)
    .then(dispatch(GETforall()))
    .catch(err=>console.log(err))
}
export const EditArticle01 = (EmailContact01,editeContact01)=>(dispatch)=>{
    axios.put(`/api/auth/updateCom/${EmailContact01}`,editeContact01)
    .then(res => dispatch(getAuthUser()))
    .catch(err=>console.log(err))
  }

//search
export function SearchProduct(payload){
    return{
        type: SEARCH_BYNAME ,
        payload
    }
}
export const  addPenue = () =>{
    return{
        type:ADDD_INCREMENT
    }
}
export const Increment02 = (IncrementId,Increment)=>(dispatch)=>{
    axios.put(`/api/auth/UpdatedPanier/${IncrementId}`,Increment)
    .then(res => dispatch(getAuthUser()))
    .catch(err=>console.log(err))
  }
  
  // get all comments
export const getComments = () => dispatch => {
    axios.get('/api/auth/allComment')
      .then(res => dispatch({type:GET_COMMENT, payload:res.data}))
      .catch(err=> console.log(err));
}

// post comment
export const addComment =(comnt) => dispatch =>{ 
    axios.post("/api/auth/addForum",comnt)
    .then(res => dispatch(getComments()))
    .catch(err=>console.log(err))
}
