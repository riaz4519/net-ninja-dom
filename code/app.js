var wmf = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(wmf);

var books = document.querySelectorAll('#book-list li .name');

console.log(books);

//looping through the array

Array.from(books).forEach(function (book) {

console.log(book);

});