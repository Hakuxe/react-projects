import React from 'react';

export default function Conditional (props){

    if(props.isLoading === true){
        return(
           <h1>Loading....</h1>
        )
    }
    else{
        return(
            <h1>site carregado</h1>
        )
    }
   
}