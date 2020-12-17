import React from 'react';

const SearchForm = (props) => {
  const { searchedUser, setSearchedUser, isClearButtonVisible, clearFilters } = props;
  return (
    <form className="search-form">
      <input
        className="search-form__input"
        placeholder="Поиск по имени или e-mail"
        value={searchedUser}
        onChange={(evt) => {
        setSearchedUser(evt.target.value);
        }}
      />
      {
        isClearButtonVisible &&
        <button
          className="search-form__button"
          type="button"
          onClick={clearFilters}
        >
          Очистить фильтр
        </button>
      }
    </form>
  );
};

export default SearchForm;
