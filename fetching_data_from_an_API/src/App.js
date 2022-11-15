import React from "react";
import axios from "axios";

export default class App extends React.Component{

    constructor(){
        super()
        this.state={}
    }

    componentDidMount(){
        // fetch https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API/Using_Fetch
        fetch("https://servicodados.ibge.gov.br/api/v1/localidades/estados")
            .then(response => {

                if(!response.ok){
                    throw error ("erro encontrado", response.status)
                }   

                return response.json()

            }).then(data => {

                this.setState({ufs: data})

            }).catch(error =>{
                console.error("problema com a resposta da api ibge",error)
            })


        // axios  https://axios-http.com/docs/example

        axios.get("https://pokeapi.co/api/v2/f")
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