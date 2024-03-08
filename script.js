const cardContainer = document.querySelector(".card-container");

const myLibrary = [
  {
    title: "Feel Good Productivity",
    author: "Ali Abdaal",
    numPages: 266,
    read: "not read"
  },
  {
    title: "Die Tiermagierin - Schattentanz",
    author: "Maxym M. Martineau",
    numPages: 512,
    read: "read"
  }
];


function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}


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


function addBookToLibrary() {
  const title = prompt("Book title: ");
  const author = prompt("Book author: ");
  const numPages = prompt("Number of pages: ");
  const readStatus = prompt("Have you read it? ");

  const newBook = new Book(title, author, numPages, readStatus);
  myLibrary.push(newBook);
}


function displayBooksInLibrary() {
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
      console.log(myLibrary);
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