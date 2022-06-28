import React from 'react';
import { useState, useEffect } from 'react'

const Contador = () => {
    let colors = ["#eae2b7", "#fcbf49", "#f77f00", "#d62828", "#003049", "#118ab2", "#118ab2", "#06d6a0", "#ffd166", "#ef476f"]
    const [counter, setCounter] = useState(0)
    const [isVisible, setIsVisible] = useState(true)
    
    useEffect(() => { document.body.style = `background: ${colors[Math.floor(Math.random() * colors.length)]}` }, [isVisible])
    

    return (
        <div>
            <h1>Contador</h1>
            <p>{counter}</p>
            <button onClick={() => { setCounter(counter + 1) }}>Aumentar</button>
            <button onClick={() => { setCounter(counter - 1) }}>Disminuir</button>
            <hr />
            <h1>Input password</h1>
            <input type={isVisible ? "text" : "password"} /><button onClick={() => { setIsVisible(!isVisible) }}>check</button>
        </div>
    );
};

export default Contador;