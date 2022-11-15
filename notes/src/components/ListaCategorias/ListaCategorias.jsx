import React, { Component } from 'react';
import './styles.css'

export default class ListaCategorias extends Component {

    constructor(){
        super()
        this.state={categorias:[]}
        this._novaCategoria= this._novaCategoria.bind(this)
    }

    componentDidMount(){
        this.props.ListaCategorias.inscrever(this._novaCategoria.bind(this))
    }

    componentWillUnmount(){
		this.props.ListaCategorias.desinscrever(this._novaCategoria)
	}

    _novaCategoria(categorias){
        this.setState({...this.state, categorias})
    }

    _handleAdicionarCategoria = (event) => {
        if (event.key === "Enter") {
            this.props.adicionarCategoria(event.target.value)
        }
    }

    render() {
        return (
            <section className="lista-categorias">
                <ul className="lista-categorias_lista">
                    {this.props.categorias.map((categoria,index) => {
                        return <li key={index}>{categoria}</li>

                    })}


                </ul>

                <input
                    type="text"
                    name="categoria" 
                    placeholder="adicionar categoria" 
                    onKeyUp={this._handleAdicionarCategoria} 
                />
            </section>
        )
    }
}
