import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieInfo } from "../api";
import MovieInfo from "../components/MovieInfo/MovieInfo";

export default function MovieDetails() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true); // Добавляем состояние для загрузки
  const [error, setError] = useState(false);
  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieInfo(movieID);
        setMovie(data.movie);
      } catch (error) {
        console.error("Error fetching movie details:", error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieID]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!movie) {
    return <p>Movie not found</p>;
  }

  return (
    <div>
      <MovieInfo movie={movie} />
    </div>
  );
}
