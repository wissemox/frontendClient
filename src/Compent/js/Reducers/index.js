import {combineReducers} from 'redux'
import authReducer from './authReducer'
import Verifed from './Verifed'
import Verifed02 from './verifed02'
import Product0 from './Product'
import Presonlise from './Presonlise'
import Formulaire from "./formulaireReducer";
import ForPers  from "./formulPersonel";
import Admins01 from './Admins'
import Admins02 from './Admins02'
import Alluser01 from './Alluser'
import AdminVD from './AdminVD'
import ForPresAll from './fourmPresonliseALl'
import Searched from './serch'
import INCREMETN from './Increment'
import Forums from './ForumReducer'

export default combineReducers({authReducer ,
    Verifed ,
    Verifed02,
    Product0,
    Presonlise,
    Formulaire,
    ForPers,
    Admins01,
    Admins02,
    Alluser01,
    AdminVD,
    ForPresAll,
    Searched,
    INCREMETN,
    Forums})