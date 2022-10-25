import React from "react";
import { useGlobalContext } from "./context";
const noAvailableImage =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

export default function HealthNews() {
    const { healthNews, isLoading } = useGlobalContext();
  return (
    <section>
      {healthNews.map((article) => {
        const { title, publishedAt, description, urlToImage, url } =
          article;
        return (
          <article key={publishedAt}>
            <img
              src={urlToImage === null ? noAvailableImage : urlToImage}
              alt="article"
            ></img>
            <div className="article-info">
              <h2>{title}</h2>
              <p className="date-publised">
                {publishedAt.slice(0, 19).replace("T", "   ")}
              </p>
              <p>{description}</p>
              <a target="_blank" href={url}>
                Διαβάστε Περισσοτερα
              </a>
            </div>
          </article>
        );
      })}
    </section>
  );
}
