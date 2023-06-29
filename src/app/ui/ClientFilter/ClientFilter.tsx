import DropDown from '../DropDown/DropDown';
import classNames from 'classnames';
import { Genre } from '@/store/features/filterSlice';
import { Cinema } from '@/app/types';
import styles from './clietnFilter.module.css';
import useClientFilter from './useClientFilter';

interface ClientFilterProps {
  title: string;
  placeholder: string;
  className: string;
  variants: (Genre | Cinema)[];
}

export default function ClientFilter (props: ClientFilterProps) {
  const { title, placeholder, className, variants } = props;

  const { 
    isOpen, 
    toggleOpen, 
    curValue, 
    closeDropDown, 
    setCurrentName 
  } = useClientFilter(styles.wrapper, placeholder, title);

  return (
    <div className={classNames(className, styles.wrapper)}>
      <span>{title}</span>
      <DropDown 
        isOpen={isOpen} 
        toggleOpen={toggleOpen} 
        curValue={curValue}
        variants={variants}
        closeDropDown={closeDropDown}
        setCurrentName={setCurrentName}
      />
    </div>
  )
}