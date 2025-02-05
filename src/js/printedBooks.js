import Book from "./book.js";

class PrintedBook extends Book {
  constructor(title, author, publisher, date, bookType, pages, printType) {
    super(title, author, publisher, date, bookType);
    this.pages = pages;
    this.printType = printType;
  }
}

export default PrintedBook;
