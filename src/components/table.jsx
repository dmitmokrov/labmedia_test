import React from 'react';
import TableRow from './table-row';

const Table = (props) => {
  const { users, searchedUser } = props;
  let filteredUsers = users;
  if (searchedUser) {
    filteredUsers = users.filter((user) => user.name.toLowerCase().includes(searchedUser.toLowerCase()) || user.email.toLowerCase().includes(searchedUser.toLowerCase()));
  }
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
        {
          filteredUsers.map((user) => (
            <TableRow key={user.id} user={user} />
          ))
        }
      </tbody>
    </table>
  );
};

export default Table;
