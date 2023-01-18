import React from "react"
import Hamburger from "./Hamburger"
import Navbar from "./Navbar"
import Content from "./Content"
import Test from "./Test"
import MinTest from './mintest';

// import Card from "./Card"

export default function App(){
    return (
        <div className="container">
            <Navbar />
            <Content />
            <Test />
            <MinTest />

        </div>
    )
}