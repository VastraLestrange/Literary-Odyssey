var book = [
  [9780545010221, "Harry Potter and the Deathly Hallows", "J.K. Rowling"],
  [9781982185824, "I'm glad my mom died", "Jennette McCurdy"],
  [9780007525508, "The Hobbit", "J.R.R. Tolkien"],
  [9783319110790, "Linear Algebra Done Right", "Sheldon Axler"],
  [9780060173227, "To kill a mocking bird", "Lee, Harper"]
  ];
  

function textModify() {
  var text = document.getElementById("book1-order");
  text.innerHTML = book[0][1];
  var text1 = document.getElementById("book2-order");
  text1.innerHTML = book[1][1];
  var text2 = document.getElementById("book3-order");
  text2.innerHTML = book[2][1];
  var text3 = document.getElementById("book4-order");
  text3.innerHTML = book[3][1];
  var text4 = document.getElementById("book5-order");
  text4.innerHTML = book[4][1];
}


function sortByISBN(book) {
  book.sort(function(a, b) {
    return a[0] - b[0];
    console.log(book);
  });
}

function sortByAuthor(book) {
  book.sort(function(x, y) {
    return x[2].localeCompare(y[2]);
  });
}

function sortByBook(book) {
  book.sort(function(x, y) {
    return x[1].localeCompare(y[1]);
  });
}

function orderISBN() {
  sortByISBN(book);
  textModify();
}

function orderAuthor() {
  sortByAuthor(book);
  textModify();
}

function orderBook() {
  sortByBook(book);
  textModify();
}
