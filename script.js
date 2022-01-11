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
    books.push(x);
    console.log(books);
    

    let nameNode = document.createElement('div');
    nameNode.classList.add("book");
    nameNode.innerText = `Name = ${x.name}`
    bookDiv.appendChild(nameNode);
    
    let authorNode = document.createElement('p');
    authorNode.innerText = `Author = ${x.author}`
    nameNode.appendChild(authorNode)
    
    let pageNode = document.createElement('p');
    pageNode.innerText = `No. of pages = ${x.pages}`
    nameNode.appendChild(pageNode)
    
    var readButton = document.createElement("button");
    readButton.innerText = "Read"
    readButton.classList.add("read")
    nameNode.appendChild(readButton)

    readButton.addEventListener("click", ()=>{
        if (readButton.innerText == "Read"){
            readButton.innerText = "Not Read"
        }
        else if(readButton.innerText == "Not Read"){
            readButton.innerText = "Read"
        }
    })
    formBox.style.transform ="scale(0)";
    formOpen = false;

    closeButton.addEventListener("click",(event)=>{

        event.preventDefault()
        if(formOpen)
        {
            formBox.style.transform =" scale(0)"
            formOpen =  false;
            return
        }

    })

    // myForm.reset();

})








