import React from "react"
import Hamburger from "./Hamburger"

export default function Navbar(){
    
    return (
        <div className="navbar">
            <div className="logo">
                <i className="fa fa-pen"/>
            </div>
            <Hamburger className="hamburger"/>
        </div>
    )
}