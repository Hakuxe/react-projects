import React, { useState, useEffect } from 'react';
import randomcolor from 'randomcolor';

export default function UseEffect() {

    const [color, setColor] = useState("#fff");
    const [count, setCount] = useState(0);

    useEffect(() => {
        setColor(randomcolor())
    }, [])

    // useEffect(função q vai ser rodada, [ gatilho para a alteração ] )
    // se deixar o parametro [] vazio ele roda uma única vez tipo componentDidMount 
    return (
        <>
            <h1 style={{ color: color }}>{count}</h1>
            <button onClick={() => setCount(count + 1)}>plus</button>
            <button onClick={() => setCount(count - 1)}>minus</button>

        </>
    )
}
