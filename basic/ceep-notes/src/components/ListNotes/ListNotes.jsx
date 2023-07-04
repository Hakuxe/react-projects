import React from 'react';
import CardNote from '../CardNota/CardNote';
import './style.css'

class ListNotes extends React.Component{
    constructor(props){
        super(props)
    }
   

    render(){
        const categorias =["trabalho","trabalho","estudos"];

        return(
           <section className={"list-cards"}>
                <ul>
                    {this.props.notas.map((nota, index)=>{
                    return( 
                        <li key={index}>
                            <CardNote 
                                titulo={nota.titulo}
                                descricao={nota.descricao}
                            />
                        </li>
                    )
                    })}
                </ul>
            </section>
            
        );
    }

}

export default ListNotes;