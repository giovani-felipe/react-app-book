import React, { Component } from "react";
import Header from "./Header";
import DataTable from "./DataTable";
import ApiService from "./ApiService";


class Autores extends Component {
  constructor(props) {
    super(props);
    this.state = {
      autores: []
    };
  }

  componentDidMount() {
    ApiService.ListaAutorNomes()
      .then(res => this.setState({ autores: res.data }));
  }

  render() {
    return (
      <>
        <Header />
        <div className="container">
          <h1>Autores</h1>
          <DataTable dados={this.state.autores} titulo={"Autores"} colunas={["nome"]} />
        </div>
      </>
    );
  }
}

export default Autores;
