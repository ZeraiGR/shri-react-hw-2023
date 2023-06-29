import useAppContext from '@/app/hooks/useAppContext';
import useDropDown from '@/app/hooks/useDropDown';
import { translateGenre } from '@/app/shared/translateGenre';
import { Cinema } from '@/app/types';
import { Genre } from '@/store/features/filterSlice';
import { useCallback, useState } from 'react';

export default function useClientFilter(
  wrapperClass: string, 
  placeholder: string,
  title: string
) {
  const { isOpen, toggleOpen, closeDropDown } = useDropDown(wrapperClass);
  
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

  return { isOpen, toggleOpen, curValue, closeDropDown, setCurrentName };
}