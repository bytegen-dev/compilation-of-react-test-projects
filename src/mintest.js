import React from "react";

export default function MinTest(){
    const [currentState, setState] = React.useState(0)

    // function addState(){
    //     setState(currentState + 1)
    // }

    function addState(){
        setState(function(oldValue){
            return (oldValue + 1)
        })
    }

    function minusState(){
        setState(function(oldValue){
            if (oldValue !== 0){
                return(oldValue - 1)
            } else if (oldValue == 0){
                return(oldValue = 0)
            }
        })
    }

    function resetState(){
        setState(0)
    }
    return(
        <div className="counter-holder">
            <div className="counter btn minus" onClick={minusState}>-</div>
            <div className="counter count">
                <h1>{currentState}</h1>
            </div>
            <div className="counter btn plus" onClick={addState}>+</div>
            <button className="counter-reset" onClick={resetState}>Reset</button>
        </div>
    )
}