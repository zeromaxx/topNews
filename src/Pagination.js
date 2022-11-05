import React from "react";

export const Pagination = ({ totalPosts, postsPerPage, setCurrentPage }) => {
  let pages = [];
  const toggleClass = (e) => {
    const pages = document.querySelectorAll(".pagination-btn");
    pages.forEach((page) => {
      page.classList.remove("activePage");
    });
    e.target.classList.toggle("activePage");
  };
  for (let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pages.push(i);
  }
  return (
    <div className="pagination-container">
      {pages.map((page, index) => {
        return (
          <button
            className="pagination-btn"
            key={index}
            onClick={(e) => {
              setCurrentPage(page);
              toggleClass(e);
            }}
          >
            {page}
          </button>
        );
      })}
    </div>
  );
};
