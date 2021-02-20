import {createStore , compose , applyMiddleware} from 'redux' ;
import thunk from 'redux-thunk'
import rootReducer from "../Reducers"
const middlerwares = [thunk]
const store = createStore(
    rootReducer, 
    compose(
        applyMiddleware(...middlerwares),
        window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
    )
); 
export default store