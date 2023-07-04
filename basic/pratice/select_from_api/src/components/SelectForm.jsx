import React, { Component } from "react";

import findAllUfs from "../services/uf.service"
export default class SelectForm extends Component{


    constructor(){
        super()

        this.state={
            userUF:"choose one",
            ufs:[]
        }
    }

    componentDidMount(){
        try{
            findAllUfs().then(response => {
                if(response.status === 200){
                    this.setState({ufs: response.data})
                }  
            })
              
        }catch(error){
            console.error(error)
        }
    }

    handleChange = (event) => {
        const{name, value} =event.target

        this.setState({[name]:value});
    }

    render(){

        const {ufs, userUF}= this.state

        //

        return(
            <div>
                <select name="userUF" value={userUF} onChange={this.handleChange}>
                    {ufs.map(option =>{
                        return <option key={option.id} value={option.sigla}>{option.sigla}</option>
                    })}
                </select>

                {
                    (userUF && userUF !== "choose one") && <h2> Você mora em {ufs.find( uf => uf.sigla === this.state.userUF).nome}</h2>
                }
                
            </div>
        );
    }
}