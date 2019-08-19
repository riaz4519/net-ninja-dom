/*
var wmf = document.querySelector('#book-list li:nth-child(2) .name');

//console.log(wmf);

var books = document.querySelectorAll('#book-list li .name');

console.log(books);

//looping through the array

Array.from(books).forEach(function (book) {

console.log(book);

});*/


/*5*/
/*var books = document.querySelectorAll('#book-list li .name');

Array.from(books).forEach(function (book) {

    book.textContent += '(book title)';
});

const bookList = document.querySelector('#book-list');

bookList.innerHTML = "<h1>Hello world</h1>"*/

/*6*/

/*const banner = document.querySelector('#page-banner');

console.log(banner.nodeType);
console.log(banner.nodeName);
console.log(banner.hasChildNodes());*/

/*7*/

const bookList = document.querySelector('#book-list');

//finding the parent node

console.log(bookList.parentNode);
console.log(bookList.parentElement.parentElement);

console.log(bookList.childNodes);

console.log(bookList.children);




