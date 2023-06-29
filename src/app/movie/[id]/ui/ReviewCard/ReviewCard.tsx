import Image from "next/image";
import styles from './reviewCard.module.css';
import {Review} from "@/app/types";
import userIcon from './default-user-icon.svg';
import classNames from 'classnames';

export default function ReviewCard ({text, rating, name}: Review) {
    return (
        <article className={classNames(styles.review, "card")}>
            <Image className={styles.avatar} src={userIcon} alt={name} />
            <div className={styles.info}>
                <div className={styles.bar}>
                    <strong>{name}</strong>
                    {!!rating && <p>Оценка: <strong>{rating}</strong></p>}
                </div>
                <p>{text}</p>
            </div>
        </article>
    )
}
