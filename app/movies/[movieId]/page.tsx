import {
  getMovieDetails,
  getPopularMovies,
} from "@/app/services/movies.service";
import style from "./MovieDetails.module.css";
import { Movie } from "@/app/interfaces/movie.interface";

interface Params {
  readonly params: {
    movieId: number;
  };
}

export async function getStaticPaths() {
  const { data } = await getPopularMovies();

  const paths = data.results.map((movie: Movie) => ({
    params: { movieId: `${movie.id}` },
  }));

  return {
    paths,
    fallback: true,
  };
}

export default async function MovieDetails({ params }: Params) {
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
