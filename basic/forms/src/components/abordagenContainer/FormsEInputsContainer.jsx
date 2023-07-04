import React from "react"
import FormPresentational from "./FormPresentational";


/*
    Na abordagem de container e presentational um component lida com o que vai ser exibido na tela 
    e o outro lida com a lógica do negócio 
*/

export default class FormsEInputsContainer extends React.Component{

    constructor(){
        super();

        this.state={
            firstName:"",
            phone:"",
            valueTextArea: "valor para o text area do state",
            isChecked: true,
            gender: "",
            favoriteColor:"white-somoke"
        }

        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event){
        // o name do state deve ser igual ao name do input para funcionar
        const {name, value, type, checked} = event.target;
        const valueInput = type === 'checkbox' ? checked : value; //como checkbox não tem a propriedade value 

        this.setState({
            [name]:valueInput
        })
        
    }

    handleSubmit = (event) =>{
        event.preventDefault()
        console.log("enviando o form",event)
        
    }
    
    // formik api para criar forms

    render(){
        return(
           <FormPresentational 
                data={this.state}
                handleChange={this.handleChange}
                handleSubmit={this.handleSubmit}
           />
        );
    }


}