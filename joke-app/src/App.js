import React from "react";
import Joke from './components/Joke';

export default function App(){
    return(
        <div className={"joke-list"}>
           <Joke 
                question={"I’m so bored that I just memorized six pages of the dictionary."}
                punchline={"I learned next to nothing."}
           />

            <Joke 
                
                punchline={"What sounds like a sneeze and is made out of leather? ashoe!"}
           />
             <Joke 
                question={"Por que o pinheiro não se perde na floresta"}
                punchline={"porque ele tem umaPinha "}
           />
             <Joke 
                question={"How do you fix a broken gorilla?"}
                punchline={"With a monkey wrench."}
           />

        </div>
    );
}