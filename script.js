let myLibrary = [];

const newBookBtn = document.querySelector("button#new");
const library = document.querySelector("div.library");
const bookForm= document.querySelector("form#bookForm");
const overlay = document.querySelector("div#overlay");
const formModal = document.querySelector("div#formModal");
const closeBtn = document.querySelector("#bookForm .close");

newBookBtn.addEventListener("click", function() {
    overlay.classList.remove("hidden");
    formModal.classList.remove("hidden");
});
bookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    addBookToLibrary();
    overlay.classList.add("hidden");
    formModal.classList.add("hidden");
    bookForm.reset();
});

closeBtn.addEventListener("click", function() {
    overlay.classList.add("hidden");
    formModal.classList.add("hidden");
    bookForm.reset();
})

class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = Boolean(read);
    }

    get getRead() {
        return this.read;
    }
    set setRead(read) {
        this.read = read;
    }

}
function addBookToLibrary() {
    let title = bookForm.elements["title"].value;
    let author = bookForm.elements["author"].value;
    let pages = bookForm.elements["pages"].value;
    let read = bookForm.elements["read"].checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    library.appendChild(createBook(book));
}
function displayBooks() {
    library.innerHTML= "";
    myLibrary.forEach(function(book) {
        let bookCard= createBook(book);
        library.appendChild(bookCard);
    });
}

function createBook(book) {
    let bookCard = document.createElement("div");
    bookCard.classList.add("bookCard");

    let deleteBtn = document.createElement("button");
    deleteBtn.classList.add("delete");

    let img = document.createElement("img");
    img.setAttribute("src", "./icons/close-box.svg");
    img.setAttribute("width", "40");
    img.setAttribute("height", "40");
    deleteBtn.appendChild(img);

    deleteBtn.addEventListener("click", function() {
        myLibrary.splice(myLibrary.indexOf(book), 1);
        displayBooks();
    });

    let title = document.createElement("h2");
    title.textContent = book.title;
    let author = document.createElement("h3");
    author.textContent = "By: "+ book.author;
    let pages = document.createElement("h3");
    pages.textContent = book.pages + " pages"
    let read = document.createElement("button");
    read.classList.add("readBtn");
    read.addEventListener("click", () => changeReadStatus(book, read));
    read.textContent = book.read ? "Read" : "Not Read";
    read.style.backgroundColor = book.read ? "green" : "red";

    bookCard.appendChild(deleteBtn);
    bookCard.appendChild(title);
    bookCard.appendChild(author);
    bookCard.appendChild(pages);
    bookCard.appendChild(read);
    return bookCard;
}

function changeReadStatus(book, readBtn) {
    book.setRead = !book.getRead;
    updateReadButton(book, readBtn);
}

function updateReadButton(book, readBtn) {
    readBtn.textContent = book.read ? "Read" : "Not Read";
    readBtn.style.backgroundColor = book.read ? "green" : "red";
}