import AudioBook from "./audioBook";
import PrintedBook from "./printedBooks";

class BookManager {
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
    console.log(book);
  }
}

export default BookManager;
