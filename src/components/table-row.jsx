import React from "react";

const TableRow = (props) => {
  const { user, showModal, deleteUser } = props;
  const { id, name, email, registrationDate, rating } = user;
  return (
    <tr className="users-table__row">
      <td>{name}</td>
      <td>{email}</td>
      <td>{new Date(registrationDate).toLocaleDateString()}</td>
      <td>{rating}</td>
      <td>
        <button
          className="users-table__button"
          type="button"
          onClick={() => {
            showModal(true);
            deleteUser(id);
          }}
        >
          <span className="visually-hidden">Удалить</span>
        </button>
      </td>
    </tr>
  );
};

export default TableRow;
