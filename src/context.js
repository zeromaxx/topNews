import React, { useState, useContext, useEffect } from "react";

const apiEndPoint =
  "https://newsapi.org/v2/top-headlines?country=gr&apiKey=b4301c7beeeb482d9b46677b72436cd5";

const healthNewsApiEndPoint =
  "https://newsapi.org/v2/top-headlines?category=health&country=gr&apiKey=b4301c7beeeb482d9b46677b72436cd5";

const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [isLoading, setLoading] = useState(true);
  const [error, setError] = useState({ show: false, msg: "" });
  const [news, setNews] = useState([]);
  const [healthNews, setHealthNews] = useState([]);

  const fetchNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setNews( data.articles );
    } catch {}
  };

  const getHealthNews = async (url) => {
    setLoading(true);
    try {
      const response = await fetch(url);
      const data = await response.json();
      setHealthNews(data.articles);
    } catch {}
  };
  useEffect(() => {
    fetchNews(apiEndPoint);
  },[]);

  useEffect(() => {
   getHealthNews(healthNewsApiEndPoint);
  }, []);

  return (
    <AppContext.Provider value={{ isLoading, news, healthNews }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export { AppContext, AppProvider };
