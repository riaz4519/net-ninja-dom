var tittles = document.getElementsByClassName('title');

/*console.log(Array.isArray(tittles));
console.log(Array.isArray(Array.from(tittles)));*/

Array.from(tittles).forEach(function (title) {
    console.log(title)
});
