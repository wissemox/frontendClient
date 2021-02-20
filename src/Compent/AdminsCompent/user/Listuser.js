import React,{useEffect} from 'react'
import {useDispatch ,useSelector} from 'react-redux'
import {getalluser} from '../../js/actions/authActions'
import AlluserMap from './AlluserMap'
import "./user.css"
const Listuser = () => {
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getalluser());
      }, []); 

    const alluser = useSelector((state)=>state.Alluser01.Alluser.findAll)
    return (
        <div>
            {alluser&&alluser.map((el)=><AlluserMap el={el}/>)}
            {console.log(alluser)}
        <p>ahla</p>
        </div>
    )
}

export default Listuser
