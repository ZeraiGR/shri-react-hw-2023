import { ReactNode, useEffect } from 'react';
import classNames from 'classnames';
import styles from './modal.module.css';
import useModal from '@/app/hooks/useModal';

interface ModalProps {
  className?: string;
  children: ReactNode;
  isOpened?: boolean;
  onClose: () => void;
}

export const Modal = (props: ModalProps) => {
  const {
    className,
    children,
    isOpened = false,
    onClose,
  } = props;

  const {
    isClosing,
    closeHandler,
    selectionHandler
  } = useModal(onClose, isOpened, styles.content);

  useEffect(() => {
    if (isOpened) {
      document.body.classList.add("block");
    } else {
      document.body.classList.remove("block");
    }
  }, [isOpened]);

  const mods = [
    styles.modal, 
    className, 
    {[styles.isOpened]: isOpened},
    {[styles.isClosing]: isClosing}
  ];

  return (
    <div className={classNames(...mods)}>
      <div
        className={styles.overlay}
        onClick={closeHandler}
        onMouseDown={selectionHandler}
      >
        <div
          className={classNames(styles.content, "card")}
        >
          {children}
        </div>
      </div>
    </div>
  );
};