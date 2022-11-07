import React, { useState, useContext, useEffect } from "react";

const apiEndPoint =
  "https://api.nytimes.com/svc/topstories/v2/technology.json?api-key=pzfOvxAPHrVmrRhYldYWGEK6FkHzV0LX";

const healthNewsApiEndPoint =
  "https://api.nytimes.com/svc/topstories/v2/health.json?api-key=pzfOvxAPHrVmrRhYldYWGEK6FkHzV0LX";

const techNewsApiEndPoint =
  "https://api.nytimes.com/svc/topstories/v2/travel.json?api-key=pzfOvxAPHrVmrRhYldYWGEK6FkHzV0LX";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  const [query, setQuery] = useState("React");
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
    const newArticles = news.filter((article) => article.published_date !== id);
    setNews(newArticles);
  };
  const removeHealthNewsArticle = (id) => {
    const newArticles = healthNews.filter(
      (article) => article.published_date !== id
    );
    setHealthNews(newArticles);
  };
  const removeTechNewsArticle = (id) => {
    const newArticles = techNews.filter(
      (article) => article.published_date !== id
    );
    setTechNews(newArticles);
  };

  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      if (data) {
        setNews(data.results);
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
        setHealthNews(data.results);
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
        setTechNews(data.results);
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
        setSearchTerm(data.response.docs);
        setError(false);
      } else {
        setSearchTerm([]);
      }
      if (data.response.docs === 0) {
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
      `https://api.nytimes.com/svc/search/v2/articlesearch.json?q=${query}&api-key=pzfOvxAPHrVmrRhYldYWGEK6FkHzV0LX`
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
