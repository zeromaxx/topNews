import React from "react";
import { useGlobalContext } from "./context";
import NoImage from "./no_image_available.jpg";

export default function HealthNews() {
    const { healthNews, isLoading } = useGlobalContext();
    if (isLoading) {
      <div class="loader">Loading...</div>;
    }
  return (
    <section>
      {healthNews.map((article) => {
        const { title, publishedAt, description, urlToImage, url } =
          article;
        return (
          <article key={publishedAt}>
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
    </section>
  );
}
