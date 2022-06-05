let myLibrary = [];

function Book(title, author, read){
    this.title = title;
    this.author = author;
    this.read = read;
}

function addBookToLibrary(input_title, input_author, input_status){
    myLibrary.push({title:input_title, author:input_author, read:input_status});
}

function displayLibrary(){
    for (let i=0; i < myLibrary.length; i++){
        console.log(myLibrary[i]);
    }
}

let $tableBody = document.querySelector('#table_body');


var form = document.forms["form"];
form.onsubmit = function(e){
    e.preventDefault();
    var book_title = document.getElementById("book_title").value;
    var book_author = document.getElementById('book_author').value;
    var read_status = document.form.read_status.value;
    addBookToLibrary(book_title, book_author, read_status);
    render();
    console.log(myLibrary);
}

function render(){
    $tableBody.innerHTML = '';
    myLibrary.forEach((book) => {
        const displayedBook = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
            </tr>
            `;
        $tableBody.insertAdjacentHTML("afterbegin", displayedBook);
    });
}

render();