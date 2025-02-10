class Ui {
  static toggleBookTypeFields(
    printedBookContainer,
    audioBookContainer,
    printedFields,
    audioFields,
    bookType
  ) {
    //Hide both containers initially
    printedBookContainer.style.display = "none";
    audioBookContainer.style.display = "none";

    // Reset the values of both categories
    printedFields.forEach((field) => (field.value = ""));
    audioFields.forEach((field) => (field.value = ""));

    //Display relevant container based on users selection
    if (bookType === "printed-book") {
      printedBookContainer.style.display = "block";
    } else {
      audioBookContainer.style.display = "block";
    }
  }
  static displayAddModal(
    openAddModalButton,
    formModal,
    printedBookContainer,
    audioBookContainer
  ) {
    openAddModalButton.addEventListener("click", () => {
      formModal.classList.add("display-form");
      //Hide both containers initally
      printedBookContainer.style.display = "none";
      audioBookContainer.style.display = "none";
    });
  }
  static closeAddModal(closeAddModalButton, formModal) {
    closeAddModalButton.addEventListener("click", () => {
      formModal.classList.remove("display-form");
    });
  }

  // Rendering the books collection
  static renderBooks() {
    const bookList = document.querySelector(".books__list");
    bookList.innerHTML = "";
    const booksCollection = JSON.parse(
      localStorage.getItem("books-collection")
    );
    booksCollection.forEach((book, index) => {
      // Containers
      const bookCard = document.createElement("li");
      const bookDetailsContainer = document.createElement("div");
      const bookToolsContainer = document.createElement("div");

      const titleContainer = document.createElement("div");
      const authorContainer = document.createElement("div");
      const publisherContainer = document.createElement("div");
      const dateContainer = document.createElement("div");

      const bookTypeContainer = document.createElement("div");
      const pagesOrNarratorContainer = document.createElement("div");
      const printTypeOrDurationContainer = document.createElement("div");

      //Header
      const titleHeader = document.createElement("h3");
      const authorHeader = document.createElement("h3");
      const publisherHeader = document.createElement("h3");
      const dateHeader = document.createElement("h3");
      const bookTypeHeader = document.createElement("h3");
      const pagesOrNarratorHeader = document.createElement("h3");
      const printTypeOrDurationHeader = document.createElement("h3");

      const title = document.createElement("span");
      const author = document.createElement("span");
      const publisher = document.createElement("span");
      const date = document.createElement("span");
      const bookType = document.createElement("span");
      const pagesOrNarrator = document.createElement("span");
      const printTypeOrDuration = document.createElement("span");

      const deleteButton = document.createElement("button");
      const editButton = document.createElement("button");

      //Appending elements
      bookList.append(bookCard);
      bookCard.append(bookDetailsContainer, bookToolsContainer);
      bookDetailsContainer.append(
        titleContainer,
        authorContainer,
        publisherContainer,
        dateContainer,
        bookTypeContainer,
        pagesOrNarratorContainer,
        printTypeOrDurationContainer
      );
      titleContainer.append(titleHeader, title);
      authorContainer.append(authorHeader, author);
      publisherContainer.append(publisherHeader, publisher);
      dateContainer.append(dateHeader, date);
      bookTypeContainer.append(bookTypeHeader, bookType);
      pagesOrNarratorContainer.append(pagesOrNarratorHeader, pagesOrNarrator);
      printTypeOrDurationContainer.append(
        printTypeOrDurationHeader,
        printTypeOrDuration
      );
      bookToolsContainer.append(deleteButton, editButton);

      //Adding data
      titleHeader.textContent = "Title:";
      authorHeader.textContent = "Author:";
      publisherHeader.textContent = "Publisher:";
      dateHeader.textContent = "Date:";
      bookTypeHeader.textContent = "Book type:";
      pagesOrNarratorHeader.textContent =
        book.bookType === "printed-book" ? "Pages:" : "Narrator:";
      printTypeOrDurationHeader.textContent =
        book.bookType === "printed-book" ? "Print type:" : "Duration:";

      title.textContent = book.title;
      author.textContent = book.author;
      publisher.textContent = book.publisher;
      date.textContent = book.date;
      bookType.textContent = book.bookType;
      pagesOrNarrator.textContent =
        book.bookType === "printed-book" ? book.pages : book.narrator;
      printTypeOrDuration.textContent =
        book.bookType === "printed-book" ? book.printType : book.duration;
      deleteButton.textContent = "Delete";
      editButton.textContent = "Edit";

      //Adding classes
      bookList.classList.add("books__list");
      bookCard.classList.add("book-item");
      bookDetailsContainer.classList.add("book-item__details-container");
      bookToolsContainer.classList.add("book-item__tools-container");
      deleteButton.classList.add("book-item__delete-button");
      editButton.classList.add("book-item__edit-button");
    });
  }
}
export default Ui;
