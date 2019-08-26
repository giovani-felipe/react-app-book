import React from "react";

const DataTable = ({ dados, titulo, colunas }) => (
  <table className="centered highlight">
    <thead>
      <tr>
        <th>{titulo}</th>
      </tr>
    </thead>
    <tbody>
      {dados.map(ele => (
        <tr key={ele.id}>
          {colunas.map(col => (
            <td key={`${ele.id}${ele[col]}`}>{ele[col]}</td>
          ))}
        </tr>
      ))}
    </tbody>
  </table>
);

export default DataTable;
