import TicketCard from "../TicketCard/TicketCard";
import {translateGenre} from "@/app/shared/translateGenre";
import { useAppSelector } from '@/store/hooks';
import { selectFilters } from '@/store/selectors';
import moviesFilter from '@/app/shared/moviesFilter';
import { Movie } from '@/app/types';
import { Genre } from '@/store/features/filterSlice';

export default function TicketList ({ movies }: { movies: Movie[] }) {
  const filters = useAppSelector(selectFilters);

  return (
      <ul className="movies">
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
