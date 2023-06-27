import Link from "next/link";
import Image from "next/image";
import MinMax from "@/app/ui/MinMax/MinMax";
import CloseIcon from './CloseIcon';
import classNames from 'classnames';
import styles from './ticketCard.module.css';

interface TicketCardProps {
    id: string;
    title: string;
    posterUrl: string;
    genre: string;
    isCart?: boolean;
    openModal?: (id: string) => void; 
}

export default function TicketCard (props: TicketCardProps) {
    const {
      title,
      posterUrl,
      genre,
      id,
      isCart = false,
      openModal
    } = props;

    return (
        <li className={styles.wrapper}>
            <article className={classNames(styles.card, "card")}>
                <Image 
                  className={styles.poster} 
                  src={posterUrl} 
                  alt={title} 
                  width={100} 
                  height={120} 
                />
                <div className={styles.content}>
                  <div>
                    <h2 className={styles.title}>
                        <Link href={'/movie/' + id}>
                            {title}
                        </Link>
                    </h2>
                    <span className={styles.genre}>{genre}</span>
                  </div>
                  <div className={styles.settings}>
                    <MinMax id={id} isCart={isCart} openModal={openModal} />
                    {isCart && !!openModal && (
                      <button 
                        type="button" 
                        onClick={() => openModal(id)}
                      >
                        <CloseIcon className={styles.icon} />
                      </button>
                    )}
                  </div>
                </div>
            </article>
        </li>
    )
}
