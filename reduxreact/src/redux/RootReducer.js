import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import IceCreamReducer from './IceCream/IceCreamReducer'
import PizzaSliceReducer from './PizzaSlice/PizzaSliceReducer'
import Reducer from './user/UserReducer'

const RootReducer = combineReducers({
    CakeR: cakeReducer,
    IceCreamR: IceCreamReducer,
    PizzaSliceR: PizzaSliceReducer,
    user:Reducer
})

export default RootReducer