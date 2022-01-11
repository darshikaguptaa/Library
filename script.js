let newButton = document.getElementById("new-book");
let formBox = document.getElementById("container");
let submitButton = document.getElementById("submit");
let bookDiv = document.getElementById("books");
let myForm = document.getElementById("my-form");

let formOpen = false;

function newBook(name,author,pages)
{
    this.name = name;
    this.author= author;
    this.pages = pages;
}

let books = []

newButton.addEventListener("click",()=>{
    if(formOpen===false)
    {
        formBox.style.transform ="scale(1)";
        formOpen = true;  
    }
})

submitButton.addEventListener("click",(event)=>{ 
    event.preventDefault()

    let nameInput = document.getElementById("name").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    
    let x = new newBook(nameInput,authorInput,pagesInput);
    books.push(x);
    console.log(books);
    
    let nameNode = document.createElement('div');
    nameNode.classList.add("book");
    nameNode.innerText = `Name = ${x.name}`
    bookDiv.appendChild(nameNode);
    
    let authorNode = document.createElement('h2');
    authorNode.innerText = `Author = ${x.author}`
    nameNode.appendChild(authorNode)
    
    let pageNode = document.createElement('h2');
    pageNode.innerText = `Number of pages = ${x.pages}`
    nameNode.appendChild(pageNode)
    
    var readButton = document.createElement("button");
    readButton.innerText = "read"
    nameNode.appendChild(readButton)

    readButton.addEventListener("click", ()=>{
        if (readButton.innerText == "read"){
            readButton.innerText = "not read"
        }
        else if(readButton.innerText == "not read"){
            readButton.innerText = "read"
        }
    })
    // let readNode = document.createElement('h2');
    // readNode.innerText = `Read = ${x.read}`
    // nameNode.appendChild(readNode)


    formBox.style.transform ="scale(0)";
    formOpen = false;

})





