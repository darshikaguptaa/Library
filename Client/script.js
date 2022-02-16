let newButton = document.getElementById("new-book");
let formBox = document.getElementById("container");
let submitButton = document.getElementById("submit");
let bookDiv = document.getElementById("books");
let myForm = document.getElementById("my-form");
let closeButton = document.getElementById("close");

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

submitButton.addEventListener('click',(event)=>{ 

    
    event.preventDefault()
    
    let nameInput = document.getElementById("name").value;
    let authorInput = document.getElementById("author").value;
    let pagesInput = document.getElementById("pages").value;
    
    let x = new newBook(nameInput,authorInput,pagesInput);
    console.log(x)
    books.push(x);
    console.log(books);

    localStorage.setItem("Book",JSON.stringify(books)); 
    addOne(x)

    formBox.style.transform ="scale(0)";
    formOpen = false;
    
})
closeButton.addEventListener("click",(event)=>{
    
    event.preventDefault()
    if(formOpen)
    {
        formBox.style.transform ="scale(0)"
        formOpen =  false;
        return
    }
    
})

if (books.length==0){
    if (localStorage.length == 0){
        books = []
    }
    else{
        books = JSON.parse(localStorage.getItem("Book"))
    }
    add()
}

function add(){
    for (const obj of books) {
        console.log(obj)
        addOne(obj)
    }
}



function addOne(obj){
    let nameNode = document.createElement('div');
    nameNode.classList.add("book");
    nameNode.textContent = `Name = ${obj.name}`
    bookDiv.appendChild(nameNode);
    
    let authorNode = document.createElement('p');
    authorNode.textContent = `Author = ${obj.author}`
    nameNode.appendChild(authorNode)
    
    let pageNode = document.createElement('p');
    pageNode.textContent = `No. of pages = ${obj.pages}`
    nameNode.appendChild(pageNode)
}







