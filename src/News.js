import React from "react";
import { useGlobalContext } from "./context";
const noAvailableImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTa5wU-FNySDi8vRBfF6NgDGLAHfbxpxYCnSw&usqp=CAU";
const News = () => {
  const { news, isLoading } = useGlobalContext();
  {
    console.log(news);
  }
  return (
    <section>
      <h1 className="header">Top News in Greece</h1>
      {news.map((article) => {
        const { title, publishedAt, description, urlToImage, url, content } =
          article;
        return (
          <article key={publishedAt}>
            <img
              src={urlToImage === null ? noAvailableImage : urlToImage}
              alt="article"
            ></img>
            <div className="article-info">
              <h2>{title}</h2>
              <p className="date-publised">{publishedAt.slice(0, 19).replace("T", " ")}</p>
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
};

export default News;
