import Ui from "./ui.js";

// Select DOM elements
const openAddModalButton = document.querySelector(".add-books__button");
const closeAddModalButton = document.querySelector(".form__cancel-button");
const formModal = document.querySelector(".form__modal");
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

//Selecting elements specific to PRINTED books
const pagesInput = document.querySelector(".form__pages-input");
const pagesPrintType = document.querySelector(".form__print-type");

//Selecting elements specific to AUDIO books
const narratorInput = document.querySelector(".form__narrator-input");
const durationInput = document.querySelector(".form__duration-input");

// All elements in printed and audio category
const printedFields = [
  document.querySelector(
    ".form__pages-input",
    document.querySelector(".form__print-type")
  ),
];
const audioFields = [
  document.querySelector(
    ".form__narrator-input",
    document.querySelector(".form__duration-input")
  ),
];

// Adding eventlisteners
bookTypeDropdown.addEventListener("change", () => {
  Ui.toggleBookTypeFields(
    printedBookContainer,
    audioBookContainer,
    printedFields,
    audioFields,
    bookTypeDropdown.value
  );
});
