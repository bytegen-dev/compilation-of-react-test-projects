import React from "react"

export default function Card(props){
    function handleClick(){
        alert("handleclicked")
    }

    const result = React.useState("Hello")
    console.log(result)

    return (
        <>
            {props.visible !== 0 && <div className="card">
                <img src={props.img} alt = "" onTouchEnd = {handleClick}/>
                <h1>{props.name}</h1>
                <h3>{props.age}</h3>
            </div> }
        </>
    )
}