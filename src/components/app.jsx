import React, { Fragment, useState, useEffect } from "react";
import Table from "./table";
import { SortType } from '../const';
import { updateUserToClient, sortFunction } from '../utils';

const App = () => {
  const [sortType, setSortType] = useState(SortType.DEFAULT);
  const [isSortUp, setIsSortUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState('');

  const isClearButtonVisible = sortType !== SortType.DEFAULT || searchedUser;
  const sortedUsersByType = users.slice().sort(sortFunction(sortType));
  const sortedUsers = isSortUp ? sortedUsersByType : sortedUsersByType.reverse();

  const onClearButtonClick = () => {
    setSortType(SortType.DEFAULT);
    setIsSortUp(false);
    setSearchedUser('');
  }

  const onSortLinkClick = (sortLinkType) => {
    setSortType(sortLinkType);
      if (sortType === sortLinkType) {
        setIsSortUp(!isSortUp);
      } else {
        setIsSortUp(true);
      }
  };

  const handleDeleteRowClick = (userId) => {
    const index = users.findIndex((user) => user.id === userId);
    setUsers([...users.slice(0, index), ...users.slice(index + 1)]);
  };

  useEffect(() => {
    setIsLoading(true);
    fetch('https://5ebbb8e5f2cfeb001697d05c.mockapi.io/users')
      .then((res) => res.json())
      .then((users) => users.map((user) => updateUserToClient(user)))
      .then((users) => setUsers(users))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Fragment>
      <h1>Список пользователей</h1>
      <section>
        <form>
          <input value={searchedUser} onChange={(evt) => {
            setSearchedUser(evt.target.value);
          }} />
          {
            isClearButtonVisible &&
            <button type="button" onClick={onClearButtonClick}>
              Очистить фильтр
            </button>
          }
        </form>
        <p>
          Сортировка:
          <a
            href="#!"
            onClick={(evt) => {
              evt.preventDefault();
              onSortLinkClick(SortType.REGISTRATION_DATE);
            }}
          >
            Дата регистрации
          </a>
          <a
            href="#!"
            onClick={(evt) => {
              evt.preventDefault();
              onSortLinkClick(SortType.RATING);
            }}
          >
            Рейтинг
          </a>
        </p>
        {
          isLoading
            ? <p>Идет загрузка...</p>
            : <Table users={sortedUsers} searchedUser={searchedUser} deleteRow={handleDeleteRowClick}/>
        }
      </section>
    </Fragment>
  );
};

export default App;
