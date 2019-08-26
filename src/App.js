import React, { Component } from 'react';
import './App.css';
import Tabela from './Tabela';
import Formulario from './Formulario';
import Header from './Header';
import PopUp from './PopUp';

export default class App extends Component {

  state = {
    autores: [
      {
        nome: 'Paulo',
        livro: 'React',
        preco: '1000'
      },
      {
        nome: 'Daniel',
        livro: 'Java',
        preco: '99'
      },
      {
        nome: 'Marcos',
        livro: 'Design',
        preco: '150'
      },
      {
        nome: 'Bruno',
        livro: 'DevOps',
        preco: '100'
      }
    ]
  };

  removerAutor = index => {
    const { autores } = this.state;

    this.setState({
      autores: autores.filter((autor, ind) => ind !== index)
    });

    PopUp.exibeMensagem("info","Autor removido com sucesso!");
  }

  onSubmit = autor => this.setState({ autores: [...this.state.autores, autor] });

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
