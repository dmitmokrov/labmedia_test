import React from 'react';
import { SortType } from '../const';

const Sort = (props) => {
  const { sortUsers, sortType } = props;

  return (
    <p className="sort">
      Сортировка:
      <a
        className={`sort__link ${sortType === SortType.REGISTRATION_DATE ? `sort__link--active` : ``}`}
        href="#0"
        onClick={(evt) => {
          evt.preventDefault();
          sortUsers(SortType.REGISTRATION_DATE);
        }}
      >
        Дата регистрации
      </a>
      <a
        className={`sort__link ${sortType === SortType.RATING ? `sort__link--active` : ``}`}
        href="#0"
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
