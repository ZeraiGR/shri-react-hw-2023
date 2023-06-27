import classNames from 'classnames';
import Input from '../Input/Input';
import styles from './searchFilter.module.css';

interface SearchFilter {
  title: string;
  placeholder: string;
  changeHandler?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className: string;
}

export default function SearchFilter (props: SearchFilter) {
  const {
    title,
    placeholder,
    changeHandler,
    className,
  } = props;

  return (
    <div className={classNames(className, styles.wrapper)}>
      <span>{title}</span>
      <Input placeholder={placeholder} onChange={changeHandler} />
    </div>
  )
}