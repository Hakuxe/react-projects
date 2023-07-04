import React from "react";

class Pratice extends React.Component{
    constructor(){
        super();
        this.state ={
            name:"Arthur",
            age: 15
        }
    }


    render(){
        return(
            <section>
                <h1>{this.state.name}</h1>
                <p>{this.state.age} years old</p>
            </section>
        );
    }
}

export default Pratice;