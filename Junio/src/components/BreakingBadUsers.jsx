import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'
import useCard from '../hooks/useCard';

const BreakingBadUsers = () => {

    let { data, changeData } = useCard("https://rickandmortyapi.com/api/character")

    let [characterIndex, setCharacterIndex] = useState(0)
    let changeCharacter = () => {
        setCharacterIndex(Math.floor(Math.random() * data.results.length))
    }


    return (
        <div>
            <h1>{data.results?.[characterIndex]?.name}</h1>
            <img src={data.results?.[characterIndex]?.image} alt="" />
            <br />
            <button onClick={changeCharacter}>change character</button>
        </div>
    );

};

export default BreakingBadUsers;