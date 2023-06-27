"use client";

import { memo } from 'react';
import RotateLoader from "react-spinners/RotateLoader";
import { useGetMoviesQuery } from '@/store/services/moviesApi';
import { EMPTY_CART_ERROR, MOVIES_LOADING_ERROR, NO_MOVIES_ERROR, SPINNER_COLOR } from '@/app/constants';
import ErrorWrapper from '@/app/ui/ErrorWrapper/ErrorWrapper';
import TicketCard from '@/app/ui/TicketCard/TicketCard';
import { translateGenre } from '@/app/shared/translateGenre';
import { selectCart } from '@/store/selectors';
import { useAppSelector } from '@/store/hooks';
import { Portal } from '@/app/ui/Portal/Portal';
import { Modal } from '@/app/ui/Modal/Modal';
import { Button, ButtonTheme } from '@/app/ui/Button/Button';
import styles from './cartList.module.css';
import useModalCart from '@/app/hooks/useModalCart';
import CloseIcon from '@/app/ui/TicketCard/CloseIcon';
import { Genre } from '@/store/features/filterSlice';

export default function CartList () {
  const { data: movies, isError, isLoading, isFetching } = useGetMoviesQuery();
  const cart = useAppSelector(selectCart);
  const {isModalOpen, openModal, closeModal, applyOperation} = useModalCart();

  if (isError) {
    return <ErrorWrapper msg={MOVIES_LOADING_ERROR} />;
  }

  if (isLoading || isFetching) {
    return (
      <div className={styles.wrapper}>
        <RotateLoader color={SPINNER_COLOR} />
      </div>
    );
  }

  if (!movies || movies.length === 0) {
    return <ErrorWrapper msg={NO_MOVIES_ERROR} />;
  }

  if (Object.keys(cart).length === 0) {
    return <ErrorWrapper msg={EMPTY_CART_ERROR} />;
  }

  const MemoizedTicketCard = memo(TicketCard);

  return (
    <>
      <ul className="movies">
          {movies
            .filter(movie => !!cart[movie.id])
            .map(movie => <MemoizedTicketCard
              key={movie.id}
              id={movie.id}
              title={movie.title}
              posterUrl={movie.posterUrl}
              genre={translateGenre(movie.genre as Genre)}
              isCart
              openModal={openModal}
          />)}
      </ul>
      <Portal destination={document.getElementById("modals")}>
        <Modal isOpened={isModalOpen} onClose={closeModal}>
          <div className={styles.topbar}>
            <strong className={styles.title}>Удаление билета</strong>
            <button type="button" data-close>
              <CloseIcon className={styles.icon} />
            </button>
          </div>
          <p className={styles.description}>
            Вы уверены, что хотите удалить билет?
          </p>
          <div className={styles.btns}>
            <Button 
              theme={ButtonTheme.PRIMARY}
              onClick={applyOperation}
              isCloser
            >
              Да
            </Button>
            <Button 
              theme={ButtonTheme.GHOST} 
              isCloser
            >
              Нет
            </Button>
          </div>
        </Modal>
      </Portal>
    </>
      
  )
}