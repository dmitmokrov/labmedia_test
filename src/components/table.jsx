import React from 'react';
import TableRow from './table-row';

const Table = (props) => {
  const { users, showModal, deleteRow, deleteUser } = props;

  return (
    <div className="table-container">
      <table className="users-table">
        <thead>
          <tr className="users-table__row">
            <th>Имя пользователя</th>
            <th>E-mail</th>
            <th>Дата регистрации</th>
            <th>Рейтинг</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((user) => (
              <TableRow
                key={user.id}
                user={user}
                showModal={showModal}
                deleteRow={deleteRow}
                deleteUser={deleteUser}/>
            ))
          }
        </tbody>
      </table>
    </div>
  );
};

export default Table;
