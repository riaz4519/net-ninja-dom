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
/*

const bookList = document.querySelector('#book-list');

//finding the parent node

console.log(bookList.parentNode);
console.log(bookList.parentElement.parentElement);

console.log(bookList.childNodes);

console.log(bookList.children);
*/

/*8*/

/*
const  bookList = document.querySelector('#book-list');

console.log('book lists next sibling is ',bookList.nextSibling);
console.log('book lists next sibling is ',bookList.nextElementSibling);

console.log('book lists next sibling is ',bookList.previousSibling);
console.log('book lists next sibling is ',bookList.previousElementSibling);

*/

/*9*/
/*
var h2 = document.querySelector('#book-list h2');

h2.addEventListener('click',function (event) {

    console.log(event.target.nodeName)

});*/

var btns = document.querySelectorAll('#book-list .delete');

Array.from(btns).forEach(function (btn) {

    btn.addEventListener("click",function (event) {

        const  li = event.target.parentNode;

        li.parentNode.removeChild(li);
    });

});



