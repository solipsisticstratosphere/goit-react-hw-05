import { Link } from "react-router-dom";

export default function MovieList({ movies }) {
  return (
    <ul>
      {movies.map((item) => (
        <li key={item.id}>
          <Link to={`/movies/${item.id}`}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}
