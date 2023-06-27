"use client";

import { useAppDispatch, useAppSelector } from "@/store/hooks";
import { decrement, increment } from '@/store/features/cartSlice';
import { selectMovieQuantity } from '@/store/selectors';
import MinMaxBtn from './MinMaxBtn/MinMaxBtn';
import styles from './minmax.module.css';
import classNames from 'classnames';

export enum BtnType {
  INCREMENT = "increment",
  DECREMENT = "decrement"
}

export enum BtnTheme {
  PRIMARY = "primary",
  DARK = "dark"
}

interface MimMaxProps {
  id: string;
  min?: number;
  max?: number;
  isCart?: boolean;
  openModal?: (id: string) => void; 
  className?: string;
}

export default function MinMax (props: MimMaxProps) {
    const {
      min = 0,
      max = 30,
      id,
      isCart = false,
      openModal,
      className
    } = props;

    const current = useAppSelector((state) => selectMovieQuantity(state, id));
    const dispatch = useAppDispatch();

    const dec = () => {
      if (current > min && current <= max) {

          if (current === 1 && isCart && !!openModal) {
            openModal(id);
          } else {
            dispatch(decrement(id));
          }

        }
    };

    const inc = () => {
      if (current >= min && current < max) {
        dispatch(increment(id));
      }
    };

    let maxExeeded = current === max;
    let minExeeded = current === min;

    return (
        <div className={classNames(styles.minmax, className)}>
            <MinMaxBtn 
              handler={dec}
              type={BtnType.DECREMENT}
              theme={BtnTheme.PRIMARY}
              isDisabled={minExeeded}
            />
            <strong>{current}</strong>
            <MinMaxBtn 
              handler={inc} 
              type={BtnType.INCREMENT}
              theme={BtnTheme.PRIMARY}
              isDisabled={maxExeeded}
            />
        </div>
    )
}