import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import PopUp from './PopUp';
import ApiService from './ApiService';

export default class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      autores: []
    };
  }

  componentDidMount() {
    ApiService.ListaAutores()
      .then(res => this.setState({ autores: res.data }));
  }

  removerAutor = id => {
    const { autores } = this.state;

    ApiService.RemoveAutor(id)
      .then(({ message }) => {
        if (message === 'deleted') {
          this.setState({
            autores: autores
              .filter(autor => autor.id !== id)
          });
          PopUp.exibeMensagem("info", "Autor removido com sucesso!");
        }
      })
  }

  onSubmit = autor => ApiService.AdicionaAutor(
    {
      nome: autor.nome,
      livro: autor.livro,
      preco: autor.preco
    })
    .then(res => this.setState({ autores: [...this.state.autores, res.data] }));

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <Tabela autores={this.state.autores} removerAutor={this.removerAutor} />
          <Formulario onSubmit={this.onSubmit} />
        </div>
      </>);
  }
}
