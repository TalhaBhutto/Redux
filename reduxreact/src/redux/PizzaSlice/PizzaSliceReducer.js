import {BUY_PIZZASLICE} from "./PizzaSliceType"

const initialState={
    numOfPizzaSlice:30
}

const PizzaSliceReducer=(state=initialState,action)=>{
    switch(action.type){
        case BUY_PIZZASLICE:
            return{
                ...state,
                numOfPizzaSlice:state.numOfPizzaSlice-1
            }
        default:
            return state
    }
}

export default PizzaSliceReducer