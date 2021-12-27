import { useState, useEffect } from "react";
import Template from "./Templates";
import Meme from "./Meme";
import './Mememaker.css';
//Component to fetch and display memes from img flip API.

function Mememaker() {
    const [templates, setTemplates] = useState([]);
    const [meme, setMeme] = useState(null);


    useEffect(() => {
        fetch("https://api.imgflip.com/get_memes")
            .then((res) => res.json())
            .then((data) => {
                setTemplates(data.data.memes);
            })
    }, [])
    return (
        <div className="App">
            <h1 style={{ fontSize: "100px" }} className="neonText">
                MemeStudio </h1>
            {meme === null ?
                (<Template templates={templates} setMeme={setMeme} />)
                : (
                    <Meme meme={meme} setMeme={setMeme} />
                )}

        </div>
    );
}

export default Mememaker;
