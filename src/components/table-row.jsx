import React from "react";

const TableRow = (props) => {
  const { user } = props;
  const { name, email, registrationDate, rating } = user;
  return (
    <tr>
      <td>{name}</td>
      <td>{email}</td>
      <td>{new Date(registrationDate).toLocaleDateString()}</td>
      <td>{rating}</td>
      <td>
        <button>Удалить</button>
      </td>
    </tr>
  );
};

export default TableRow;
