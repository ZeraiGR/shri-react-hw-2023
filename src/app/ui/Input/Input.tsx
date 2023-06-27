import { ButtonHTMLAttributes } from 'react';
import styles from './input.module.css';
import classNames from 'classnames';

interface InputProps extends ButtonHTMLAttributes<HTMLInputElement>{
  placeholder: string;
  className?: string;
}

export default function Input (props: InputProps) {
  const {
    placeholder,
    onInput,
    className,
    ...rest
  } = props;

  return (
    <input 
      type="text" 
      onInput={onInput} 
      placeholder={placeholder}
      className={classNames(styles.input, className)}
      {...rest} 
    />
  );
}