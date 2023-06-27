import Link from "next/link";
import Image from "next/image";
import logo from './logo.svg';
import styles from './logo.module.css';

export default async function Logo () {
    return (
        <Link href="/">
            <Image className={styles.logo} src={logo} alt="logo"/>
        </Link>
    )
}
