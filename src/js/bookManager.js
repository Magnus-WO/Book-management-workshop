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
    this.storeBooks(this.booksCollection);
    console.log(this.booksCollection);
  }
  static storeBooks(booksCollection) {
    localStorage.setItem("books-collection", JSON.stringify(booksCollection));
  }
}

export default BookManager;
