// Book class to create a Book.
class Book {
  constructor(bookName, bookAuthor) {
    this.bookName = bookName;
    this.author = bookAuthor;
  }
}

//UI class to display the UI of the application.
class UI {
  static displayBooks() {
    const storeBooks = [
      {
        bookName: "Begineer guide to javascript",
        bookAuthor: "Sameep Sawant",
      },
      {
        bookName: "React road map",
        bookAuthor: "Jon Show",
      },
    ];
  }
}
