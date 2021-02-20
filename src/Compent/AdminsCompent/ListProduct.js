import React ,{useEffect} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {getProduct} from '../js/actions/authActions'
import ProductMap from './ProductMap'
import ModalProduct from './ModalProduct'
const ListProduct = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getProduct());
      }, []); 
    const Articles = useSelector((state)=>state.Product0.Article.Productall)
    
    return (
        <div>
            {console.log(Articles)}
           {Articles && Articles.map((el)=><ProductMap el={el}/>)}
         
           <ModalProduct/>
        </div>
    )
}

export default ListProduct
