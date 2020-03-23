// Book constructor
function Book(title, author, isbn) {
    this.title = title;
    this.author = author;
    this.isbn = isbn;
};





// UI constructor
function UI() { };

UI.prototype.addBookToList = function (book) {
    const list = document.getElementById("book-list");

    // create <tr> element
    const row = document.createElement("tr");
    row.innerHTML = `
    <td> ${book.title} </td>
    <td> ${book.author} </td>
    <td> ${book.isbn} </td>
    <td> <a href="#" class="delete">x</a> </td>
  `
    list.appendChild(row);
}
//Clean up the inputs after submit
UI.prototype.clearFields = function () {
    document.getElementById("title").value = "",
     document.getElementById("author").value = "",
     document.getElementById("isbn").value = "";

}

// show alert
UI.prototype.showAlert = function(message, className){
    //create div
    const div = document.createElement("div");
    //add class
     div = className = `alert alert-${className}`;
     div.appendChild(document.createTextNode(message));

     const alertM = document.getElementById("alert-message");
     alertM.appendChild(div);

     setTimeout(function(){
         document.querySelector(".alert").remove();

     }, 3000);

}

UI.prototype.removeBook = function(target){
    if(target.className == "delete") {
        target.parentElement.parentElement.remove();
    }
}




// add event listener
document.getElementById("book-form").addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById("title").value,
          author = document.getElementById("author").value,
          isbn = document.getElementById("isbn").value;

    // instantiate a book
    const book = new Book(title, author, isbn);

    // instantiate UI
    const ui = new UI();
    ui.addBookToList(book);
    ui.clearFields();
    ui.showAlert();

    if (title === "" || author ==="" || isbn ===""){
        //error alert
        ui.showAlert('Please fill in all fields', 'danger');
    }else {
        //add the book to the list
        ui.addBookToList(book);

        //show succes message
        ui.showAlert("book added!!!", 'success');

        //clean up the inputs
        ui.clearFields();
    }


});


//listen or remove book event
document.getElementById("book-list").addEventListener("click", function(e){
  e.preventDefault();

    //delete the book
    ui.removeBook(e.target);

    //show alert
    ui.showAlert("Book removed","success");
})
