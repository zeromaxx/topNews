import React from "react";
import { useGlobalContext } from "./context";
import NoImage from "./no_image_available.jpg";
import { HiClock } from "react-icons/hi";
import { RiDeleteBin2Fill } from "react-icons/ri";

const News = () => {
  const { news, isLoading, removeArticle } = useGlobalContext();
  if (isLoading) {
    return <div className="loader">Loading...</div>;
  }
  return (
    <div>
      <h1 className="header">
        Κορυφαίες Ειδήσεις <br />
        στην Ελλάδα
      </h1>
      <section>
        {news.map((article) => {
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
                <button
                  onClick={() => removeArticle(publishedAt)}
                  className="notInterestedBtn"
                >
                  <RiDeleteBin2Fill />
                </button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default News;
