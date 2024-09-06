import { useSearchParams, Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { searchMovie } from "../../api";
import SearchForm from "../../components/SearchForm/SearchForm";
import MovieList from "../../components/MovieList/MovieList";

export default function Movies() {
  const [params] = useSearchParams();
  const film = params.get("movie") ?? "";
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  useEffect(() => {
    if (film === "") {
      setMovies([]);
      return;
    }

    const handleMovies = async () => {
      setLoading(true);
      setError(false);

      try {
        const data = await searchMovie(film);
        setMovies(data.films);
      } catch (error) {
        console.error("Failed to fetch movies", error);
        setError("Failed to fetch movies. Please try again later."); // Устанавливаем сообщение об ошибке
        setMovies([]);
      } finally {
        setLoading(false);
      }
    };

    handleMovies();
  }, [film]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (error) {
    return <p>{error}</p>;
  }

  return (
    <div>
      <SearchForm />
      <MovieList movies={movies} />
    </div>
  );
}
