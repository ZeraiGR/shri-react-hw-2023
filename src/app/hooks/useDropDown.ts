import { useCallback, useEffect, useState } from 'react';

export default function useDropDown (wrapperClass: string) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((isOpen) => !isOpen);
  }, []);

  const closeDropDown = useCallback(() => {
    setIsOpen(() => false);
    window.removeEventListener("scroll", closeDropDown);
  }, []);

  const clickOutsideHandler = useCallback((e: Event) => {
    const target = e.target as HTMLElement;
  
    if (target && !target.closest(`.${wrapperClass}`)) {
      closeDropDown();
    }
  }, [wrapperClass, closeDropDown]);
  
  useEffect(() => {
    window.addEventListener("scroll", closeDropDown);

    if (isOpen) {
      window.addEventListener("click", clickOutsideHandler);
    } else {
      window.removeEventListener("click", clickOutsideHandler);
    }

    return () => {
      window.removeEventListener("scroll", closeDropDown);
      window.removeEventListener("click", clickOutsideHandler);
    }
  }, [clickOutsideHandler, closeDropDown, isOpen]);

  return {isOpen, toggleOpen, closeDropDown};
}