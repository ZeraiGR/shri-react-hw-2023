import styles from './errorWrapper.module.css';

export default function ErrorWrapper ({msg}: {msg: string}) {
  return <div className={styles.wrapper}>
    {msg}
  </div>
}