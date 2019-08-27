import React, { Component } from "react";
import Header from "./Header";
import DataTable from './DataTable';
import ApiService from "./ApiService";


class Livros extends Component {
  constructor(props) {
    super(props);

    this.state = { livros: [] }

  }

  componentDidMount() {
    ApiService.ListaLivros()
      .then(res => this.setState({ livros: res.data }))
  }
  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Livros</h1>
          <DataTable dados={this.state.livros} titulo={"Livros"} colunas={["livro"]} />
        </div>
      </>)
  }
}

export default Livros;
