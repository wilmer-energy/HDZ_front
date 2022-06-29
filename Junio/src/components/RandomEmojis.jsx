import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react'
const RandomEmojis = () => {
    let [emoji,setEmoji]=useState({})
    useEffect(()=>{
        axios.get("https://api.emojisworld.fr/v1/random?limit=1")
        .then((emojiFromApi)=>{console.log(emojiFromApi.data.results[0])
        setEmoji(emojiFromApi.data.results[0])
        })
    },[])

    let changeEmoji=()=>{
        axios.get("https://api.emojisworld.fr/v1/random?limit=1")
        .then((emojiFromApi)=>{console.log(emojiFromApi.data.results[0])
        setEmoji(emojiFromApi.data.results[0])
        })
    }
    return (
        <div>
            <h1>{emoji.name}</h1>
            <h1>{emoji.emoji}</h1>
            <button onClick={changeEmoji}>Change Emoji</button>
        </div>
    );
};

export default RandomEmojis;