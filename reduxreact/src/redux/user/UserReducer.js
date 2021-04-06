import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

const initialState={
    loading:false,
    users:[],
    error:''
}

const Reducer=(state=initialState,actions)=>{
    switch(actions.type){
        case FETCH_USER_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USER_SUCCESS:
            return{
                ...state,
                loading:false,
                users:actions.payload
            }
        case FETCH_USER_FAILURE:
            return{
                ...state,
                loading:false,
                error:actions.payload
            }
        
        default: return state
    }
}

export default Reducer