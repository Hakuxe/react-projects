import React from 'react';

export default function App(){

    const hora = new Date();
    
    let welcome = "";

  

    if(hora.getHours() < 18 && hora.getHours() > 6){
        welcome = "Boa dia !!!"
    }else{
        welcome = "Boa noite !!!"
    }

    return(
        <h1 className={"red"}>Agora são {` ${hora.getHours()}:${hora.getMinutes()}`}, {welcome}</h1>
    )
}