import React from 'react';

const SearchForm = (props) => {
  const { searchedUser, setSearchedUser, isClearButtonVisible, clearFilters } = props;
  return (
    <form>
      <input value={searchedUser} onChange={(evt) => {
        setSearchedUser(evt.target.value);
      }} />
      {
        isClearButtonVisible &&
        <button type="button" onClick={clearFilters}>
          Очистить фильтр
        </button>
      }
    </form>
  );
};

export default SearchForm;
