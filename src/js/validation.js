class Validation {
  static validateForm(bookType, validationMessage) {
    validationMessage.style.display = "none";
    const fieldsToValidate = [
      { name: "title", message: "please enter the book title" },
      { name: "author", message: "please enter the books author" },
      { name: "publisher", message: "please enter the publisher of the book" },
      {
        name: "publication-date",
        message: "please enter the publication date",
      },
      { name: "book-type", message: "please select the type of the book" },
    ];

    if (bookType === "printed-book") {
      fieldsToValidate.push(
        { name: "pages", message: "please enter the number of pages" },
        { name: "print-type", message: "please select the print-type" }
      );
    } else if (bookType === "audio-book") {
      fieldsToValidate.push(
        { name: "narrator", message: "please enter the narrator(s)" },
        { name: "duration", message: "please enter the duration" }
      );
    }
    for (let field of fieldsToValidate) {
      const inputField = document.querySelector(`[id = ${field.name}]`);

      inputField.addEventListener("input", () => {
        inputField.classList.remove("form__invalid-input");
        validationMessage.textContent = "";
      });
      document
        .querySelector(".form__cancel-button")
        .addEventListener("click", () => {
          inputField.classList.remove("form__invalid-input");
        });

      if (!inputField.value.trim()) {
        validationMessage.style.display = "block";
        validationMessage.textContent = field.message;
        inputField.classList.add("form__invalid-input");
        return false;
      }
    }

    return true;
  }
}

export default Validation;
