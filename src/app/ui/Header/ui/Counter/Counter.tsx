import styles from './counter.module.css';

export default function Counter ({cnt}: {cnt: number}) {
    return (
        <div className={styles.counter}>{cnt}</div>
    )
}
