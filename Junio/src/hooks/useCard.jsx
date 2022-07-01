import axios from 'axios';
import React from 'react';
import {useState,useEffect} from 'react'

const useCard = (url) => {
    let [data,setData]=useState({})
    useEffect(()=>{
        axios.get(url)
        .then((userFromApi)=>{setData(userFromApi.data)})
    },[])

    let changeData=()=>{
        axios.get(url)
        .then((userFromApi)=>{setData(userFromApi.data)})
    }
    return{data, changeData}
};

export default useCard;