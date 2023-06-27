import { Genre } from '@/store/features/filterSlice';

export function translateGenre (genre: Genre) {
    switch (genre) {
        case Genre.FANTASY:
            return "Фэнтези";
        case Genre.HORROR:
            return "Ужасы";
        case Genre.ACTION:
            return "Боевик";
        case Genre.COMEDY:
            return "Комедия";
        case Genre.DEFAULT:
            return "Не выбран";
        default:
            return genre;
    }
}
