import AudioBook from "./audioBook";
import PrintedBook from "./printedBooks";

class BookManager {
  static booksCollection =
    JSON.parse(localStorage.getItem("books-collection")) || [];
  static addBook(
    title,
    author,
    publisher,
    date,
    bookType,
    pagesInput,
    pagesPrintType,
    narratorInput,
    durationInput
  ) {
    let book;
    if (bookType === "printed-book") {
      book = new PrintedBook(
        title,
        author,
        publisher,
        date,
        bookType,
        pagesInput,
        pagesPrintType
      );
    } else {
      book = new AudioBook(
        title,
        author,
        publisher,
        date,
        bookType,
        narratorInput,
        durationInput
      );
    }
    this.booksCollection.push(book);
    console.log(this.booksCollection);
  }
}

export default BookManager;
