import React from 'react';

const Pagination = (props) => {
  const { page, pages, goToPage } = props;
  const pagesList = [];
  for (let i = 1; i <= pages; i++) {
    pagesList.push(i);
  }
  return (
    <ul className="pagination">
      {
        pagesList.map((num) =>
          <li key={num}>
            <a
              className={`pagination__link ${page === num ? `pagination__link--active` : ``}`}
              href="#0"
              onClick={() => goToPage(num)}
            >
              {num}
            </a>
          </li>)
      }
    </ul>
  );
};

export default Pagination;
