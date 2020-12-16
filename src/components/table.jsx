import React from 'react';
import TableRow from './table-row';
import { getFilteredUsers } from '../utils';

const Table = (props) => {
  const { users, searchedUser } = props;
  let filteredUsers = users;
  if (searchedUser) {
    filteredUsers = getFilteredUsers(users, searchedUser);
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
