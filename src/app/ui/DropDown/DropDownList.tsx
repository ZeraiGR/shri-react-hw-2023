import { DEFAULT_PADDING_HORIZONTAL, DEFAULT_PADDING_VERTICAL, HEADER_HEIGHT } from '@/app/constants';
import styles from './dropdown.module.css';
import { translateGenre } from '@/app/shared/translateGenre';
import classNames from 'classnames';
import { Genre } from '@/store/features/filterSlice';
import { useAppDispatch } from '@/store/hooks';
import { useCallback } from 'react';
import { setGenre } from '@/store/features/filterSlice';
import { Cinema } from '@/app/types';
import useAppContext from '@/app/hooks/useAppContext';

export interface Coords {
  x: number | undefined;
  y: number | undefined;
}

interface DropDownListProps {
  coords: Coords | undefined;
  variants: (Genre | Cinema)[];
  isOpen: boolean;
  close: () => void;
  setCurrentName: (value: Genre | Cinema) => void;
}

function isCinema (value: Genre | Cinema): value is Cinema {
  return typeof value === "object";
}


export default function DropDownList ({ 
  coords,
  variants,
  isOpen,
  close,
  setCurrentName,
}: DropDownListProps) {
  const dispatch = useAppDispatch();
  const { setCinemaId } = useAppContext();
  const x = coords?.x,
        y = coords?.y;

  const setValueHandler = useCallback((value: Genre | Cinema) => {
    if (isCinema(value)) {
      !!setCinemaId && setCinemaId(value.id);
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
    {[styles.open]: isOpen},
  ];

  return (
    <ul className={classNames(styles.list, ...mods)} style={position}>
      {!!variants && variants.map((variant, id) => <li key={id}>
        <button 
          className={styles.button} 
          onClick={() => setValueHandler(variant)}
        >
          {typeof variant === 'object' && variant.name}
          {typeof variant !== 'object' && translateGenre(variant)}
        </button>
      </li>)}
    </ul>
  )
}