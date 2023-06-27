export interface Movie {
    id: string;
    title: string;
    genre: string;
    posterUrl: string;
    releaseYear: number;
    description: string;
    rating: number;
    director: string;
    reviewIds: string[];
}

export interface Review {
    id: string;
    name: string;
    text: string;
    rating: number;
}

export interface Cinema {
  id: string;
  name: string;
  movieIds: string[];
}