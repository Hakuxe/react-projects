import React from "react";
import Header from "./components/Header/Header";
import MemeGenerator from "./components/MemeGenerator";
import "./styles.css"

export default class App extends React.Component{
    render(){
        return(
            <div>
                <Header />
                <MemeGenerator />
            </div>
        );
    }
}