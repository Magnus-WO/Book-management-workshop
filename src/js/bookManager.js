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
    BookManager.booksCollection.push(book);
    BookManager.storeBooks(this.booksCollection);
    console.log(this.booksCollection);
  }
  static storeBooks(booksCollection) {
    localStorage.setItem("books-collection", JSON.stringify(booksCollection));
  }
  static deleteBook(id) {
    BookManager.booksCollection = BookManager.booksCollection.filter((book) => {
      return book.id !== id;
    });
    BookManager.storeBooks(BookManager.booksCollection);
    Ui.renderBooks();
  }
}

export default BookManager;
