import React from 'react';
import './style.css';

class CardNote extends React.Component{
    render(){
        return(
            <section className={"card-nota"}>
                <header>
                    <h1>{this.props.titulo}</h1>
                </header>
                <p>{this.props.descricao}</p>
            </section>
        );
    }
}

export default CardNote;