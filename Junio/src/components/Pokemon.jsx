import React from 'react';
import axios from "axios";
import { useState, useEffect } from "react";

const Pokemon = () => {
    const [pokemon, setPokemon] = useState({});
    const [height, setHeight] = useState(0);
    const [isDecimeters, setIsDecimeters] = useState(true);
    const [id,setId]=useState(Math.floor(Math.random()*600)+1)
  
    useEffect(() => {
      axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
        setPokemon(res.data);
        setHeight(res.data.height);
      });
    }, []);
  
    console.log(height);
  
    const convertHeight = () => {
      if (isDecimeters) {
        // Transformar a metros
        setHeight(height / 10);
        setIsDecimeters(false);
      } else {
        // Transformar a decimetros;
        setHeight(height * 10);
        setIsDecimeters(true);
      }
    };
    const changePokemon =()=>{
        setId(Math.floor(Math.random()*600)+1)
        axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`).then((res) => {
        setPokemon(res.data);
        setHeight(res.data.height);
      });
    }
  
    return (
      <div className="App">
        <div className="card">
          <h1>{pokemon.name}</h1>
          <img src={pokemon.sprites?.other.dream_world.front_default} alt="" />
          <div>
            <b>Weight: </b> {pokemon.weight}
          </div>
          <div>
            <b>Height: </b> {height} {isDecimeters ? "decimeters" : "meters"}
          </div>
          <div>
            <b>Type: </b> {pokemon.types?.[0].type.name}
          </div>
          <button onClick={convertHeight}>Convert to meters</button><br/>
          <button onClick={changePokemon}>Change Pokemon</button>
        </div>
      </div>
    );
};

export default Pokemon;