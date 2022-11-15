import React from "react";
import '../styles.css';


export default function Joke(props){

    return(
        <div className="card-joke">
            {props.question && (
                <h4>{props.question}</h4>
            )}

           
            <q>{props.punchline}</q>
        </div>
    );

}