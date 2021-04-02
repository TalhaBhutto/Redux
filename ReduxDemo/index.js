const redux = require('redux');
const createStore= redux.createStore;
const combinereducers=redux.combineReducers;
const reduxLogger= require('redux-logger');
const logger=reduxLogger.createLogger()

const buy_cake = 'BUY CAKE';
const buy_icecream='BUY ICECREAM'

function buyCake(){
    return{
    type: buy_cake,
    info: 'First redux action'}
}
function buyIceCream(){
    return{
    type: buy_icecream,
    info: 'First redux action'}
}

// const initialState={
//     numOfCake:10,
//     numOfIceCreams:20
// }
const InitialCakeState={
    Ncake:10
}
const InitialIceCreamState={
    Nicecream:20
}
// const reducer =(state=initialState,action)=>{
//     switch(action.type){
//         case buy_cake: return{
//             ... state,
//             numOfCake: state.numOfCake-1
//         }
//         case buy_icecream: return{
//             ... state,
//             numOfIceCreams: state.numOfIceCreams-1
//         }
//         default: return state
//     }

// }
const cakeReducer=(state=InitialCakeState,action)=>{
    switch(action.type){
                case buy_cake: return{
                    ... state,
                    Ncake: state.Ncake-1
                }
                default: return state
}
}
const icecreamReducer=(state=InitialIceCreamState,action)=>{
    switch(action.type){
                case buy_icecream: return{
                    ... state,
                    Nicecream: state.Nicecream-1
                }
                default: return state
}
}
const rootReducer=combinereducers({
    cakeReducer,
    icecreamReducer
})
const store =createStore(rootReducer);
console.log('initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())
store.dispatch(buyIceCream())

unsubscribe()