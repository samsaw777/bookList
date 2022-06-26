// Book class to create a Book.
class Book {
  constructor(bookName, bookAuthor) {
    this.bookName = bookName;
    this.bookAuthor = bookAuthor;
  }
}

//UI class to display the UI of the application.
class UI {
  // Display method
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

    const books = storeBooks;

    books.forEach((book) => {
      UI.addBookToList(book);
    });
  }

  // book list function.
  static addBookToList(book) {
    const bookList = document.getElementById("bookList");

    const row = document.createElement("tr");

    row.innerHTML = `
    <td class="py-3 border-b border-gray-400 bg-white">${book.bookName}</td>
    <td class="py-3 border-b border-gray-400 bg-white">${book.bookAuthor}</td>
    <td class="py-3 border-b border-gray-400 bg-white">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-red-600 mx-auto" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </td>
    `;

    bookList.appendChild(row);
  }
}

//Events: Display books.
document.addEventListener("DOMContentLoaded", UI.displayBooks);

//Adding the book into the List from form.
document.getElementById("bookForm").addEventListener("submit", (e) => {
  // Preventing defauly submit.
  e.preventDefault();

  // Getting the book values.
  const bookName = document.getElementById("bookName").value;
  const bookAuthor = document.getElementById("bookAuthor").value;

  // Creating a object of the Book.
  const newBook = new Book(bookName, bookAuthor);

  console.log(newBook);

  // Adding the book to the UI.
  UI.addBookToList(newBook);
});
