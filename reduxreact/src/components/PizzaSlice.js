import React from 'react'
import {buyPizzaSlice} from "../redux"
import {connect} from "react-redux"

function PizzaSlice(Props){
    return(
        <div>
            <h2>Number of Pizza Slice - {Props.numberOfPizzaSlice}</h2>
            <button onClick={Props.buyPizzaSlice}>Buy Pizza Slice</button>
        </div>
    )
}

const mapStateToProps=state=>{
    return{
        numberOfPizzaSlice:state.PizzaSliceR.numOfPizzaSlice
    }
}
const mapDispatchToProps=dispatch=>{
    return{
        buyPizzaSlice:()=>dispatch(buyPizzaSlice())
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PizzaSlice)

