import React, { useRef, useState } from "react";
import { useGlobalContext } from "./context";
import { Pagination } from "./Pagination";
import { HiClock } from "react-icons/hi";

const SearchNews = () => {
  const { setQuery, searchTerm, isLoading, error } = useGlobalContext();
  const refContainer = useRef(null);

  const handleSubmit = (e) => {
    e.preventDefault();
    setQuery(refContainer.current.value);
  };
  const [currentPage, setCurrentPage] = useState(2);
  const [postsPerPage] = useState(4);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchTerm.slice(firstPostsIndex, lastPostIndex);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <h2 className="form-header">Search for news around the world</h2>
        <input
          required
          ref={refContainer}
          className="searchInput"
          type="text"
        ></input>

        <button type="submit">Search</button>
        {error && <h3 className="error">No results found.</h3>}
      </form>
      <Pagination
        totalPosts={searchTerm.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <section>
        {currentPosts.map((article, index) => {
          const { headline, web_url, pub_date, lead_paragraph} =
            article;
          return (
            <article style={{ background: "white",height:'50%' }} key={index}>
              <div className="article-header">
                <HiClock className="clock" />
                {pub_date.slice(0, 19).replace("T", " ")}
              </div>
              <div className="article-info">
                <h2>{headline.main}</h2>
                <p>{lead_paragraph}</p>
              </div>
              <div style={{  }} className="article-footer">
                <a href={web_url} rel="noopener noreferrer" target="_blank">
                  Read More
                </a>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};
export default SearchNews;
