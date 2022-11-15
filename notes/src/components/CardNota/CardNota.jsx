import React, { Component } from "react";
import "./estilo.css";
import deleteIcon from "../../assets/img/delete_icon_outline.svg"

class CardNota extends Component {

	render() {
		const {indice ,titulo, texto, categoria} = this.props;

		return (
			<section className="card-nota">
				<header className="card-nota_cabecalho">
					<h3 className="card-nota_titulo">{titulo}</h3>
				</header>
				<p className="card-nota_texto">{texto}</p>
				<img 
					src={deleteIcon} 
					alt="delete"  
					onClick={() => {
						console.log(indice);
						this.props.apagarNota(indice)
					}}
				/>
				<label>{categoria}</label>
			</section>
		);
	}
}

export default CardNota;
