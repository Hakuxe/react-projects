import React from "react"
import ReactDOM from "react-dom";
import Header from "./Header";
import Greeting from "./Greeting";

// #1
function Pratice (){
  
    //render(){
        return (
            <div>
                <Header 
                    username={"thiago"}
                />
                <Greeting />
            </div>
        )
    //}
    
}

export default Pratice;


/*
// #2
class Header extends React.Component {
    render(){
        console.log(this);
        
          return (
            <header>
                <p>Welcome, {this.props.username}!</p>
            </header>
        )
    }
  
}

// #3
class Greeting extends React.Component {
    render(){
        const date = new Date()
        const hours = date.getHours()
        let timeOfDay
        
        if (hours < 12) {
            timeOfDay = "morning"
        } else if (hours >= 12 && hours < 17) {
            timeOfDay = "afternoon"
        } else {
            timeOfDay = "night"
        }
        return (
            <h1>Good {timeOfDay} to you, sir or madam!</h1>
        )
    }
}


//ReactDOM.render(<App />, document.getElementById("root"))

*/