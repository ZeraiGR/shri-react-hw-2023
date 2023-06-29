import { Dispatch, SetStateAction, createContext } from 'react';

interface AppContextInterface {
  setCinemaId: Dispatch<SetStateAction<string | undefined>>;
  genrePlaceholder: string | undefined;
  cinemaPlaceholder: string | undefined;
  setGenrePlaceholder: Dispatch<SetStateAction<string | undefined>>;
  setCinemaPlaceholder: Dispatch<SetStateAction<string | undefined>>;
}

export default createContext<AppContextInterface | null>(null);