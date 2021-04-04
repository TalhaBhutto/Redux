const redux = require('redux')
const createStore=redux.createStore
const applyMiddleware=redux.applyMiddleware
const thunkMiddleware=require('redux-thunk').default
const axios= require('axios')

const initialState={
    loading: false,
    users:[],
    error:''
}

const FETCH_USERS_REQUEST ='FETCH_USERS_REQUEST'
const FETCH_USERS_SUCCESS ='FETCH_USERS_SUCCESS'
const FETCH_USERS_FAILURE ='FETCH_USERS_FAILURE'

const fetchUsersRequest = ()=>{
    return {
        type: FETCH_USERS_REQUEST
    }
}
const fetchUsersSuccess = ()=>{
    return {
        type: FETCH_USERS_SUCCESS
    }
}
const fetchUsersFailure = ()=>{
    return {
        type: FETCH_USERS_FAILURE
    }
}

const reducer = (state=initialState,actions)=>{
    switch(actions.type){
        case FETCH_USERS_REQUEST:
            return{
                ...state,
                loading:true
            }
        case FETCH_USERS_SUCCESS:
            return{
                ...state,
                loading:false,
                users: actions.payload,
                error:''
            }
        case FETCH_USERS_FAILURE:
            return{
                ...state,
                loading:false,
                users: [],
                error: actions.payload
            }
    }
}

const fetchUsers=()=>{
    return function(dispatch){
        dispatch(fetchUsersRequest())
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(Response=>{
            const users=Response.data.map(user=>user.id)
            dispatch(fetchUsersSuccess(users))
        })
        .catch(error=>{
            dispatch(fetchUsersFailure(error.message))
        })
    }
}
const store= createStore(reducer, applyMiddleware(thunkMiddleware))
store.subscribe(()=>{console.log(store.getState())})
store.dispatch(fetchUsers())