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
    const books = LocalStore.getBooks();

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
    <td class="py-3 border-b border-gray-400 bg-white ">
      <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5 cursor-pointer text-red-600 mx-auto delete" viewBox="0 0 20 20" fill="currentColor">
        <path fillRule="evenodd" d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z" clipRule="evenodd" />
      </svg>
    </td>
    `;

    bookList.appendChild(row);
  }

  // Alert method.
  static showAlert(message, className) {
    const div = document.createElement("div");

    div.className = `px-3 py-3 my-2 rounded font-bold text-${className}-600 bg-${className}-100 alert`;

    div.appendChild(document.createTextNode(message));
    const container = document.getElementById("container");
    const formDiv = document.getElementById("bookForm");

    container.insertBefore(div, formDiv);

    // disapear after some time.
    setTimeout(() => document.querySelector(".alert").remove(), 3000);
  }

  // clear form field.
  static clearFileds() {
    document.getElementById("bookName").value = "";
    document.getElementById("bookAuthor").value = "";
  }

  //Deleting the books.
  static deleteBook(element) {
    console.log(element.parentElement);
    if (element.parentElement.classList.contains("delete")) {
      element.parentElement.parentElement.parentElement.remove();
      console.log("Deleting");
    }
  }
}

//Local storage class.
class LocalStore {
  static getBooks() {
    let books;

    if (localStorage.getItem("books") === null) {
      books = [];
    } else {
      books = JSON.parse(localStorage.getItem("books"));
    }

    return books;
  }

  static addBook(book) {
    const books = LocalStore.getBooks();

    books.push(book);
    localStorage.setItem("books", JSON.stringify(books));
  }

  static removeBook(bookName) {
    const books = LocalStore.getBooks();

    books.forEach((book, index) => {
      if (bookName === book.bookName) {
        console.log(true);
        books.splice(index, 1);
      }
    });

    localStorage.setItem("books", JSON.stringify(books));
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

  //Validate the fields
  if (bookName === "" || bookAuthor === "") {
    UI.showAlert("Please Fill all the fileds!", "red");
  } else {
    // Creating a object of the Book.
    const newBook = new Book(bookName, bookAuthor);

    // Adding the book to the UI.
    UI.addBookToList(newBook);

    //Add book to the store.
    LocalStore.addBook(newBook);

    UI.showAlert("Submited Book!", "green");

    //Cleaning the fields.
    UI.clearFileds();
  }
});

// Remove book fromt the UI.
document.getElementById("bookList").addEventListener("click", (e) => {
  //Remove from the UI.
  UI.deleteBook(e.target);

  //Removing book from localstorage.
  LocalStore.removeBook(
    e.target.parentElement.parentElement.previousElementSibling
      .previousElementSibling.textContent
  );

  // console.log(
  //   e.target.parentElement.parentElement.previousElementSibling
  //     .previousElementSibling.textContent
  // );

  // Show status.
  UI.showAlert("Book Removed!", "green");
});
