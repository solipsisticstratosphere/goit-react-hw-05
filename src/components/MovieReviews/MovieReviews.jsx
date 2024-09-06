import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { fetchMovieReviews } from "../../api";

export default function MovieReviews() {
  const { movieID } = useParams();
  const [reviews, setReviews] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  useEffect(() => {
    async function fetchReviews() {
      try {
        setLoading(true);
        setError(false);
        const data = await fetchMovieReviews(movieID);
        setReviews(data.reviews);
      } catch (error) {
        console.error(error);
        setError(true);
      } finally {
        setLoading(false);
      }
    }
    fetchReviews();
  }, [movieID]);

  if (loading) {
    return <p>Loading review information...</p>;
  }

  if (error) {
    return <p>Error loading review information.</p>;
  }

  if (!reviews || reviews.length === 0) {
    return <p>No reviews available.</p>;
  }

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {reviews.map((review) => (
          <li key={review.id}>
            <p>
              <strong>{review.author}</strong>: {review.content}
            </p>
          </li>
        ))}
      </ul>
    </div>
  );
}
