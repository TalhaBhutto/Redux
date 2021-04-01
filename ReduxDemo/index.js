const redux = require('redux');
const createStore= redux.createStore;

const buy_cake = 'BUY CAKE';

function buyCake(){
    return{
    type: buy_cake,
    info: 'First redux action'}
}

const initialState={
    numOfCake=10
}
const reducer =(state=initialState,action)=>{
    switch(action.type){
        case buy_cake: return{
            ... state,
            numOfCake: state.numOfCake-1
        }
        default: return state
    }

}

const store =createStore(reducer);

