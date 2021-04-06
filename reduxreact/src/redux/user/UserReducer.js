import { FETCH_USER_FAILURE, FETCH_USER_REQUEST, FETCH_USER_SUCCESS } from "./UserTypes"

const initialState={
    loading:false,
    users:[],
    error:''
}

const Reducer(state=initialState,actions){
    switch(actions.type){
        case FETCH_USER_REQUEST:
        case FETCH_USER_SUCCESS:
        case FETCH_USER_FAILURE:
    }
}