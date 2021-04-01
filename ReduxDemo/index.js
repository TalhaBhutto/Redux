const redux = require('redux');
const createStore= redux.createStore;

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

const initialState={
    numOfCake:10,
    numOfIceCreams:20
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case buy_cake: return{
            ... state,
            numOfCake: state.numOfCake-1
        }
        case buy_icecream: return{
            ... state,
            numOfIceCreams: state.numOfIceCreams-1
        }
        default: return state
    }

}

const store =createStore(reducer);
console.log('initial state',store.getState())
const unsubscribe=store.subscribe(()=>console.log('Updated State', store.getState()))
store.dispatch(buyCake())
store.dispatch(buyCake())
store.dispatch(buyCake())
unsubscribe()