import React, { useRef, useState } from "react";
import { useGlobalContext } from "./context";
import NoImage from "./no_image_available.jpg";
import { Pagination } from "./Pagination";

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
    <section>
      <form className="searchForm" onSubmit={handleSubmit}>
        <h3 className="form-header">Αναζητήστε Ειδήσεις ανα τον Κόσμο</h3>
        <input ref={refContainer} className="searchInput" type="text"></input>

        <button type="submit">Αναζήτηση</button>
        {error && <h3 className="error">Δεν Βρέθηκαν αποτελέσματα.</h3>}
      </form>

      {currentPosts.map((article, index) => {
        const { title, publishedAt, description, urlToImage, url } = article;
        return (
          <article key={index}>
            <img
              src={urlToImage === null ? NoImage : urlToImage}
              alt="article"
            ></img>
            <div className="article-info">
              <h2>{title}</h2>
              <p className="date-publised">
                {publishedAt.slice(0, 19).replace("T", "   ")}
              </p>
              <p>{description}</p>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                Διαβάστε Περισσοτερα
              </a>
            </div>
          </article>
        );
      })}
      <Pagination
        totalPosts={searchTerm.length}
        postsPerPage={postsPerPage}
        setCurrentPage={setCurrentPage}
      />
    </section>
  );
};
export default SearchNews;
