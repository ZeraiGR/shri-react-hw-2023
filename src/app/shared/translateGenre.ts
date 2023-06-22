export function translateGenre (genre: string) {
    switch (genre) {
        case "fantasy":
            return "Фэнтези";
        case "horror":
            return "Ужасы";
        case "action":
            return "Боевик";
        case "comedy":
            return "Комедия";
        default:
            return genre;
    }
}
