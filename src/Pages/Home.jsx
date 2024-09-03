import { fetchTrendingMovies } from "../api";
import MovieList from "../components/MovieList/MovieList";
import { useState, useEffect } from "react";
export default function Home() {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    const handleMovies = async () => {
      try {
        const data = await fetchTrendingMovies();
        setMovies([...data.movies]);
      } catch (error) {
        console.error("Failed to fetch movies", error);
      }
    };
    handleMovies();
  }, []);
  return (
    <div>
      <h2>Trending today</h2>
      <MovieList movies={movies} />
    </div>
  );
}
