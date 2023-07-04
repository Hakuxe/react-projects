import { useState } from "react";
export default function UseState(){

    const [count, setCount] = useState(1);

    function increment(){
        setCount(prevCount => prevCount +1);
    }

    function decrement(){
        setCount(count - 1);
    }

    function double(){
        setCount(prevCount => prevCount *2);
    }
    
    function divide(){
        setCount(prevCount => prevCount /2);
    }

    return(
        <>
            <h1>{count}</h1>
            <button onClick={increment}>increment</button>
            <button onClick={decrement}>decrement</button>
            <button onClick={double}>double</button>
            <button onClick={divide}>divide</button>
            
        </>
    );
}

