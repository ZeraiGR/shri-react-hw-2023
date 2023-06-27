import { useCallback, useEffect, useRef, useState } from 'react';
import { MODAL_ANIMATION_DURATION } from '../constants';

export default function useModal (onClose: () => void, isOpened: boolean, contentSelector: string) {
  const [isClosing, setIsClosing] = useState(false);
  const isCancelClosing = useRef(false);
  const timeoutId = useRef<ReturnType<typeof setTimeout> | null>(null);

  // Closing modal with a simple animation
  const closeModal = useCallback(() => {
    setIsClosing(true);
    timeoutId.current = setTimeout(() => {
      onClose();
      setIsClosing(false);
    }, MODAL_ANIMATION_DURATION);
  }, [onClose]);

  const closeHandler = useCallback((e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    const isContent = el.closest(`.${contentSelector}`);
        
    if ((el.dataset.close || !isContent) && !isCancelClosing.current) {
      closeModal();
    }

    isCancelClosing.current = false;
  }, [closeModal, isCancelClosing, contentSelector]);

  // To cancel closing modal when user start clicking inside the modal content but finish outside
  const selectionHandler = useCallback((e: React.MouseEvent) => {
    const el = e.target as HTMLElement;
    const isContent = el.closest(`.${contentSelector}`);

    if (isContent && !el.dataset.close) {
      isCancelClosing.current = true;
    }
  }, [isCancelClosing, contentSelector]);

  // Closing modal with esc
  const keyDownHandler = useCallback((e: KeyboardEvent) => {
    if (e.code === 'Escape' && !!onClose) {
      closeModal();
    }
  }, [closeModal, onClose]);

  useEffect(() => {
    if (isOpened) {
      window.addEventListener('keydown', keyDownHandler);
    }

    return () => {
      window.removeEventListener('keydown', keyDownHandler);
      setIsClosing(false);
      timeoutId.current && clearTimeout(timeoutId.current);
      isCancelClosing.current = false;
      timeoutId.current = null;
    };
  }, [isOpened, keyDownHandler]);

  return {isClosing, closeHandler, selectionHandler};
}