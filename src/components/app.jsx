import React, { Fragment, useState, useEffect } from "react";
import Table from "./table";
import SearchForm from './search-form';
import Sort from './sort';
import Pagination from './pagination';
import { URL, USERS_PER_PAGE, SortType } from '../const';
import { updateUserToClient, getUsers } from '../utils';

const App = () => {
  const [sortType, setSortType] = useState(SortType.DEFAULT);
  const [isSortUp, setIsSortUp] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [users, setUsers] = useState([]);
  const [searchedUser, setSearchedUser] = useState('');
  const [page, setPage] = useState(1);

  const isClearButtonVisible = sortType !== SortType.DEFAULT || searchedUser;
  const filteredUsers = getUsers(users, sortType, isSortUp, searchedUser);
  const usersOnPage = filteredUsers.slice((page - 1) * USERS_PER_PAGE, page * USERS_PER_PAGE);
  const pages = Math.ceil(filteredUsers.length / USERS_PER_PAGE);


  const handleClearButtonClick = () => {
    setSortType(SortType.DEFAULT);
    setIsSortUp(false);
    setSearchedUser('');
  }

  const handleSortLinkClick = (sortLinkType) => {
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
    fetch(URL)
      .then((res) => res.json())
      .then((users) => users.map((user) => updateUserToClient(user)))
      .then((users) => setUsers(users))
      .then(() => setIsLoading(false));
  }, []);

  return (
    <Fragment>
      <h1>Список пользователей</h1>
      <section>
        <SearchForm
          isClearButtonVisible={isClearButtonVisible}
          searchedUser={searchedUser}
          setSearchedUser={setSearchedUser}
          clearFilters={handleClearButtonClick}
        />

        <Sort
          sortUsers={handleSortLinkClick}
          sortType={sortType}
        />

        {
          isLoading
            ? <p>Идет загрузка...</p>
            : <Table
                users={usersOnPage}
                deleteRow={handleDeleteRowClick}
              />
        }

        <Pagination
          page={page}
          pages={pages}
          goToPage={setPage}
        />
      </section>
    </Fragment>
  );
};

export default App;
