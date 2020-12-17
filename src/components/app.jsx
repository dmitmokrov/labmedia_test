import React, { Fragment, useState, useEffect } from "react";
import Table from "./table";
import SearchForm from './search-form';
import Sort from './sort';
import { URL, SortType } from '../const';
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

        <Sort sortUsers={handleSortLinkClick}/>

        {
          isLoading
            ? <p>Идет загрузка...</p>
            : <Table
                users={sortedUsers}
                searchedUser={searchedUser}
                deleteRow={handleDeleteRowClick}
              />
        }
      </section>
    </Fragment>
  );
};

export default App;
