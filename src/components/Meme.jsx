import React from 'react'
import { useState } from 'react';
import { saveAs } from 'file-saver'
//Component for displaying and Editing individual meme 
const Meme = ({ meme, setMeme }) => {
    //State of form that we are creating to store the captions of memes that we are sending to database
    const [form, setForm] = useState({
        template_id: meme.id,
        username: "kunal99356",
        password: "Micromax@99356",
        boxes: [],
    });
    //Function to send data to imgflip API and displaying the url that we get in return on page.
    const generateMeme = () => {
        let url = `https://api.imgflip.com/caption_image?template_id=${form.template_id}&username=${form.username}&password=${form.password}`;
        form.boxes.map((box, index) => {
            url += `&boxes[${index}][text]=${box.text}`;

        });
        fetch(url)
            .then(res => res.json())
            .then((data) => {
                setMeme({ ...meme, url: data.data.url })
                saveAs(data.data.url, 'image.jpg')
            });
    };
    // const downloadImage = (url) => {
    //     saveAs('image_url', 'image.jpg') // Put your image url here.
    // }
    return (
        <div className="meme">
            <img src={meme.url} alt="" />
            <div>
                {[...Array(meme.box_count)].map((_, index) => (
                    <input key={index} type="text" placeholder={`Meme Caption ${index + 1} `} onChange={(e) => {
                        const newBoxes = form.boxes;
                        newBoxes[index] = { text: e.target.value };
                        setForm({ ...form, boxes: newBoxes });
                    }} />
                ))}
            </div>
            <div>
                <button className="meme-button" onClick={generateMeme}>Generate+Download</button>
                <button className="meme-button" onClick={() => { setMeme(null) }}>Choose Template</button>

            </div>
        </div>
    )
}

export default Meme
