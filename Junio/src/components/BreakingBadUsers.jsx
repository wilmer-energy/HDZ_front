import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'

const BreakingBadUsers = () => {
    let [users, setUsers] = useState([])
    useEffect(() => {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((usersApi) => {
                setUsers(usersApi.data.results)
                console.log(usersApi.data.results)
            })

    }, [])
    let [characterIndex, setCharacterIndex] = useState(0)
    let changeCharacter = () => {
        setCharacterIndex(Math.floor(Math.random() * users.length))
    }
    return (
        <div>
            <h1>{users[characterIndex]?.name}</h1>
            <img src={users[characterIndex]?.image} alt="" />
            <br />
            <button onClick={changeCharacter}>change character</button>
        </div>
    );
};

export default BreakingBadUsers;