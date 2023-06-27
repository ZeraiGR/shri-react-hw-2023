import { FilterState, Genre } from '@/store/features/filterSlice';
import { Movie } from '../types';

export default function moviesFilter (
  movies: Movie[] | undefined, 
  filters: FilterState
) {
  if (!movies) return [];
  
  return movies.filter(({title, genre}) => {
      let isNameMatched = filters.name === '' ? true : 
      title.toLowerCase().includes(filters.name.toLowerCase());
      
      let isGenreMatched = filters.genge === Genre.DEFAULT ? true :
      genre === filters.genge;

      return isNameMatched && isGenreMatched;
    });
}