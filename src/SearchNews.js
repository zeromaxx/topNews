import React, { useRef, useState } from "react";
import { useGlobalContext } from "./context";
import NoImage from "./no_image_available.png";
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
  const [postsPerPage, setpostsPerPage] = useState(10);

  const lastPostIndex = currentPage * postsPerPage;
  const firstPostsIndex = lastPostIndex - postsPerPage;
  const currentPosts = searchTerm.slice(firstPostsIndex, lastPostIndex);

  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }

  return (
    <div>
      <form className="searchForm" onSubmit={handleSubmit}>
        <h2 className="form-header">Αναζητήστε ειδήσεις ανά τον κόσμο</h2>
        <input
          required
          ref={refContainer}
          className="searchInput"
          type="text"
        ></input>

        <button type="submit">Αναζήτηση</button>
        {error && <h3 className="error">Δεν Βρέθηκαν αποτελέσματα.</h3>}
      </form>
      <Pagination
        totalPosts={searchTerm.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
      <section>
               {currentPosts.map((article) => {
          const { title, publishedAt, description, urlToImage, url } = article;
          return (
            <article key={publishedAt}>
              <div className="article-header">
                <HiClock className="clock" />
                {publishedAt.slice(0, 19).replace("T", " ")}
              </div>
              <img
                src={urlToImage === null ? NoImage : urlToImage}
                alt="article"
              />
              <div className="article-info">
                <h2>{title}</h2>
                <p>{description}</p>
              </div>
              <div className="article-footer">
                <a href={url} rel="noopener noreferrer" target="_blank">
                  Διαβάστε Περισσότερα
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
