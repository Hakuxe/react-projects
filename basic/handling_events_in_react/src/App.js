import React from "react";

class App extends React.Component{
    constructor(){
        super();
    }

    handleClick(){
        console.log("fui clicado usando handleClick");
    }

    handleFocus = () => {
        console.log("O mouse está sobre");
    }

    render(){
        return(
            <section>
               <div>
                    <img src="https://www.fillmurray.com/200/100" onMouseOver={this.handleFocus}/>
                    <br />
                    <br />
                    <button onClick={this.handleClick}>Click me</button>
                </div>
            </section>
        );
    }
}

export default App;