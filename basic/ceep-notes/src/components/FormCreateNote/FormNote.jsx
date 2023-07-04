import React from 'react';

class FormNote extends React.Component{

    constructor(props){
        super(props);
        this.state={
            titulo:"",
            descricao:""
        }
    }

    handleChange(event){
        const {name, value} = event.target;
        this.setState({
            [name]:value
        })
    }


    criarNota(evento){
        evento.preventDefault();
        //evento.stopPropagation();

        const {titulo, descricao} = this.state;
        this.props.criarNota(titulo,descricao);
    }

    render(){
        return(
            <section>
                <form onSubmit={this.criarNota.bind(this)}>
                    <input 
                        type="text" 
                        placeholder="O que você quer anotar? " 
                        name={"titulo"}
                        onChange={this.handleChange.bind(this)}
                    />
                    <br />
                    <textarea 
                        name="descricao" 
                        id="description" 
                        cols="30" rows="15" 
                        placeholder="Descrição" 
                        onChange={this.handleChange.bind(this)}/>

                    <button>Criar Notas</button>
                </form>
            </section>
        );
    }

}

export default FormNote;