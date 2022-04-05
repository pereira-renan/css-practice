class Book {
  constructor(
    title,
    author,
    publisher,
    genre,
    totalPages,
    yearPublished,
    language,
    isHardcover,
    rating,
  ) {
    this.title = title;
    this.author = author;
    this.publisher = publisher;
    this.genre = genre;
    this.totalPages = totalPages;
    this.yearPublished = yearPublished;
    this.language = language;
    this.isHardcover = isHardcover;
    this.rating = rating;
  }

  starsRating() {
    let stars = 4.5;
    return stars;
  }

  copyIsHardcovered() {
    let isHardcover = true;
    return isHardcover;
  }
}

export default Book;

