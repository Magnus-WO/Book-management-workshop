import Ui from "./ui.js";
import BookManager from "./bookManager.js";
import Validation from "./validation.js";

// Select DOM elements
const openAddModalButton = document.querySelector(".add-books__button");
const closeAddModalButton = document.querySelector(".form__cancel-button");
const formModal = document.querySelector(".form-modal");
const printedBookContainer = document.querySelector(".form__printed-book");
const audioBookContainer = document.querySelector(".form__audio-book");

//Selecting form inputs
const form = document.querySelector(".form");
const title = document.querySelector(".form__title-input");
const author = document.querySelector(".form__author-input");
const publisher = document.querySelector(".form__publisher-input");
const date = document.querySelector(".form__publication-date-input");
const bookTypeDropdown = document.querySelector(".form__book-type");

const filterContainer = document.querySelector(".filter-books");
const formSubmitButton = document.querySelector(".form__add-button");
const validationMessage = document.querySelector(".form__validation-message");

//Selecting elements specific to PRINTED books
const pagesInput = document.querySelector(".form__pages-input");
const pagesPrintType = document.querySelector(".form__print-type");

//Selecting elements specific to AUDIO books
const narratorInput = document.querySelector(".form__narrator-input");
const durationInput = document.querySelector(".form__duration-input");

// All elements in printed and audio category
const printedFields = [
  document.querySelector(".form__pages-input"),
  document.querySelector(".form__print-type"),
];
const audioFields = [
  document.querySelector(".form__narrator-input"),
  document.querySelector(".form__duration-input"),
];

// Adding eventlisteners
document.addEventListener("DOMContentLoaded", () => {
  Ui.displayAddModal(
    openAddModalButton,
    formModal,
    printedBookContainer,
    audioBookContainer
  );
  Ui.closeAddModal(
    closeAddModalButton,
    formModal,
    form,
    validationMessage,
    formSubmitButton
  );
  Ui.closeDeleteModal();
  Ui.renderBooks();
});

// document.addEventListener("click", () => {});

bookTypeDropdown.addEventListener("change", () => {
  Ui.toggleBookTypeFields(
    printedBookContainer,
    audioBookContainer,
    printedFields,
    audioFields,
    bookTypeDropdown.value
  );
});

form.addEventListener("submit", (e) => {
  e.preventDefault();
  if (!Validation.validateForm(bookTypeDropdown.value, validationMessage)) {
    return;
  }
  if (!Ui.currentEditId) {
    BookManager.addBook(
      title.value.trim(),
      author.value.trim(),
      publisher.value.trim(),
      date.value,
      bookTypeDropdown.value,
      pagesInput.value.trim(),
      pagesPrintType.value,
      narratorInput.value.trim(),
      durationInput.value
    );
  } else {
    BookManager.editBook(
      Ui.currentEditId,
      title.value.trim(),
      author.value.trim(),
      publisher.value.trim(),
      date.value,
      bookTypeDropdown.value,
      pagesInput.value.trim(),
      pagesPrintType.value,
      narratorInput.value.trim(),
      durationInput.value
    );
    Ui.currentEditId = null;
    formModal.classList.remove("display-form");
    formSubmitButton.textContent = "Add";
  }
  Ui.renderBooks();
  form.reset();
});

filterContainer.addEventListener("click", (e) => {
  if (e.target.classList.contains("filter-books__button--all")) {
    Ui.renderBooks("all");
  } else if (e.target.classList.contains("filter-books__button--printed")) {
    Ui.renderBooks("printed-book");
  } else if (e.target.classList.contains("filter-books__button--audio")) {
    Ui.renderBooks("audio-book");
  }
});
