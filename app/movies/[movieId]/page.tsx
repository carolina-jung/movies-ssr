import { useParams } from "react-router";
import { useMovieDetails } from "../../hooks/useMovies";
import style from "./MovieDetails.module.css";

export default function MovieDetails() {
  const { id } = useParams();
  const movie = useMovieDetails(id ? Number(id) : 0);

  if (!movie) {
    return <p>Carregando...</p>;
  }

  return (
    <section className={style.movieDetails}>
      <figure className={style.movieDetailsPoster}>
        {movie.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w400/${movie.backdrop_path}`}
            alt={movie.title}
          />
        )}
      </figure>
      <div className={style.movieDetailsInfo}>
        <h1>{movie.title}</h1>
        <p>Data de estreia: {movie.release_date}</p>
        <p>{movie.overview}</p>
      </div>
    </section>
  );
}
