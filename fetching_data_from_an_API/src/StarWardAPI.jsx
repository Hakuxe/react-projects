import React from "react";
import axios from "axios";

export default class StarWarsApi extends React.Component{

    constructor(){
        super()
        this.state={}
    }

    componentDidMount(){

        // axios  https://axios-http.com/docs/example

        axios.get("https://swapi.dev/api/")
            .then(response => {
        
                let links = response.data;
                this.setState({links:links})

            }).catch(error =>{
                console.error("erros na api p",error)
            })
                

    }

    render(){
        console.log(this.state)
        return(
            <div>
                <p> {JSON.stringify(this.state.ufs)}</p>
                <br />
                <p> {JSON.stringify(this.state.links)}</p>
            </div>
        );
    }
}