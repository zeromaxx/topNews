import React from "react";
import { useGlobalContext } from "./context";
import NoImage from "./no_image_available.jpg";
import { HiClock } from "react-icons/hi";

export default function TechNews() {
  const { techNews, isLoading, removeTechNewsArticle } = useGlobalContext();
  if (isLoading) {
    <div class="loader">Loading...</div>;
  }
  return (
    <section>
      <h1 className="header">Τεχνολογία</h1>
      {techNews.map((article) => {
        const { title, publishedAt, description, urlToImage, url } = article;
        return (
          <article key={publishedAt}>
            <img
              src={urlToImage === null ? NoImage : urlToImage}
              alt="article"
            ></img>
            <div className="article-info">
              <h2>{title}</h2>
              <p className="date-publised">
                <HiClock className="clock" />
                {publishedAt.slice(0, 19).replace("T", "   ")}
              </p>
              <p>{description}</p>
              <a rel="noopener noreferrer" target="_blank" href={url}>
                Διαβάστε Περισσοτερα
              </a>
            </div>
            <button
              className="notInterestedBtn"
              onClick={() => removeTechNewsArticle(publishedAt)}
            >
              Δεν με ενδιαφέρει
            </button>
          </article>
        );
      })}
    </section>
  );
}
