import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { Cinema, Movie, Review } from "@/app/types";

export const moviesApi = createApi({
    reducerPath: 'movieApi',
    baseQuery: fetchBaseQuery(
        {baseUrl: 'http://localhost:3001/api/'}
    ),
    endpoints: (builder) => ({
        getMovies: builder.query<Movie[], void>({
            query: () => 'movies',
        }),
        getMovieById: builder.query<Movie, string>({
            query: (id) => `movie?movieId=${id}`
        }),
        getMovieReviewsById: builder.query<Review[], string>({
          query: (id) => `reviews?movieId=${id}`
        }),
        getCinemas: builder.query<Cinema[], void>({
          query: () => 'cinemas'
        }),
        getMoviesByCinemaId: builder.query<Movie[], string>({
          query: (id) => `movies?cinemaId=${id}`
        })
    }),
});

export const { 
  useGetMoviesQuery, 
  useGetMovieByIdQuery, 
  useGetMovieReviewsByIdQuery,
  useGetCinemasQuery,
  useGetMoviesByCinemaIdQuery,
} = moviesApi;
