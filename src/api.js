import axios from "axios";

const API_TOKEN =
  "eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI4MmM3ZWQwNjk5NDgwNDFkZWIxY2U1NjNjOTY2N2M0YSIsIm5iZiI6MTcyNTM3NjE1NC44MDYzNjMsInN1YiI6IjY2ZDcyNGIwNGJhYzAzMTgzMWJkMmMwZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.eUhMf9HgNid2qkXAmto8D_qkxSbIqyepyUi-xZ5kr0Y";

axios.defaults.baseURL = "https://api.themoviedb.org/3";
axios.defaults.headers.common["Authorization"] = `Bearer ${API_TOKEN}`;
axios.defaults.headers.common["accept"] = "application/json";

export const fetchTrendingMovies = async () => {
  const response = await axios.get("/trending/movie/day", {
    params: {
      language: "en-US",
    },
  });

  return {
    movies: response.data.results,
  };
};
export const fetchMovieInfo = async (id) => {
  const res = await axios.get(`/movie/${id}`, {
    params: { language: "en-US" },
  });
  return {
    movie: res.data,
  };
};
