import React from "react";
import memes from "../memesData"

export default function Meme(){
    const [memeImage, setMemeImage] = React.useState("")
    
    function getMemeImage() {
        const memesArray = memes.data.memes;
        const randomNumber = Math.floor(Math.random() * memesArray.length);
        setMemeImage(memesArray[randomNumber].url);
    }

    return (
        <main>
            <div className="form">
                <input 
                    type="text" 
                    className="form-input"
                    placeholder="Top text"
                />
                <input 
                    type="text" 
                    className="form-input"
                    placeholder="Bottom text"
                />
                <button 
                    className="form-button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeImage} className="meme-image"/>
        </main>
    )
}