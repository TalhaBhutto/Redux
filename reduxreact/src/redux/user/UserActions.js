import axios from 'axios'
import {FETCH_USER_FAILURE,FETCH_USER_REQUEST,FETCH_USER_SUCCESS} from './UserTypes'

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

export const fetchUsers=()=>{
    return (dispatch)=>{
        dispatch(FetchUserRequest)
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(
            response=>{
                const users=response.date
                dispatch(FetchUserSuccess(users))
            })
        .catch(
            error=>{
                const errorMessage=error.message
                dispatch(FetchUserFailure(errorMessage))
            }
        )
    }
}