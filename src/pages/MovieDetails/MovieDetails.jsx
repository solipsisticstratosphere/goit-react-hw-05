import { useState, useEffect, Suspense, useRef } from "react";
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
  const backLink = useRef(location.state?.from ?? "/movies");
  console.log(backLink);
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
      <Link to={backLink.current}>Back to movies</Link>
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
