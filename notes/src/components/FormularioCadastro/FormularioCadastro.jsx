import React, { Component } from "react";
import "./estilo.css";
class FormularioCadastro extends Component {

  constructor(props){
    super(props);
    this.titulo ="";
    this.texto ="";
    this.categoria="sem categoria";
    this.state={categorias:[]}
    this._novaCategoria= this._novaCategoria.bind(this)
  }


  componentDidMount(){
      this.props.listaCategorias.inscrever(this._novaCategoria.bind(this))
  }

  componentWillUnmount(){
		this.props.ListaCategorias.desinscrever(this._novaCategoria)
	}

  _novaCategoria(categorias){
      this.setState({...this.state, categorias})
  }

  _handleMudancaTitulo(evento){
    evento.stopPropagation();
    this.titulo = evento.target.value;
  }

  _handleMudancaTexto(evento){
    evento.stopPropagation();
    this.texto = evento.target.value;
  }

  _criarNota(evento){
    evento.preventDefault();
    evento.stopPropagation();
    this.props.criarNota(this.titulo, this.texto, this.categoria);
    
  }

  _handleChangeCategoria =(event)=>{
      event.stopPropagation();
      this.categoria = event.target.value;
  }

  render() {
    return (
      <form className="form-cadastro"
        onSubmit={this._criarNota.bind(this)}
      >
        <select className="form-cadastro_input " onChange={this._handleChangeCategoria}>
          <option >Sem categoria</option>
          {this.state.categorias.map((categoria, index)=>{
            return <option key={index}>{categoria}</option>
          })}
        </select>
        <input
          type="text"
          placeholder="Título"
          className="form-cadastro_input"
          onChange={this._handleMudancaTitulo.bind(this)}
        />
        <textarea
          rows={15}
          placeholder="Escreva sua nota..."
          className="form-cadastro_input"
          onChange={this._handleMudancaTexto.bind(this)}
        />
        <button className="form-cadastro_input form-cadastro_submit">
          Criar Nota
        </button>
      </form>
    );
  }
}

export default FormularioCadastro;
