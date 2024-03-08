const cardContainer = document.querySelector(".card-container");
const dialog = document.querySelector("dialog");
const newBookBtn = document.querySelector(".new-book-btn");
const closeModalBtn = document.querySelector(".close-modal-btn");
const bookForm = document.querySelector("#book-form");

const myLibrary = [];


function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

newBookBtn.addEventListener("click", function() {
  dialog.show();
});

closeModalBtn.addEventListener("click", function(event) {
  event.preventDefault();
  dialog.close();
})

bookForm.addEventListener("submit", event => {
  event.preventDefault();

  const title = document.querySelector("#title");
  const author = document.querySelector("#author");
  const pages = document.querySelector("#pages");
  const readingStatus = document.querySelector('input[name="reading-status"]:checked');
  const defaultRadioButton = document.querySelector("#not-read");


  addBookToLibrary(title.value, author.value, pages.value, readingStatus.value);

  // reset to default
  title.value = "";
  author.value = "";
  pages.value = "";
  readingStatus.checked = false;
  defaultRadioButton.checked = true;

  dialog.close();
});


Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`;
}


Book.prototype.toggleReadStatus = function() {
  if (this.read === "read") {
    this.read = "not read";
  } else if (this.read === "not read") {
    this.read = "read";
  }
}


function addBookToLibrary(title, author, numPages, readStatus) {
  const newBook = new Book(title, author, numPages, readStatus);
  myLibrary.push(newBook);
  displayBooksInLibrary();
}


function resetDisplay() {
  const cards = document.querySelectorAll(".card");
  cards.forEach((card) => {
    card.remove();
  });
}


function displayBooksInLibrary() {
  resetDisplay();

  for (const book of myLibrary) {
    const index = myLibrary.indexOf(book);

    const card = document.createElement("div");
    card.setAttribute("class", "card")
    card.setAttribute("data-index", index);

    const titlePara = document.createElement("p");
    const authorPara = document.createElement("p");
    const pagesPara = document.createElement("p");
    const readStatusPara = document.createElement("p");

    const deleteButton = document.createElement("button");
    deleteButton.setAttribute("class", "delete-btn btn");
    const toggleReadStatusButton = document.createElement("button");
    toggleReadStatusButton.setAttribute("class", "toggle-read-btn btn");

    toggleReadStatusButton.addEventListener("click", book.toggleReadStatus);

    deleteButton.addEventListener("click", function() {
      const cardToDelete = document.querySelector(`[data-index="${index}"]`);
      cardToDelete.remove();
      myLibrary.splice(myLibrary.indexOf(book), 1);
    });


    titlePara.textContent = `Title: ${book.title}`;
    authorPara.textContent = `Author: ${book.author}`;
    pagesPara.textContent = `Number of Pages: ${book.numPages}`;
    readStatusPara.textContent = `Reading status: ${book.read}`;
    deleteButton.textContent = "Remove Book";
    toggleReadStatusButton.textContent = "Edit";

    card.appendChild(titlePara);
    card.appendChild(authorPara);
    card.appendChild(pagesPara);
    card.appendChild(readStatusPara);
    readStatusPara.appendChild(toggleReadStatusButton);
    card.appendChild(deleteButton);
    cardContainer.appendChild(card)
  }
}

displayBooksInLibrary();


// Test data
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 196, "not read");
theHobbit.toggleReadStatus();

console.log(theHobbit.info());