import React from "react";

const TableRow = (props) => {
  const { user, deleteRow } = props;
  const { id, name, email, registrationDate, rating } = user;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{new Date(registrationDate).toLocaleDateString()}</td>
      <td>{rating}</td>
      <td>
        <button type="button" onClick={() => deleteRow(id)}>Удалить</button>
      </td>
    </tr>
  );
};

export default TableRow;
