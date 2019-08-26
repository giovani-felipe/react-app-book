import React from "react";
import Header from "./Header";
import DataTable from './DataTable';

const livros = [
  {
    id: 1,
    nome: "Paulo",
    livro: "React",
    preco: "1000"
  },
  {
    id: 2,
    nome: "Daniel",
    livro: "Java",
    preco: "99"
  },
  {
    id: 3,
    nome: "Marcos",
    livro: "Design",
    preco: "150"
  },
  {
    id: 4,
    nome: "Bruno",
    livro: "DevOps",
    preco: "100"
  }
];


const Livros = () => (
  <>
    <Header />
    <div className="container">
      <h1>Livros</h1>
      <DataTable dados={livros} titulo={"Livros"} colunas={["livro"]}/>
    </div>
  </>
);

export default Livros;
