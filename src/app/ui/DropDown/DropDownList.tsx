import styles from './dropdown.module.css';
import { translateGenre } from '@/app/shared/translateGenre';
import classNames from 'classnames';
import { Genre } from '@/store/features/filterSlice';
import { Cinema } from '@/app/types';
import useDropDownClick from './useDropDownClick';

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

export default function DropDownList ({ 
  coords,
  variants,
  isOpen,
  close,
  setCurrentName,
}: DropDownListProps) {
  const data = useDropDownClick(coords, setCurrentName, close, isOpen, styles.open);

  if (!data) {
    return null;
  }

  const { setValueHandler, position, mods } = data;

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