import React from "react";

// Given a stateless functional component, add state to it
// state should have a property called `isLoggedIn` which is a boolean
// (true if logged in, false if not)
// Then, give your best shot at rendering the word "in" if the user is logged in
// or "out" if the user is logged out.

class Pratice2 extends React.Component{

    constructor(){
        super();
        this.state={
            isLoggedIn: true
        }
    }

    render(){
        // outra forma de fazer 
        let info = '';
        if(this.state.isLoggedIn){
            info = "in";
        }else{
            info = "out";
        }


        return (
            <div>
                {this.state.isLoggedIn ? <h1>the user is in</h1> : <h1>the user is out</h1> }
                <h1>You are currently logged {info}</h1> 
                
            </div>
        )
    }
   
}

export default Pratice2;