import { useState, useEffect, Suspense } from "react";
import {
  useParams,
  Link,
  useLocation,
  Outlet,
  useNavigate,
} from "react-router-dom";
import { fetchMovieInfo } from "../../api";
import MovieInfo from "../../components/MovieInfo/MovieInfo";

export default function MovieDetails() {
  const { movieID } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const location = useLocation();
  const navigate = useNavigate();

  // Определяем путь к предыдущей странице
  const backLink = location.state?.from ?? "/movies";

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        const data = await fetchMovieInfo(movieID);
        setMovie(data.movie);
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
      <Link to={backLink}>Back to movies</Link>
      <MovieInfo movie={movie} />

      <nav>
        <ul>
          <li>
            <Link to="cast">Cast</Link>
          </li>
          <li>
            <Link to="reviews">Reviews</Link>
          </li>
        </ul>
      </nav>
      <Suspense fallback={<div>LOADING SUBPAGE!!!</div>}>
        <Outlet />
      </Suspense>
    </div>
  );
}
