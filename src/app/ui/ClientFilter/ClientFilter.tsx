import { useCallback, useState } from 'react';
import DropDown from '../DropDown/DropDown';
import classNames from 'classnames';
import { translateGenre } from '@/app/shared/translateGenre';
import { Genre } from '@/store/features/filterSlice';
import { Cinema } from '@/app/types';
import useDropDown from '@/app/hooks/useDropDown';
import styles from './clietnFilter.module.css';
import useAppContext from '@/app/hooks/useAppContext';

interface ClientFilterProps {
  title: string;
  placeholder: string;
  className: string;
  variants: (Genre | Cinema)[];
}

export default function ClientFilter (props: ClientFilterProps) {
  const { title, placeholder, className, variants } = props;
  const { isOpen, toggleOpen, closeDropDown } = useDropDown(styles.wrapper);
  
  const { genrePlaceholder, setGenrePlaceholder} = useAppContext();
  const [curValue, setCurValue] = useState<string>(genrePlaceholder ||placeholder);

  const setCurrentName = useCallback((value: Genre | Cinema) => {
    if (typeof value !== 'object') {
      if (value === Genre.DEFAULT) {
        setCurValue(title);
        setGenrePlaceholder?.(title);
      } else {
        setCurValue(translateGenre(value));
        setGenrePlaceholder?.(translateGenre(value));
      }
    }
  }, [title, setGenrePlaceholder]);

  return (
    <div className={classNames(className, styles.wrapper)}>
      <span>{title}</span>
      <DropDown 
        isOpen={isOpen} 
        toggleOpen={toggleOpen} 
        curValue={curValue}
        variants={variants}
        closeDropDown={closeDropDown}
        setCurrentName={setCurrentName}
      />
    </div>
  )
}