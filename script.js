function Book(title, author, numPages, read) {
  this.title = title;
  this.author = author;
  this.numPages = numPages;
  this.read = read;
}

Book.prototype.info = function() {
  return `${this.title} by ${this.author}, ${this.numPages} pages, ${this.read}`;
}

const theHobbit = new Book("The Hobbit", "J.R.R. Tolkien", 196, "not read yet");

console.log(theHobbit.info())