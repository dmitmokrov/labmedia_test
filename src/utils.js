import { SortType } from './const';

export const updateUserToClient = (user) => {
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

export  const sortFunction = (sortType) => {
  switch (sortType) {
    case SortType.REGISTRATION_DATE:
      return sortByRegistrationDate;

    case SortType.RATING:
      return sortByRating;

    default:
      return;
  }
};

const getFilteredUsers = (arr, str) => arr.filter((elem) => elem.name.toLowerCase().includes(str.toLowerCase()) || elem.email.toLowerCase().includes(str.toLowerCase()));

export const getUsers = (users, sortType, sortDirectionIsUp, searchedUser) => {
  const sortedUsersByType = users.slice().sort(sortFunction(sortType));
  const sortedUsers = sortDirectionIsUp ? sortedUsersByType : sortedUsersByType.reverse();

  if (searchedUser) {
    return getFilteredUsers(sortedUsers, searchedUser);
  }
  return sortedUsers;
};
