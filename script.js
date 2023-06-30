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
    displayBooks();
    bookForm.reset();
});

closeBtn.addEventListener("click", function() {
    overlay.classList.add("hidden");
    formModal.classList.add("hidden");
    bookForm.reset();
})

function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = Boolean(read);
}
function addBookToLibrary() {
    let title = bookForm.elements["title"].value;
    let author = bookForm.elements["author"].value;
    let pages = bookForm.elements["pages"].value;
    let read = bookForm.elements["read"].checked;
    let book = new Book(title, author, pages, read);
    myLibrary.push(book);
    console.log(myLibrary);
}
function displayBooks() {
    library.innerHTML= "";
    myLibrary.forEach(function(book) {
        let bookCard = document.createElement("div");
        bookCard.classList.add("bookCard");
        let title = document.createElement("h2");
        title.textContent = book.title;
        let author = document.createElement("h3");
        author.textContent = book.author;
        let pages = document.createElement("h3");
        pages.textContent = book.pages;
        let read = document.createElement("h3");
        read.textContent = book.read ? "Read" : "Not Read";
        read.style.color = book.read ? "green" : "red";
        bookCard.appendChild(title);
        bookCard.appendChild(author);
        bookCard.appendChild(pages);
        bookCard.appendChild(read);
        library.appendChild(bookCard);
    });
}