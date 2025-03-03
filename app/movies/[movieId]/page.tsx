import { getMovieDetails } from "@/app/services/movies.service";
import style from "./MovieDetails.module.css";

export default async function MovieDetails({
  params,
}: {
  readonly params: { movieId: number };
}) {
  if (!params?.movieId) {
    return <p>Carregando....</p>;
  }

  const movie = await getMovieDetails(params.movieId);

  return (
    <section className={style.movieDetails}>
      <figure className={style.movieDetailsPoster}>
        {movie.data.backdrop_path && (
          <img
            src={`https://image.tmdb.org/t/p/w400/${movie.data.backdrop_path}`}
            alt={movie.data.title}
          />
        )}
      </figure>
      <div className={style.movieDetailsInfo}>
        <h1>{movie.data.title}</h1>
        <p>Data de estreia: {movie.data.release_date}</p>
        <p>{movie.data.overview}</p>
      </div>
    </section>
  );
}
