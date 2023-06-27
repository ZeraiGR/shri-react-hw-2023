import classNames from 'classnames';
import { BtnTheme, BtnType } from '../MinMax';
import DecrementIcon from './DecrementIcon';
import IncrementIcon from './IncrementIcon';
import styles from './minMaxBtn.module.css';

interface MinMaxBtn {
  handler: () => void;
  type: BtnType;
  theme: BtnTheme;
  isDisabled: boolean;
}

export default function MinMaxBtn (props: MinMaxBtn) {
  const { 
    handler,
    type, 
    theme,
    isDisabled
  } = props;

  const mods = classNames(
    styles.btn,
    { [styles.primary]: theme === BtnTheme.PRIMARY },
    { [styles.dark]: theme === BtnTheme.DARK },
  );

  return (
    <button
      className={mods}
      disabled={isDisabled}
      onClick={handler}
    >
      {type === BtnType.DECREMENT && <DecrementIcon />}
      {type === BtnType.INCREMENT && <IncrementIcon />}
    </button>
  )
}
