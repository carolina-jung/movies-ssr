import { Movie } from "@/app/interfaces/movie.interface";
import style from "./MovieItem.module.css";
import Link from "next/link";

interface MovieProps {
  readonly movie: Movie;
}

export function MovieItem({ movie }: MovieProps) {
  return (
    <div className={style.movieItem}>
      {movie.poster_path && (
        <img
          src={`https://image.tmdb.org/t/p/w200/${movie.poster_path}`}
          alt={movie.title}
        />
      )}
      <h3>{movie.title}</h3>
      <p>
        <Link className={style.btnDetails} href={`/movies/${movie.id}`}>
          Ver detalhes
        </Link>
      </p>
    </div>
  );
}
