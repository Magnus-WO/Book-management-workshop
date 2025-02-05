import Book from "./book.js";
class AudioBook extends Book {
  constructor(title, author, publisher, date, bookType, narrator, duration) {
    super(title, author, publisher, date, bookType);
    this.narrator = narrator;
    this.duration = duration;
  }
}

export default AudioBook;
