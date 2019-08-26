import React from "react";
import Header from "./Header";
import DataTable from "./DataTable";

const autores = [
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

const Autores = () => (
  <>
    <Header />
    <div className="container">
      <h1>Autores</h1>
      <DataTable dados={autores} titulo={"Autores"} colunas={["nome"]} />
    </div>
  </>
);

export default Autores;
