import Detail from "@/app/movie/[id]/ui/Detail/Detail";
import styles from './details.module.css';
import classNames from "classnames";

export default function Details (
    {genre, releaseYear, rating, director, className}:
    {
        genre: string,
        releaseYear: number,
        rating: number,
        director: string,
        className: string
    }) {
    return (
        <ul className={classNames(styles.list, className)}>
            <Detail title="Жанр" value={genre} />
            <Detail title="Год выпуска" value={releaseYear} />
            <Detail title="Рейтинг" value={rating} />
            <Detail title="Режиссер" value={director}/>
        </ul>
    )
}
