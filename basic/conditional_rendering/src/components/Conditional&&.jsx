import React from 'react';

export default function Conditional (props){

    
    // se for true exibe
    return(
        <div>
            {props.isLoading && (<h1>Loading... com o &&</h1>)}
            
        </div>
        
    )
    
   
   
}