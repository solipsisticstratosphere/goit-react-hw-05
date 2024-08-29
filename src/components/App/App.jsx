import { useState, useEffect } from "react";
import ArticleList from "../ArticleList/ArticleList";
import "./App.css";
import SearchForm from "../SearchForm/SearchForm";
import { fetchArticles } from "../../api";
import LoadMore from "../LoadMore/LoadMore";
function App() {
  const [topic, setTopic] = useState("");
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setArticles([]);
  };
  useEffect(() => {
    if (topic === "") {
      return;
    }
    const handleArticles = async () => {
      try {
        const res = await fetchArticles(topic, page);
        setArticles((prevState) => [...prevState, ...res.articles]);
      } catch (error) {}
    };
    handleArticles();
  }, [topic, page]);
  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <>
      <SearchForm onSearch={handleSearch} />
      <ArticleList articles={articles} />
      <LoadMore loadMore={handleLoadMore} />
    </>
  );
}

export default App;
