import React from "react";

const DataTable = ({ dados, titulo, colunas = [] }) => {

  const linha = dados.map(ele => {
    if (colunas.length > 0)
      return (
        <tr key={ele.id}>
          {colunas.map(col => (
            <td key={`${ele.id}${ele[col]}`}>{ele[col]}</td>
          ))}
        </tr>);

    return (
      <tr key={ele.id}>
        <td>{ele}</td>
      </tr>);
  });

  return (
    <table className="centered highlight">
      <thead>
        <tr>
          <th>{titulo}</th>
        </tr>
      </thead>
      <tbody>
        {linha}
      </tbody>
    </table>
  )
};

export default DataTable;
