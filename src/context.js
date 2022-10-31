import React, { useState, useContext, useEffect } from "react";

const apiEndPoint =
  "https://newsapi.org/v2/top-headlines?country=gr&apiKey=a6e5cdfaeba2457b96eb3a918e3395c8";

const healthNewsApiEndPoint =
  "https://newsapi.org/v2/top-headlines?category=health&country=gr&apiKey=a6e5cdfaeba2457b96eb3a918e3395c8";

const techNewsApiEndPoint =
  "https://newsapi.org/v2/top-headlines?category=technology&country=gr&apiKey=a6e5cdfaeba2457b96eb3a918e3395c8";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("bitcoin");
  const [news, setNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);
  const [techNews, setTechNews] = useState([]);
  const [searchTerm, setSearchTerm] = useState([]);
  const [isNavToggled, setNavToggled] = useState(false);

  const toggleNav = () => {
    const nav = document.querySelector("nav");
    setNavToggled(!isNavToggled);

    nav.classList.toggle("show-nav");
  };

  const removeArticle = (id) => {
    const newArticles = news.filter((article) => article.publishedAt !== id);
    setNews(newArticles);
  };
  const removeHealthNewsArticle = (id) => {
    const newArticles = healthNews.filter(
      (article) => article.publishedAt !== id
    );
    setHealthNews(newArticles);
  };
  const removeTechNewsArticle = (id) => {
    const newArticles = techNews.filter(
      (article) => article.publishedAt !== id
    );
    setTechNews(newArticles);
  };

  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setNews(data.articles);
      } else {
        setNews([]);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const getHealthNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setHealthNews(data.articles);
      } else {
        setHealthNews([]);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const getTechNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setTechNews(data.articles);
      } else {
        setTechNews([]);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  const searchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setSearchTerm(data.articles);
        setError(false);
      } else {
        setSearchTerm([]);
      }
      if (data.totalResults === 0) {
        setLoading(false);
        setError(true);
      }
      setLoading(false);
    } catch {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchNews(apiEndPoint);
  }, []);

  useEffect(() => {
    getHealthNews(healthNewsApiEndPoint);
  }, []);

  useEffect(() => {
    getTechNews(techNewsApiEndPoint);
  }, []);

  useEffect(() => {
    searchNews(
      `https://newsapi.org/v2/everything?q=${query}&language=en&pageSize=100&apiKey=a6e5cdfaeba2457b96eb3a918e3395c8`
    );
  }, [query]);

  return (
    <AppContext.Provider
      value={{
        isLoading,
        news,
        healthNews,
        removeArticle,
        removeHealthNewsArticle,
        setQuery,
        searchTerm,
        query,
        error,
        isNavToggled,
        toggleNav,
        techNews,
        removeTechNewsArticle,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
