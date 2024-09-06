import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchCastInfo } from "../../api";

export default function MovieCast() {
  const { movieID } = useParams();
  const [cast, setCast] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchMovie() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchCastInfo(movieID);
        setCast(data.cast);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchMovie();
  }, [movieID]);

  if (loading) {
    return <p>Loading cast information...</p>;
  }

  if (error) {
    return <p>Error loading cast information.</p>;
  }

  if (!cast || cast.length === 0) {
    return <p>No cast information available.</p>;
  }

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {cast.map((actor) => (
          <li key={actor.cast_id}>
            <strong>{actor.name}</strong> as {actor.character}
            <img
              src={`https://image.tmdb.org/t/p/w200${actor.profile_path}`}
              alt={actor.name}
              style={{
                width: "50px",
                height: "75px",
                objectFit: "cover",
                marginLeft: "10px",
              }}
            />
          </li>
        ))}
      </ul>
    </div>
  );
}
