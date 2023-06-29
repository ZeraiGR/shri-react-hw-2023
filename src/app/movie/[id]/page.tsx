"use client";

import Image from "next/image";
import RotateLoader from "react-spinners/RotateLoader";
import Reviews from "./ui/Reviews/Reviews";
import Details from "./ui/Details/Details";
import Description from "./ui/Description/Description";
import { useGetMovieByIdQuery } from '@/store/services/moviesApi';
import { translateGenre } from "@/app/shared/translateGenre";
import styles from "./movie.module.css";
import type { Movie } from "@/app/types";
import ErrorWrapper from '@/app/ui/ErrorWrapper/ErrorWrapper';
import { MOVIE_LOADING_ERROR, SPINNER_COLOR } from '@/app/constants';
import MinMax from '@/app/ui/MinMax/MinMax';
import classNames from 'classnames';
import { Genre } from '@/store/features/filterSlice';

export default function Movie ({ params: { id } }: { params: {id: string} }) {
    const { isError, isLoading, isFetching, data: movie } = useGetMovieByIdQuery(id);

    if (isError) {
      return <ErrorWrapper msg={MOVIE_LOADING_ERROR} />;
    }

    if (isLoading || isFetching || !movie) {
      return (
        <div className={styles.wrapper}>
          <RotateLoader color={SPINNER_COLOR} />
        </div>
      );
    }

    return (
        <section className={styles.page}>
            <div className={classNames(styles.content, "card")}>
                <Image
                    className={classNames(styles.poster, styles.desktop)}
                    src={movie.posterUrl}
                    alt={movie.title}
                    width={400}
                    height={500}
                />
                <div className={styles.info}>
                  <div className={styles.topbar}>
                    <h1 className={classNames(styles.title, "title")}>
                      {movie.title}
                    </h1>
                    <MinMax className={styles.desktop} id={id} />
                  </div>
                  <Image
                      className={classNames(styles.mobile, styles.poster)}
                      src={movie.posterUrl}
                      alt={movie.title}
                      width={400}
                      height={500}
                  />
                  <MinMax className={styles.mobile} id={id} />
                  <Details
                      className={styles.details}
                      genre={translateGenre(movie.genre as Genre)}
                      releaseYear={movie.releaseYear}
                      rating={movie.rating}
                      director={movie.director}
                  />
                  <Description text={movie.description} />
                </div>
            </div>
            <Reviews id={id} />
        </section>
    )
}
