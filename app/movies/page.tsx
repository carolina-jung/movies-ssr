import { MovieItem } from "../components/movieItem/MovieItem";
import style from "./Movies.module.css";

export function Movies() {
  return (
    <section>
      <h1>Filmes populares</h1>
      <div className={style.moviesList}>
        {movies.map((movie) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
