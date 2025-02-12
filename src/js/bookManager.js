import AudioBook from "./audioBook";
import Book from "./book";
import PrintedBook from "./printedBooks";
import Ui from "./ui";

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
    const latestCollection =
      JSON.parse(localStorage.getItem("books-collection")) || [];
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
    latestCollection.push(book);
    this.storeBooks(latestCollection);
    BookManager.booksCollection = latestCollection;
    console.log(this.booksCollection);
  }
  static storeBooks(booksCollection) {
    localStorage.setItem("books-collection", JSON.stringify(booksCollection));
  }
  static deleteBook(id) {
    const latestCollection = JSON.parse(
      localStorage.getItem("books-collection")
    );
    BookManager.booksCollection = latestCollection.filter((book) => {
      return book.id !== id;
    });
    BookManager.storeBooks(BookManager.booksCollection);
    Ui.renderBooks();
  }
  static editBook(
    id,
    title,
    author,
    publisher,
    date,
    bookType,
    pages,
    printType,
    narrator,
    duration
  ) {
    const latestCollection = JSON.parse(
      localStorage.getItem("books-collection")
    );
    const bookIndex = latestCollection.findIndex((book) => book.id === id);
    if (bookIndex !== -1) {
      latestCollection[bookIndex] = {
        id,
        title,
        author,
        publisher,
        date,
        bookType,
        pages,
        printType,
        narrator,
        duration,
      };
    }
    BookManager.storeBooks(latestCollection);
    BookManager.booksCollection = latestCollection;
  }
}

export default BookManager;
