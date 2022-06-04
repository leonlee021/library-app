let myLibrary = [];

function Book(title, author, pages, read){
    this.title = title.toString();
    this.author = author.toString();
    this.pages = pages.toString();
    this.read = read.toString();
    this.info = function(){
        return title + " by " + author + ", " + pages + " pages, " + read;
    }
}

function addBookToLibrary(){
    const inputBook = new Book(prompt("Title?"), prompt("Author?"), prompt("Pages?"), prompt("Read?"));
    myLibrary.push({title:inputBook.title, author:inputBook.author, pages:inputBook.pages, read:inputBook.read});
}

addBookToLibrary()

function displayLibrary(){
    for (let i=0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}
