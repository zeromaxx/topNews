import React from "react";
import { useGlobalContext } from "./context";
import NoImage from "./no_image_available.png";
import { HiClock } from "react-icons/hi";
import { RiDeleteBin2Fill } from "react-icons/ri";

export default function TechNews() {
  const { techNews, isLoading, removeTechNewsArticle } = useGlobalContext();
  if (isLoading) {
    <div class="loader">Loading...</div>;
  }
  return (
    <div>
      <h1 className="header">Τεχνολογία</h1>
      <section>
        {techNews.map((article,index) => {
          const { title, publishedAt, description, urlToImage, url } = article;
          return (
            <article key={index}>
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
                  onClick={() => removeTechNewsArticle(publishedAt)}
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
