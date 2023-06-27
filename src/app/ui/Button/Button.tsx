import { ReactNode, ButtonHTMLAttributes, forwardRef, ForwardedRef } from 'react';
import styles from './button.module.css';
import classNames from 'classnames';

export enum ButtonTheme {
  PRIMARY = 'primary',
  GHOST = 'ghost',
  DROPDOWN = 'dropdown',
}

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  theme: ButtonTheme;
  className?: string;
  isCloser?: boolean;
}

export const Button = forwardRef(function Button (
  props: ButtonProps, 
  ref: ForwardedRef<HTMLButtonElement>
) {
  const {
    children,
    theme,
    className,
    isCloser = false,
    ...rest
  } = props;

  const mods = [
    styles.btn,
    {[styles.primary]: theme === ButtonTheme.PRIMARY},
    {[styles.ghost]: theme === ButtonTheme.GHOST},
    {[styles.dropdown]: theme === ButtonTheme.DROPDOWN},
    className
  ];

  return (
      <button 
      className={classNames(...mods)} 
      type="button"
      ref={ref}
      data-close={isCloser}
      {...rest}
    >
      {children}
    </button>
  )
});
