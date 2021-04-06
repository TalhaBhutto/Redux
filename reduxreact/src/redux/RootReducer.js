import {combineReducers} from 'redux'
import cakeReducer from './cake/cakeReducer'
import IceCreamReducer from './IceCream/IceCreamReducer'
import PizzaSliceReducer from './PizzaSlice/PizzaSliceReducer'

const RootReducer = combineReducers({
    CakeR: cakeReducer,
    IceCreamR: IceCreamReducer,
    PizzaSliceR: PizzaSliceReducer
})

export default RootReducer