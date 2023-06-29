import useAppContext from '@/app/hooks/useAppContext';
import { Cinema } from '@/app/types';
import { Genre, setGenre } from '@/store/features/filterSlice';
import { useAppDispatch } from '@/store/hooks';
import { useCallback } from 'react';
import { Coords } from './DropDownList';
import { DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL, HEADER_HEIGHT } from '@/app/constants';

function isCinema (value: Genre | Cinema): value is Cinema {
  return typeof value === "object";
}

export default function useDropDownClick (
  coords: Coords | undefined, 
  setCurrentName: (value: Genre | Cinema) => void,
  close: () => void,
  isOpen: boolean,
  openClass: string
  ) {
  const dispatch = useAppDispatch();
  const { setCinemaId } = useAppContext();
  const x = coords?.x,
        y = coords?.y;

  const setValueHandler = useCallback((value: Genre | Cinema) => {
    if (isCinema(value)) {
      setCinemaId(value.id);
    } else {
      dispatch(setGenre(value));
    }

    close();
    setCurrentName(value);

    // fixing error when filter at the bottom of the page
    window.scrollTo({top: 0});
  }, [dispatch, close, setCurrentName, setCinemaId]);
  
  if (!x || !y) {
    return null;
  }

  let position = {
    top: y + HEADER_HEIGHT + DEFAULT_PADDING_VERTICAL + window.scrollY, 
    left: x + DEFAULT_PADDING_HORIZONTAL
  };

  const mods = [
    {[openClass]: isOpen},
  ];

  return { setValueHandler, position, mods };
}
