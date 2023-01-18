import React from "react"
import Card from "./Card"
import data from "./data"

export default function Content(){
    const cards = data.map((person)=>{
        return (
            <Card 
                name = {person.name}
                age = {person.age}
                img= {person.img}
                visible = {person.visible}
            />
        )
    })

    return (
        <div className="content">
            {cards}
        </div>
    )
}