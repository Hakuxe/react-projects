import React from "react"

export default class FormsEInputs extends React.Component{

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
        //event.preventDefault()
        console.log("enviando o form",event)
        
    }
    
    // formik api para criar forms

    render(){
        return(
            <form onSubmit={this.handleSubmit}>
                { /* basic input text */}

                <input 
                    type="text" 
                    name={"firstName"} 
                    placeholder={"Digite seu nome"} 
                    onChange={this.handleChange}
                    value={this.state.firstName}
                />
                <br />
                <input 
                    type="text" 
                    name={"phone"} 
                    placeholder={"Digite seu telefone"} 
                    onChange={this.handleChange} 
                    value={this.state.phone}
                />
                <input 
                    type="tel" 
                    id="phone" 
                    name="phone" 
                    placeholder="(31)33333-3333" 
                    pattern="[0-9]{2}[0-9]{5}[0-9]{4}"// padrão do input 
                    maxLength={11}
                    value={this.state.phone}
                    onChange={this.handleChange} 
                />

                <br /> <br />

                { /* checkbox input, não possui o atributo value e sim checked */}
                <label>
                    <input 
                       
                        name={"isChecked"}
                        type={"checkbox"}
                        checked={this.state.isChecked}
                        onChange={this.handleChange}
                    /> concluído ?
                </label>

                <h1>{this.state.firstName} {this.state.phone}</h1>

                { /* textarea */}
                <textarea value={this.state.valueTextArea} rows={10} cols={30}/>
                <br /> <br />

                { /* radio input */}

                <label>
                    <input 
                        type={"radio"}
                        name={"gender"}
                        value={"male"}
                        checked={this.state.gender ==="male"}
                        onChange={this.handleChange}
                    /> Masculino 
                </label>
                <label>
                    <input 
                        type={"radio"}
                        name={"gender"}
                        value={"female"}
                        checked={this.state.gender ==="female"}
                       
                        onChange={this.handleChange}
                    /> Feminino 
                </label>

                <br /><br />

                { /* select input */}
                <label htmlFor="">What is your favorite color? </label>
                <select value={this.state.favoriteColor} onChange={this.handleChange} name={"favoriteColor"}>
                    <option value="blue">blue</option>
                    <option value="green">green</option>
                    <option value="purple">purple</option>
                    <option value="red">red</option>
                </select>

                <p>your favorite color is {this.state.favoriteColor}</p>


               <button type="submit"> Enviar</button>
            </form>
        );
    }


}