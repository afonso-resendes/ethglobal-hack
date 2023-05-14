import React, { useState, ethers } from "react";

import style from "../style/Post.module.css";

export default function Post({setHomeScreen}) {
    const [title, setTitle] = useState('');
    const [content, setContent] = useState('');
    const [timeLength, setTimeLength] = useState(0);
    const [price, setPrice] = useState(0);

    const handleSubmit = (event) => {
        event.preventDefault();
        // Do something with the form data
        console.log({ title, content, timeLength, price });
        setHomeScreen(true);
    };

    

    return (
        <div className={style.container}>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(event) => setTitle(event.target.value)} />
                </label>
                <label>
                    Content:
                    <textarea value={content} onChange={(event) => setContent(event.target.value)} />
                </label>
                <label>
                    Time Length (in minutes):
                    <input type="number" value={timeLength} onChange={(event) => setTimeLength(event.target.value)} />
                </label>
                <label>
                    Price:
                    <input type="number" value={price} onChange={(event) => setPrice(event.target.value)} />
                </label>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}