import Link from 'next/link';
import styles from './footer.module.css';
import classNames from "classnames";

export default function Footer () {
    return (
        <footer className={styles.footer}>
            <div className={classNames(styles.content, "container")}>
                <Link href="/faq">Вопросы-ответы</Link>
                <Link href="/about">О нас</Link>
            </div>
        </footer>
    )
}
