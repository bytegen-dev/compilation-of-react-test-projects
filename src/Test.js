import React from "react"
import memesData from "./memesData"

export default function Test(){
    function getMemeImage() {
        const memesArray = memesData.data.memes
        const randomNumber = Math.floor(Math.random() * memesArray.length)
        const newMeme = memesArray[randomNumber].url
        // memesArray[randomNumber].url  <-- this line is incomplete!
        setMemeImage(newMeme)
        
    }

    const [memeImage, setMemeImage] = React.useState("https://cdn-icons-png.flaticon.com/512/2039/2039083.png")

    

    return (
        <div className="test test-form">
            <div className="form">
                {/* <p>{url}</p> */}
                <input className="test-inp" placeholder="Top text"/>
                <input className="test-inp" placeholder="Bottom-text"/>
                <button className="test-btn" onClick={getMemeImage}>Generate</button>
            </div>
            <div className="img-holder">
            {/* <img className="meme-image" src = "https://media.contentapi.ea.com/content/dam/eacom/images/2022/12/eacom-homepage-f23-vote-now-hero-med-7x2-xl.png.adapt.crop2x1.1023w.png" /> */}
            <img className="meme-image" src = {memeImage} alt="meme-image"/>
            </div>
        </div>
    )
}