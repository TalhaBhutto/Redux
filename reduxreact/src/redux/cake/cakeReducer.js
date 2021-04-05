import {BUY_CAKES} from "./CakeTypes"

const initialState={
    numberOfCakes:10,
}

const cakeReducer=(state=initialState,actions)=>{
    switch(actions.type){
        case BUY_CAKES:return{
            ...state,
            numberOfCakes:state.numberOfCakes-1
        }
        default: return state
    }
}

export default cakeReducer