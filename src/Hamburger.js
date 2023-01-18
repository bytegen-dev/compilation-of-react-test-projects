import React from "react"

export default function Hamburger(props){
    function hamburgerClicked(){
        alert("hamburgerclicked")
    }
    

    return (
        <div className={props.className} onClick={hamburgerClicked}>
            <i className="fa fa-bars"/>
            <i className="fa fa-close"/>
        </div>
    )
}