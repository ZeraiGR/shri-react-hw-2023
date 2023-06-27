import styles from './description.module.css';

export default function Description ({text}: {text: string}) {
    return (
        <>
          <strong className={styles.title}>Описание</strong>
          <p>{text}</p>
        </>
    )
}
