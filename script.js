let myLibrary = [];

const newBookBtn = document.querySelector("button#new");
const library = document.querySelector("div.library");
const bookForm= document.querySelector("form#bookForm");
const overlay = document.querySelector("div#overlay");
const formModal = document.querySelector("div#formModal");

newBookBtn.addEventListener("click", function() {
    overlay.classList.remove("hidden");
    formModal.classList.remove("hidden");
});

bookForm.addEventListener("submit", function(e) {
    e.preventDefault();
    overlay.classList.add("hidden");
    formModal.classList.add("hidden");


});
