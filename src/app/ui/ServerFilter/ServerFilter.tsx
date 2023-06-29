import { RotateLoader } from 'react-spinners';
import DropDown from '../DropDown/DropDown';
import ErrorWrapper from '../ErrorWrapper/ErrorWrapper';
import { CINEMAS_LOADING_ERROR, NO_CINEMAS_ERROR, SPINNER_COLOR } from '@/app/constants';
import { useGetCinemasQuery } from '@/store/services/moviesApi';
import { useCallback, useState } from 'react';
import useDropDown from '@/app/hooks/useDropDown';
import classNames from 'classnames';
import { Genre } from '@/store/features/filterSlice';
import { Cinema } from '@/app/types';
import styles from './serverFilter.module.css';
import useAppContext from '@/app/hooks/useAppContext';

interface ServerFilterProps {
  title: string;
  placeholder: string;
  className: string;
}

export default function ServerFilter (props: ServerFilterProps) {
  const { title, placeholder, className } = props;
  const { cinemaPlaceholder, setCinemaPlaceholder} = useAppContext();

  const { 
    data: cinemas,
    isError,
    isLoading,
    isFetching
  } = useGetCinemasQuery();

  const { isOpen, toggleOpen, closeDropDown } = useDropDown(styles.wrapper);
  const [curValue, setCurValue] = useState<string>(cinemaPlaceholder ||placeholder);

  const setCurrentName = useCallback((value: Genre | Cinema) => {
    if (typeof value === 'object') {
      setCurValue(value.name);
      setCinemaPlaceholder?.(value.name);
    }
  }, [setCinemaPlaceholder]);


  if (isError) {
    return <ErrorWrapper msg={CINEMAS_LOADING_ERROR} />;
  }

  if (isLoading || isFetching) {
    return (
      <div className="wrapper">
        <RotateLoader color={SPINNER_COLOR} />
      </div>
    )
  }

  if (!cinemas || cinemas.length === 0) {
    return <ErrorWrapper msg={NO_CINEMAS_ERROR} />;
  }
  
  let variants = [{
    id: "faker",
    name: "Не выбрано",
    movieIds: []
  } as Cinema].concat(cinemas);

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