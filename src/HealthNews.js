import React from "react";
import { useGlobalContext } from "./context";
import NoImage from "./no_image_available.png";
import { HiClock } from "react-icons/hi";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function HealthNews() {
    const { healthNews, isLoading, removeHealthNewsArticle } =
      useGlobalContext();
    if (isLoading) {
      <div class="loader">Loading...</div>;
    }
  return (
    <div>
      <h1 className="header">
        Health
      </h1>
      <section>
        {healthNews.map((article,index) => {
          const { title, published_date, abstract, multimedia, url } = article;
          return (
            <article key={index}>
              <div className="article-header">
                <HiClock className="clock" />
                {published_date.slice(0, 19).replace("T", " ")}
              </div>
              <img
                src={multimedia === null ? NoImage : multimedia[1].url}
                alt="article"
              />
              <div className="article-info">
                <h2>{title}</h2>
                <p>{abstract}</p>
              </div>
              <div className="article-footer">
                <a href={url} rel="noopener noreferrer" target="_blank">
                  Διαβάστε Περισσότερα
                </a>
                <button
                  onClick={() => removeHealthNewsArticle(published_date)}
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
}
