export default function MovieInfo({ movie }) {
  return (
    <div>
      <h2>{movie.title}</h2>
      <p>
        <strong>Tagline:</strong> {movie.tagline}
      </p>
      <p>
        <strong>Overview:</strong> {movie.overview}
      </p>
      <p>
        <strong>Release Date:</strong> {movie.release_date}
      </p>
      <p>
        <strong>Genres:</strong>{" "}
        {movie.genres.map((genre) => genre.name).join(", ")}
      </p>
      <p>
        <strong>Runtime:</strong> {movie.runtime} minutes
      </p>
      <p>
        <strong>Vote Average:</strong> {movie.vote_average} / 10
      </p>
      <p>
        <strong>Vote Count:</strong> {movie.vote_count}
      </p>
      <p>
        <strong>IMDB ID:</strong>{" "}
        <a
          href={`https://www.imdb.com/title/${movie.imdb_id}/`}
          target="_blank"
          rel="noopener noreferrer"
        >
          {movie.imdb_id}
        </a>
      </p>
      <p>
        <strong>Homepage:</strong>{" "}
        <a href={movie.homepage} target="_blank" rel="noopener noreferrer">
          {movie.homepage}
        </a>
      </p>
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        alt={movie.title}
      />
      <img
        src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`}
        alt={`${movie.title} Backdrop`}
      />
    </div>
  );
}
