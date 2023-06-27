"use client";

import classNames from 'classnames';
import debounce from 'lodash.debounce';
import { useAppDispatch } from '@/store/hooks';
import { Genre, setName } from '@/store/features/filterSlice';
import getGenres from '@/app/shared/getGenres';
import { Cinema, Movie } from '@/app/types';
import SearchFilter from '../SearchFilter/SearchFilter';
import ServerFilter from '../ServerFilter/ServerFilter';
import ClientFilter from '../ClientFilter/ClientFilter';
import styles from './sidebar.module.css';

interface SidebarProps {
  movies: Movie[];
}

export default function Sidebar ({ movies }: SidebarProps) {
    const dispatch = useAppDispatch();
    
    const onChangeInput = debounce((e: React.ChangeEvent<HTMLInputElement>) => {
      const value = e.target.value;
      dispatch(setName(value));
    }, 300);

    const genres = getGenres(movies);

    return (
        <div className={classNames(styles.sidebar, 'card')}>
            <strong className={styles.title}>Фильтр поиска</strong>
            <div className={styles.filters}>
              <SearchFilter 
                title="Название" 
                placeholder="Введите название"
                changeHandler={onChangeInput}
                className={styles.filter}
              />
              <ClientFilter 
                title="Жанр" 
                placeholder="Выберите жанр"
                className={styles.filter}
                variants={genres as (Genre | Cinema)[]}
              />
              <ServerFilter 
                title="Кинотеатр" 
                placeholder="Выберите кинотеатр"
                className={styles.filter}
              />
            </div>
        </div>
    )
}
