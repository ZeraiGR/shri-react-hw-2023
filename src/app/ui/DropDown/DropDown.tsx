import { useEffect, useRef, useState } from 'react';
import { Portal } from '../Portal/Portal';
import DropDownList, { Coords } from './DropDownList';
import DropDownIcon from './DropdownIcon';
import { Button, ButtonTheme } from '../Button/Button';
import classNames from 'classnames';
import { Genre } from '@/store/features/filterSlice';
import { Cinema } from '@/app/types';
import styles from './dropdown.module.css';

interface DropDownProps {
  isOpen: boolean;
  toggleOpen: () => void;
  closeDropDown: () => void;
  setCurrentName: (value: Genre | Cinema) => void;
  curValue: string;
  variants: (Genre | Cinema)[];
}

export default function DropDown ({
  isOpen,
  toggleOpen,
  curValue,
  variants,
  closeDropDown,
  setCurrentName
}: DropDownProps) {
  const btnRef = useRef<HTMLButtonElement>(null);
  const [coords, setCoords] = useState<Coords>();
  
  useEffect(() => {
    setCoords({x: btnRef.current?.offsetLeft, y: btnRef.current?.offsetTop});
  }, []);

  const mods = [
    {[styles.openwrapper]: isOpen},
  ];

  return (
    <div className={classNames(...mods)}>
      <Button 
        className={styles.button} 
        ref={btnRef} 
        theme={ButtonTheme.DROPDOWN}
        onClick={toggleOpen}
      >
        <span>{curValue}</span>
        <DropDownIcon className={styles.icon} />
      </Button>
      <Portal destination={document.getElementById('dropdowns')}>
        <DropDownList 
          coords={coords} 
          isOpen={isOpen}
          variants={variants} 
          close={closeDropDown}
          setCurrentName={setCurrentName}
        />
      </Portal>
    </div>
  )
}