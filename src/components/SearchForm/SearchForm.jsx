import { useSearchParams } from "react-router-dom";

export default function SearchForm() {
  const [params, setParams] = useSearchParams();
  const handleSubmit = (event) => {
    event.preventDefault();
    params.set("movie", event.target.elements.movie.value);
    setParams(params);
    event.target.reset();
  };
  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="movie" />
      <button type="submit">Search</button>
    </form>
  );
}
