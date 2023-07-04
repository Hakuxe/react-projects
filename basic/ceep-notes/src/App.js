import React from 'react';
import FormNote from './components/FormCreateNote/FormNote';
import ListNotes from './components/ListNotes/ListNotes';
import CardTest from './components/teste/CardTeste'

class App extends React.Component{

    constructor(){
        super();
        this.state={
            notas:[]
        }
    }

    criarNota(titulo, descricao){

        const novaNota = {titulo, descricao};
        const novoArrayNotas = [...this.state.notas,novaNota]
        const novoEstado = {
          notas:novoArrayNotas
        }
        this.setState(novoEstado)
      
    }

    render(){
        return(
            <div>
                <FormNote 
                    criarNota={this.criarNota.bind(this)}
                />
                <ListNotes 
                    notas={this.state.notas}
                />

            </div>
        );
    }
}

export default App;