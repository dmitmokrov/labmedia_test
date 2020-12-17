import React from 'react';
import { SortType } from '../const';

const Sort = (props) => {
  const { sortUsers } = props;

  return (
    <p>
      Сортировка:
      <a
        href="#!"
        onClick={(evt) => {
          evt.preventDefault();
          sortUsers(SortType.REGISTRATION_DATE);
        }}
      >
        Дата регистрации
      </a>
      <a
        href="#!"
        onClick={(evt) => {
          evt.preventDefault();
          sortUsers(SortType.RATING);
        }}
      >
        Рейтинг
      </a>
    </p>
  );
};

export default Sort;
