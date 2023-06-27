import { Movie } from '../types';

export default function getGenres (movies: Movie[] | undefined) {
  if (!movies) return [];
  return ["notselected"].concat(Array.from(new Set(movies.map(movie => movie.genre))));
}