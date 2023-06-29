import TicketCard from "../TicketCard/TicketCard";
import {translateGenre} from "@/app/shared/translateGenre";
import { useAppSelector } from '@/store/hooks';
import { selectFilters } from '@/store/selectors';
import moviesFilter from '@/app/shared/moviesFilter';
import { Movie } from '@/app/types';
import { Genre } from '@/store/features/filterSlice';
import ErrorWrapper from '../ErrorWrapper/ErrorWrapper';
import { NOT_FOUND_MOVIES_AFTER_FILTERING } from '@/app/constants';

export default function TicketList ({ movies }: { movies: Movie[] }) {
  const filters = useAppSelector(selectFilters);

  return (
      <ul className="movies">
          {moviesFilter(movies, filters).length === 0 && 
          <ErrorWrapper msg={NOT_FOUND_MOVIES_AFTER_FILTERING} />}
          {moviesFilter(movies, filters).map(movie => <TicketCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              genre={translateGenre(movie.genre as Genre)}
          />)}
      </ul>
  )
}
