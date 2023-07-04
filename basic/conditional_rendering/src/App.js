import React, { Component } from "react";
import Conditional from './components/Conditional';
import ConditionalTernary from './components/ConditionalTernary';
import ConditionalAlone from './components/ConditionalAlone';
import ConditionalEE from './components/Conditional&&';

export default class App extends Component{
    
    constructor(){
        super()
        this.state={
            isLoading: true
        }
    }

    componentDidMount(){
        setTimeout(()=> {
            this.setState({ isLoading: false})
        },1500)
    }

    render(){
        return(
            <div>
                <Conditional
                    isLoading={this.state.isLoading}
                />

                <ConditionalTernary
                    isLoading={this.state.isLoading}
                />


                {/* good pratice assim o app lida com se deve exibir o app ou não */ }
                {this.state.isLoading? <h1>Loading....</h1> : <ConditionalAlone />}

                <ConditionalEE
                    isLoading={this.state.isLoading}
                />

            </div>
        );
    }
}