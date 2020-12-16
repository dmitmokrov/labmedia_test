import React, { Fragment, useState, useEffect } from "react";
import Table from "./table";

const SortType = {
  DEFAULT: "DEFAULT",
  REGISTRATION_DATE: "REGISTRATION_DATE",
  RATING: "RATING"
};

const updateUserToClient = (user) => {
  const updatedUser = Object.assign(
    {},
    user,
    {
      name: user['username'],
      registrationDate: user['registration_date']
    }
  );

  return updatedUser;
};

const sortByRating = (a, b) => b.rating - a.rating;
const sortByRegistrationDate = (a, b) =>
  new Date(b.registrationDate).getTime() -
  new Date(a.registrationDate).getTime();
const sortFunction = (sortType) => {
  switch (sortType) {
    case SortType.REGISTRATION_DATE:
      return sortByRegistrationDate;
    case SortType.RATING:
      return sortByRating;
    default:
      return;
  }
};

const App = () => {
  const [sortType, setSortType] = useState(SortType.DEFAULT);
  const [isLoading, setIsLoading] = useState(true);
  const [users, setUsers] = useState([]);
  const sortedUsers = users.slice().sort(sortFunction(sortType));

  useEffect(() => {
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
          <input />
          <button type="button">Очистить фильтр</button>
        </form>
        <p>
          Сортировка:
          <a
            href="#!"
            onClick={(evt) => {
              evt.preventDefault();
              setSortType(SortType.REGISTRATION_DATE);
            }}
          >
            Дата регистрации
          </a>
          <a
            href="#!"
            onClick={(evt) => {
              evt.preventDefault();
              setSortType(SortType.RATING);
            }}
          >
            Рейтинг
          </a>
        </p>
        {
          isLoading
            ? <p>Идет загрузка...</p>
            : <Table users={sortedUsers}/>
        }
      </section>
    </Fragment>
  );
};

export default App;
