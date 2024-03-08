const myLibrary = [];

function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`;
}


function addBookToLibrary() {
  const title = prompt("Book title: ");
  const author = prompt("Book author: ");
  const numPages = prompt("Number of pages: ");
  const readStatus = prompt("Have you read it? ");

  const newBook = new Book(title, author, numPages, readStatus);
  myLibrary.push(newBook);
  test();
}

// Test data
const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 196, "not read yet");

console.log(theHobbit.info())