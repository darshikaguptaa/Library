import { sendData } from "./dist/post-request.js";

const newBookBtn = document.getElementById("new-book");
const formBox = document.getElementById("container");
const submitButton = document.getElementById("submit");
const bookDiv = document.getElementById("books");
const closeButton = document.getElementById("close");

let formOpen = false;

class Book {
	constructor(name, author, pages) {
		this.name = name;
		this.author = author;
		this.pages = pages;
	}
}

const books = [];

newBookBtn.addEventListener("click", () => {
	if (formOpen === false) {
		formBox.style.transform = "scale(1)";
		formOpen = true;
	}
});

submitButton.addEventListener("click", (event) => {
	event.preventDefault();

	const bookName = document.getElementById("name").value;
	const authorName = document.getElementById("author").value;
	const pageCount = document.getElementById("pages").value;

	const newBook = new Book(bookName, authorName, pageCount);
	books.push(newBook);
	console.log(newBook);
	console.log(books);

	sendData(newBook);

	localStorage.setItem("Book", JSON.stringify(books));
	addOne(newBook);

	formBox.style.transform = "scale(0)";
	formOpen = false;
});

closeButton.addEventListener("click", (event) => {
	event.preventDefault();
	if (formOpen) {
		formBox.style.transform = "scale(0)";
		formOpen = false;
		return;
	}
});

if (books.length == 0) {
	if (localStorage.length == 0) {
		books = [];
	} else {
		books = JSON.parse(localStorage.getItem("Book"));
	}
	add();
}

function add() {
	for (const obj of books) {
		console.log(obj);
		addOne(obj);
	}
}

function addOne(obj) {
	const nameNode = document.createElement("div");
	nameNode.classList.add("book");
	nameNode.textContent = `Name = ${obj.name}`;
	bookDiv.appendChild(nameNode);

	const authorNode = document.createElement("p");
	authorNode.textContent = `Author = ${obj.author}`;
	nameNode.appendChild(authorNode);

	const pageNode = document.createElement("p");
	pageNode.textContent = `No. of pages = ${obj.pages}`;
	nameNode.appendChild(pageNode);
}
