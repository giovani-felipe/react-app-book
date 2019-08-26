import React, { Component } from 'react';
import 'materialize-css/dist/css/materialize.min.css';

const TableHead = () =>
  (<thead>
    <tr>
      <th>Autor</th>
      <th>Título</th>
      <th>Preço</th>
      <th>Remover</th>
    </tr>
  </thead>);

const TableBody = ({ autores, removerAutor }) => {
  const linhas = autores
    .map(({ nome, livro, preco }, index) =>
      (<tr key={index}>
        <td>{nome}</td>
        <td>{livro}</td>
        <td>{preco}</td>
        <td><button className="btn waves-effect waves-light indigo lighten-2" onClick={() => removerAutor(index)}>Remover</button></td>
      </tr>));
  return (<tbody>{linhas}</tbody>);
};

export default class Tabela extends Component {
  render() {
    const { autores, removerAutor } = this.props;
    return (
      <table className="centered highlight">
        <TableHead />
        <TableBody autores={autores} removerAutor={removerAutor} />
      </table>
    );
  };
}



