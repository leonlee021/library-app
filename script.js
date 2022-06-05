let myLibrary = [
    {title: "The Giver", author: "Lois Lowry", read: "Read"},{title: "How to Win Friends and Influence People", author: "Dale Carnegie", read: "Read"}
];

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

const $table = document
    .querySelector('table')
    .addEventListener('click',(e) => {
        const currentTarget = e.target.parentNode.parentNode.childNodes;
        if (e.target.innerHTML == 'DELETE'){
            if (confirm(`are you sure you want to delete ${currentTarget[1].innerText}`)){
                deleteBook(findLibraryIndex(currentTarget[1].innerText, currentTarget[3].innerText));
            }
        }
        else if (e.target.innerHTML == 'Read'){
            changeStatus(findLibraryIndex(currentTarget[1].innerText, currentTarget[3].innerText),'Read');
        }
        else if (e.target.innerHTML == 'Not Read'){
            changeStatus(findLibraryIndex(currentTarget[1].innerText, currentTarget[3].innerText),'Not Read');
        }
        render();
    })

function changeStatus(index, read_status){
    if (read_status == 'Read'){
        myLibrary[index].read = 'Not Read';
        return;
    }
    else{
        myLibrary[index].read = 'Read';
        return;
    }
}

function deleteBook(index){
    myLibrary.splice(index,1);
}

function findLibraryIndex(book_title, book_author){
    if (myLibrary.length == 0 || myLibrary === null){
        return;
    }
    else{
        for (let i = 0; i < myLibrary.length; i++){
            if (book_title === myLibrary[i].title && book_author === myLibrary[i].author){
                return i;
            }
        }
    }
}

var form = document.forms["form"];
form.onsubmit = function(e){
    e.preventDefault();
    var book_title = document.getElementById("book_title").value;
    var book_author = document.getElementById('book_author').value;
    var read_status = document.form.read_status.value;
    addBookToLibrary(book_title, book_author, read_status);
    render();
    document.getElementById("book_title").value = '';
    document.getElementById('book_author').value = '';
    document.form.read_status.value = "Read";
}

function render(){
    $tableBody.innerHTML = '';
    myLibrary.forEach((book) => {
        const displayedBook = `
            <tr>
                <td>${book.title}</td>
                <td>${book.author}</td>
                <td><button id = "status_button">${book.read}</button></td>
                <td><button id = "delete_button">DELETE</button><td>
            </tr>
            `;
        $tableBody.insertAdjacentHTML("afterbegin", displayedBook);
    });
}

render();
