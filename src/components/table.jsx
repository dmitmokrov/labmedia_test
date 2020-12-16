import React from 'react';
import TableRow from './table-row';

const Table = (props) => {
  const { users } = props;
  return (
    <table>
      <thead>
        <tr>
          <th>Имя пользователя</th>
          <th>E-mail</th>
          <th>Дата регистрации</th>
          <th>Рейтинг</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <TableRow key={user.id} user={user} />
        ))}
      </tbody>
    </table>
  );
};

export default Table;
