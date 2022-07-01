import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react'
import useCard from '../hooks/useCard';
const RandomEmojis = () => {
    /*let [emoji,setEmoji]=useState({})
    
        useEffect(()=>{
            axios.get("https://api.emojisworld.fr/v1/random?limit=1")
            .then((emojiFromApi)=>{console.log(emojiFromApi.data.results[0])
            setEmoji(emojiFromApi.data.results[0])
            })
        },[])
    
    let changeItem=()=>{
        axios.get("https://api.emojisworld.fr/v1/random?limit=1")
        .then((emojiFromApi)=>{console.log(emojiFromApi.data.results[0])
        setEmoji(emojiFromApi.data.results[0])
        })
    } */
    let {data,changeData:changeItem}=useCard("https://api.emojisworld.fr/v1/random?limit=1")
    //chargeOnetime()
    let emoji=data.results?.[0]
    
    return (
        <div>
            <h1>{emoji?.name}</h1>
            <h1>{emoji?.emoji}</h1>
            <button onClick={changeItem}>Change Emoji</button>
        </div>
    );
};

export default RandomEmojis;