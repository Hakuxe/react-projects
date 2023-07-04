import React from 'react';
import Pratice from "./components/Pratice";
import Pratice2 from "./components/Pratice2";

class App extends React.Component{
    constructor(){ 
        // state deve ser definido no constructor
        super(); //chamar metodos e outras coisas do React.Component
        this.state= {
            answer:"yes"
        }

    }

    // props não pode ser mudado diretamente
    /*
        this.props.name = "thiago" //não faça isso 
    */ 
    render(){
        console.log(this.state)
        return(
            <div>
                <Pratice2 />
            </div>
        );
    }
}

export default App;