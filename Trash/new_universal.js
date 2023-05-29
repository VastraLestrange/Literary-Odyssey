//var isbnGlobal = 0;
/*
alert("new_universal.js is running");
if (sessionStorage.getItem("isbnGlobal") === "null") {
  alert("isbnGlobal doesn't exist");
  setISBN(0);
}
else(
  alert("isbnGlobal does exist");
)
*/

/* this set of globals not currently in use
const isbnGlobal = 0;
const titleGlobal = 1;
const authorGlobal = 2;
const usernameGlobal = 0;
const reviewsGlobal = 1;
*/

///////////////////////DO NOT TOUCH////////////////////
//User database

//Functions to use:
//  - validate(username, password): RETURN [bool0, bool1]
//        bool0: true if the password and username matches the database
//                false else
//        bool1: true if the account is an admin and bool0 is true

//data: "username", "password", "admin"
//admin: true if its an admin account
//       false o/w
//arr[row][col]
let login_information = [
  ["davidTennant", "12345", true],
  ["mattSmith", "password", false],
  ["peterCapaldi", "pass", false],
  ["deanWinchester", "qwerty123", true],
  ["castiel", "passwordpassword", false],
]

/////////////// old universals ///////////////
function loadNavigationBar() {
  fetch("navigation-bar.html")
    .then(response => response.text())
    .then(data => {
      const navigationBar = document.createElement("div");
      navigationBar.innerHTML = data;
      document.getElementById("navigation-bar").appendChild(navigationBar);
    });
}

function loadFooter() {
  fetch("footer.html")
    .then(response => response.text())
    .then(data => {
      const foot = document.createElement("div");
      foot.innerHTML = data;
      document.getElementById("footer").appendChild(foot);
    });
}
/////////////// old universals ///////////////
function getUsername(row) {
  return login_information[row][0];
};


function getPassword(row) { return login_information[row][1]; };

function isAdmin(row) { return login_information[row][2]; };

function adminPage() {
  window.open('admin.html', '_blank');
}


function validate() {
  //RETURN: [bool, bool]
  //        [true, x]: if the username and password matches the one in the database
  //        [false, x]: else
  //        [true, true]: if the user is an admin
  //        [true, false]: if the user is not an admin
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;

  for (let row = 0; row < login_information.length; row++) {
    if ((getUsername(row) == username) && (getPassword(row) == password)) {
      if (isAdmin(row)) {
        adminPage();
        return [true, true];
      } else {
        alert("This is User");
        return [true, false];
      }
    }
  }
  alert("Wrong username or password!");
  return [false, false];
};


/////////////////////////DO NOT TOUCH////////////////////////
//book database

//Usuable functions:
//  - getBookDetails(isbn): RETURNS an array[isbn, title, author]
//          Accessing the array: arr[isbn], arr[title], arr[author]
//  - getReviews(isbn): RETURN an array of reviews[[username, reviews], [username, reviews], ....]
//          Accessing the array: arr[0][username]
//                               arr[0][reviews]
//                               arr[1][ursername]....
//  - getTitle(isbn): RETURN string of title
//  - getAuthor(isbn): RETURN string of author
//  - setNewBook(isbn, title, author): no returns
//  - setReview(isbn): no returns


//ISBN, Title, Author
let book = [[9780545010221, "Harry Potter and the Deathly Hallows", "J.K. Rowling"],
[9781982185824, "I'm glad my mom died", "Jennette McCurdy"],
[9780007525508, "The Hobbit", "J.R.R. Tolkien"],
[9783319110790, "Linear Algebra Done Right", "Sheldon Axler"],
[9780060173227, "To kill a mocking bird", "Lee, Harper"]
];


//bookReviews[i] All the reviews of book[i]
//bookReviews[[j]] Each individual reviews of book[i]
//bookReviews[[[username, review]]]


let bookReviews = [[["David", "My favourite book!"], ["Pauline", "I've read better but not bad."]],
[["Bean", "Best book ever!"], ["Jessica", "Worth a reread to be sure!"]],
[["Harris", "Very touching"]],
[["Floyd", "So much better than my professor!"]],
[["Wesley", "Classic"], ["Rupert", "Now I understand why everyone in school reads this!"]]
];


function getAddress(isbn) {
  //RETURN: the array address of that book
  //RETURN: -1 if not found

  for (let row = 0; row < book.length; row++) {
    if (isbn === book[row][0]) { return row; }
  }
  return -1;
};

function getBookDetails(isbn) {
  for (let row = 0; row < book.length; row++) {
    if (isbn === book[row][0]) { return book[row]; }
  }
  return [];
};

function getReviews(isbn) {
  //RETURN: an array of reviews
  //if ISBN not found, return empty array
  let add = getAddress(isbn);
  if (add != -1) { return bookReviews[add]; }
  else { return []; }
};

function getTitle(isbn) {
  let add = getAddress(isbn);
  if (add != -1) { return book[add][1]; }
  else { return []; }
};

function getAuthor(isbn) {
  let add = getAddress(isbn);
  if (add != -1) { return book[add][2]; }
  else { return []; }
};

function initializeReviews() { bookReviews.push([]); };

function setNewBook(isbn, title, author) {
  let arr = [isbn, title, author];
  book.push(arr);
  bookReviews.push([]);
};

function setReview(isbn, username, review) {
  let add = getAddress(isbn);
  let arr = [username, review];
  bookReviews[add].push(arr);
};


///////////////////////ADD OTHER FUNCTIONS HERE////////////////////


/////// new generic utilities ///////

//created for debugging because alert() would message twice
function report(text) {
  if (text != null) {
    alert(text);
    return false;
  }
}

function setISBN(isbn) {
  alert('setISBN() says hi');
  sessionStorage.setItem("isbnGlobal", isbn);
}

function getISBN() {
  return sessionStorage.getItem("isbnGlobal");
}

/////////////////////Book review page set up functions//////////////////
//these functions interact with book_review.html 
//they need to be called on when loading a book review page for a book with a specific isbn

//function setupBookReviewPage(isbn) {
//function setupBookReviewPage() {
function loadBookReviewPage() {

  alert(getISBN());

  const isbn = getGlobalISBN();
  //book_review_page_header is the id of an element in book_review.html
  var elementExists = document.getElementById("book_review_page_header");
  if (!elementExists) {
    window.alert("book_review_page_header not found!");
  }
  const review_page_header = document.getElementById("book_review_page_header");

  const bookAuthor = getAuthor(isbn);
  const bookTitle = getTitle(isbn);
  const tempBookReviews = getReviews(isbn);

  const tempTitleText = " Reviews of \"" + bookTitle + "\"";
  tempTitleElement = document.createElement("h1");
  tempTitleNode = document.createTextNode(tempTitleText.valueOf());
  tempTitleElement.appendChild(tempTitleNode);
  review_page_header.appendChild(tempTitleElement);

  const tempSubtitleText = " Written by " + bookAuthor + ". isbn: " + isbn;
  tempSubtitleElement = document.createElement("h3");
  tempSubtitleNode = document.createTextNode(tempSubtitleText.valueOf());
  tempSubtitleElement.appendChild(tempSubtitleNode);
  review_page_header.appendChild(tempSubtitleElement);

  tempBookReviews.forEach(insertBookReview);
}

function insertBookReview(bookReview) {
  //book_review_section is the id of an element in book_review.html
  var elementExists = document.getElementById("book_review_section");
  if (!elementExists) {
    window.alert("book_review_section not found!");
  }

  const review_section = document.getElementById("book_review_section");
  const tempNewReview = document.createElement("review");

  const userName = bookReview[0];
  const userBookReviewText = bookReview[1];

  const tempNewPara1 = document.createElement("p");
  const tempTextNode1 = document.createTextNode("\"" + userName + "\" says:");
  tempNewPara1.appendChild(tempTextNode1);
  tempNewReview.appendChild(tempNewPara1);

  const tempNewPara2 = document.createElement("p");
  const tempTextNode2 = document.createTextNode(userBookReviewText);
  tempNewPara2.appendChild(tempTextNode2);
  tempNewReview.appendChild(tempNewPara2);

  review_section.appendChild(tempNewReview);
}
