import React from 'react';

export default function Conditional (props){

    // condition ? if is true: if is false
    //  condition ? is true : is false
   
    return(
        <div>
             {props.isLoading === true?  <h1>Loading....</h1> : <h1>site carregado</h1>}
        </div>
    )

  
   
}