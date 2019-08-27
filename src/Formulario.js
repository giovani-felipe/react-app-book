import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';
import FormularioValidator from './FormularioValidator';
import PopUp from './PopUp';

export default class Formulario extends Component {
  constructor(props) {
    super(props);

    this.validator = new FormularioValidator([{
      campo: 'nome',
      metodo: 'isEmpty',
      validaQuando: false,
      mensagem: 'Entre com um nome!'
    }, {
      campo: 'livro',
      metodo: 'isEmpty',
      validaQuando: false,
      mensagem: 'Entre com um livro!'
    }, {
      campo: 'preco',
      metodo: 'isInt',
      args: [{ min: 0, max: 99999 }],
      validaQuando: true,
      mensagem: 'Entre com um preço!'
    }]);

    this.stateInicial = {
      nome: '',
      livro: '',
      preco: '',
      validacao: this.validator.valido()
    };

    this.state = this.stateInicial;
  }

  onSubmit = () => {
    const validacao = this.validator.valida(this.state);
    console.log(validacao);

    if (validacao.isValid) {
      this.props.onSubmit(this.state);
      this.setState(this.stateInicial);
    } else {
      const { nome, livro, preco } = validacao;
      const campos = [nome, livro, preco];
      const camposInvalidos = campos.filter(elem => elem.isInvalid);

      camposInvalidos.forEach(campo => PopUp.exibeMensagem('error', campo.mensagem));
    }
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
            required
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
            required
          />
        </div>
        <div className="input-field col s4">
          <label htmlFor="preco">Preço</label>
          <input
            className="validate"
            id="preco"
            type="number"
            name="preco"
            value={preco}
            onChange={this.onInput}
            required
          />
        </div>
        <button className="btn waves-effect waves-light indigo lighten-2" type="button" onClick={this.onSubmit}>Salvar</button>
      </form>
    );
  }
}