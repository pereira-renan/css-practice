import Book from './book.js';

const book = new Book(
  'The Lord of the Rings',
  'J.R.R. Tolkien',
  'HarperCollins',
  'Fantasy',
  1232,
  1954,
  'English',
  true,
  4.5
);

const template = (book) => {
  return `
  <div class="book__container">
    <div class="book__bg">
    </div>
    <div class="book">
        <h2>Title: ${book.title}</h2>
        <p>Author: ${book.author}</p>
        <p>Publisher: ${book.publisher}</p>
        <p>Genre: ${book.genre}</p>
        <p>Total Pages: ${book.totalPages}</p>
        <p>Year Published ${book.yearPublished}</p>
        <p>Language: ${book.language}</p>
        <p>Is Hardcovered? ${book.isHardcover ? "Yes" : "No"}</p>
        <p>Rating: ${book.rating}</p>
    </div>
  </div>
  `;
};

console.log(book);
console.log(book.copyIsHardcovered());
console.log(book.starsRating());

const main = document.createElement('main');
main.innerHTML = template(book);
document.body.appendChild(main);
