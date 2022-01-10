let newButton = document.getElementById("new-book");
let formBox = document.getElementById("container");
let submitButton = document.getElementById("submit");
let bookDiv = document.getElementById("books");
// let nameInput = getElementById("name"); 
// let authorInput = getElementById("author");
// let pagesInput = getElementById("pages");
// let readInput = getElementById("name");
let formOpen = false;

function newBook(name,author,pages)
{
    this.name = name;
    this.author= author;
    this.pages = pages;
    // this.read = read
}

let books = [
    {
        name : "Harry Potter",
        author : "J.K.Rowling",
        pages : 500,
        read : "Yes"
    },
    {
        name : "Harry Potter",
        author : "J.K.Rowling",
        pages : 500,
        read : "Yes"
    }
]



books.forEach((book=>{
    let nameNode = document.createElement('div');
    nameNode.classList.add("book");
    nameNode.innerText = `Name = ${book.name}`
    bookDiv.appendChild(nameNode);

    let authorNode = document.createElement('h2');
    authorNode.innerText = `Author = ${book.author}`
    nameNode.appendChild(authorNode)

    let pageNode = document.createElement('h2');
    pageNode.innerText = `Number of pages = ${book.pages}`
    nameNode.appendChild(pageNode)

    let readNode = document.createElement('h2');
    readNode.innerText = `Read = ${book.read}`
    nameNode.appendChild(readNode)
}))

newButton.addEventListener("click",()=>{
    if(formOpen===false)
    {
        formBox.style.transform ="scale(1)";
        formOpen = true;  
    }
})

submitButton.addEventListener("click",()=>{
    formBox.style.transform ="scale(0)";
    formOpen = false;
})


