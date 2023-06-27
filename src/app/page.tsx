"use client";

import Sidebar from "@/app/ui/Sidebar/Sidebar";
import TicketList from "@/app/ui/TicketList/TicketList";
import { useGetMoviesByCinemaIdQuery } from '@/store/services/moviesApi';
import ErrorWrapper from './ui/ErrorWrapper/ErrorWrapper';
import { MOVIES_LOADING_ERROR, NO_MOVIES_ERROR, SPINNER_COLOR } from './constants';
import { RotateLoader } from 'react-spinners';
import { Dispatch, SetStateAction, createContext, useState } from 'react';

interface AppContextInterface {
  setCinemaId?: Dispatch<SetStateAction<string | undefined>>;
  genrePlaceholder?: string | undefined;
  cinemaPlaceholder?: string | undefined;
  setGenrePlaceholder?: Dispatch<SetStateAction<string | undefined>>;
  setCinemaPlaceholder?: Dispatch<SetStateAction<string | undefined>>;
}

export const AppContext = createContext<AppContextInterface>({});

export default function Home() {
  const [cinemaId, setCinemaId] = useState<string>();
  const [genrePlaceholder, setGenrePlaceholder] = useState<string>();
  const [cinemaPlaceholder, setCinemaPlaceholder] = useState<string>();
  const { 
    data: movies, 
    isError: isError, 
    isLoading: isLoading, 
    isFetching: isFetching 
  } = useGetMoviesByCinemaIdQuery(cinemaId ?? '');

  if (isError) {
    return <ErrorWrapper msg={MOVIES_LOADING_ERROR} />;
  }

  if (isLoading || isFetching) {
    return (
      <div className="wrapper">
        <RotateLoader color={SPINNER_COLOR} />
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return <ErrorWrapper msg={NO_MOVIES_ERROR} />;
  }
  
  return (
    <div className="layout">
      <AppContext.Provider value={{
        setCinemaId,
        genrePlaceholder,
        cinemaPlaceholder,
        setGenrePlaceholder,
        setCinemaPlaceholder
      }}>
        <h1 className="sr-only">Билетопоиск - все фильмы</h1>
        <Sidebar movies={movies} />
        <TicketList movies={movies} />
      </AppContext.Provider>
    </div>
  )
}
