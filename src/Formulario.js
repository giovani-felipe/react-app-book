import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: ''
    };

    this.state = this.stateInicial;
  }

  onSubmit = () => {
    this.props.onSubmit(this.state);
    this.setState(this.stateInicial);
  }

  onInput = ({ target: { name, value } }) => this.setState({ [name]: value });

  render() {
    const { nome, livro, preco } = this.state;
    return (
      <form className="row">
        <div className="input-field col s4">
          <label htmlFor="nome">Nome</label>
          <input
          className="validate"
            id="nome"
            type="text"
            name="nome"
            value={nome}
            onChange={this.onInput}
          />
        </div>
        <div className="input-field col s4">
          <label htmlFor="livro">Livro</label>
          <input
          className="validate"
            id="livro"
            type="text"
            name="livro"
            value={livro}
            onChange={this.onInput}
          />
        </div>
        <div className="input-field col s4">
          <label htmlFor="preco">Preço</label>
          <input
            className="validate"
            id="preco"
            type="text"
            name="preco"
            value={preco}
            onChange={this.onInput}
          />
        </div>
        <button className="btn waves-effect waves-light indigo lighten-2" type="button" onClick={this.onSubmit}>Salvar</button>
      </form>
    );
  }
}