import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from './UserType'

export const FetchUserRequest=()=>{
    return{
        type: FETCH_USER_REQUEST
    }
}
export const FetchUserSuccess=(user)=>{
    return{
        type: FETCH_USER_SUCCESS
        ,payload :user
    }
}
export const FetchUserFailure=(error)=>{
    return{
        type: FETCH_USER_FAILURE
        ,payload :error
    }
}