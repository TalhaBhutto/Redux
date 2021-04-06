import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import IceCreamReducer from './IceCream/IceCreamReducer'

const RootReducer = combineReducers({
    CakeR: cakeReducer,
    IceCreamR: IceCreamReducer
})

export default RootReducer