import { MovieItem } from "../components/movieItem/MovieItem";
import { getPopularMovies } from "../services/movies.service";
import style from "./Movies.module.css";

export default async function Movies() {
  const { data } = await getPopularMovies();

  return (
    <section>
      <h1>Filmes populares</h1>
      <div className={style.moviesList}>
        {data.results.map((movie: any) => (
          <MovieItem key={movie.id} movie={movie} />
        ))}
      </div>
    </section>
  );
}
