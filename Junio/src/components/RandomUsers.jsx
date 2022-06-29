import axios from 'axios';
import React from 'react';
import { useState, useEffect } from 'react'

const RandomUsers = () => {
    let [user, setUser] = useState({})
    useEffect(() => {
        axios.get("https://randomuser.me/api/")
            .then((userFromApi) => {
                console.log(userFromApi.data.results[0])
                setUser(userFromApi.data.results[0])
            })
    }, [])
    let changeUser=()=>{
        axios.get("https://randomuser.me/api/")
            .then((userFromApi) => {
                console.log(userFromApi.data.results[0])
                setUser(userFromApi.data.results[0])
            })
    }

    return (
        <div>
            <h1>{user.name?.title} {user.name?.first} {user.name?.last}</h1>
            <img src={user.picture?.large} alt="" />
            <p>Email: {user.email}</p>
            <button onClick={changeUser}>Change User</button>
        </div>
    );
};

export default RandomUsers;