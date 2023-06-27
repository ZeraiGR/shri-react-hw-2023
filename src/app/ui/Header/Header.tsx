import styles from './header.module.css';
import CartLink from "@/app/ui/Header/ui/CartLink/CartLink";
import Logo from "@/app/ui/Header/ui/Logo/Logo";

export default function Header () {
    return (
        <header className={styles.header}>
            <div className={styles.content}>
                <Logo />
                <CartLink />
            </div>
        </header>
    )
}
