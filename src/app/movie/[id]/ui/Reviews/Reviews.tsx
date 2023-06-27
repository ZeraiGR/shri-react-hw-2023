import ReviewCard from "@/app/movie/[id]/ui/ReviewCard/ReviewCard";
import RotateLoader from "react-spinners/RotateLoader";
import styles from './reviews.module.css';
import { useGetMovieReviewsByIdQuery } from '@/store/services/moviesApi';
import { NO_REVIEWS_ERROR, REVIEWS_LOADING_ERROR, SPINNER_COLOR } from '@/app/constants';
import ErrorWrapper from '@/app/ui/ErrorWrapper/ErrorWrapper';

export default function Reviews ({id}: {id: string}) {
  const { isError, isLoading, isFetching, data: reviews } = useGetMovieReviewsByIdQuery(id);

  if (isError) {
    return <ErrorWrapper msg={REVIEWS_LOADING_ERROR} />;
  }

  if (isLoading || isFetching) {
    return (
      <div className={styles.wrapper}>
        <RotateLoader color={SPINNER_COLOR} />
      </div>
    );
  }

  if (!reviews || reviews.length === 0) {
    return <ErrorWrapper msg={NO_REVIEWS_ERROR} />;
  }

  return (
      <ul className={styles.reviews}>
          {
              reviews.map(review => <li key={review.id}>
                  <ReviewCard
                      id={review.id}
                      name={review.name}
                      rating={review.rating}
                      text={review.text}
                  />
              </li>)
          }
      </ul>
  )
}
