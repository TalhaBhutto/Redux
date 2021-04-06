import {createStore, applyMiddleware} from 'redux'
import RootReducer from "./RootReducer"
import jogger from 'redux-logger'

const store=createStore(RootReducer,applyMiddleware(jogger))

export default store