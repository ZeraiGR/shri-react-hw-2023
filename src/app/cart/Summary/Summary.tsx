"use client";

import { useAppSelector } from '@/store/hooks';
import { selectTotalQuantity } from '@/store/selectors';
import styles from './summary.module.css';
import classNames from 'classnames';

export default function Summary () {
  const total = useAppSelector(selectTotalQuantity);

  if (!total) return null;

  return (
    <div className={classNames(styles.summary, "card")}>
      <strong>Итого билетов:</strong>
      <span>{total}</span>
    </div>
  )
}