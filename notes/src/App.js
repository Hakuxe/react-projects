import React, { Component } from "react";
import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro";
import ListaCategorias from "./components/ListaCategorias/ListaCategorias";
import "./assets/App.css";
import './assets/index.css';
import Categorias from "./components/dados/Categorias";
import ArrayDeNotas from "./components/dados/Notas";
class App extends Component {

	constructor() {
		super();

		this.listaDeCategorias = new Categorias();
		this.listaDeNotas = new ArrayDeNotas();
	}

/*	criarNota(titulo, texto, categoria) {
		const novaNota = { titulo, texto,categoria };
		const novoArrayNotas = [...this.state.notas, novaNota]
		const novoEstado = {
			notas: novoArrayNotas
		}
		this.setState(novoEstado)
	}

	apagarNota = (index) => {

		const novoArrayNotas = this.state.notas;
		novoArrayNotas.splice(index, 1);
		this.setState({ notas: novoArrayNotas })

	}

	adicionarCategoria = (categoria) => {
		let novoArrayCategorias= this.state.categorias;
		novoArrayCategorias.push(categoria);
		this.setState({categorias:novoArrayCategorias})
	}
*/

	render() {
		return (
			<section className="conteudo"	>
				<FormularioCadastro 
					criarNota={this.listaDeNotas.criarNota.bind(this.listaDeNotas)} 
					categorias={this.listaDeCategorias.categorias} 
					listaCategorias ={this.listaDeCategorias}
				/>

				<main className="conteudo-principal">
					<ListaCategorias
						ListaCategorias ={this.listaDeCategorias}
						categorias={this.listaDeCategorias.categorias}
						adicionarCategoria={this.listaDeCategorias.adicionarCategoria.bind(this.listaDeCategorias)}

					/>

					<ListaDeNotas
						listaDeNotas={this.listaDeNotas}
						notas={this.listaDeNotas.arrayDeNotas}
						apagarNota={this.listaDeNotas.apagarNota.bind(this.listaDeNotas)}
					/>
				</main>
			</section>
		);
	}
}

//new ListaDeNotas({notas:this.notas})
export default App;
