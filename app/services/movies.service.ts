import { moviesApi } from "../config/http";

export function getPopularMovies() {
  return moviesApi.get("/movie/popular");
}

export function getMovieDetails(id: number) {
  return moviesApi.get(`/movie/${id}`);
}
