import React from "react";
import UseState from "./UseState";
import UseEffect from "./UseEffect";

export default class App extends React.Component{
    render(){
        return(
            <div>
               <UseState />
               <UseEffect />
            </div>
        );
    }
}