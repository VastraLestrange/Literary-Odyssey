const isbn = 0;
const title = 1;
const author = 2;
const html_link = 3;
const image = 4;
const username = 0;
const review = 1;
let user_username = "NULL";
let is_user_admin = false;
sessionStorage.setItem("logged_in", false);

///////////////////////// Navigation Bar and Footer ///////////////////////////////////

function loadNavigationBar() {
      var nav_bar = document.getElementsByClassName("navigation-bar")[0];
  
      var main_link = document.createElement("a");
      if(isAdmin){main_link.href = "index.html";}
      else{main_link.href = "admin.html";}
      main_link.setAttribute("class", "nav-main-page-link");
      main_link.textContent = "Main";
      nav_bar.appendChild(main_link);
  
      var review_link = document.createElement("a");
      review_link.href = "book_review.html";
      review_link.setAttribute("class", "nav-review-page-link");
      review_link.textContent = "Reviews";
      nav_bar.appendChild(review_link);

      var login_button = document.createElement("button");
          login_button.setAttribute("type", "button");
          login_button.setAttribute("class", "login-button-in-nav");
          var login_button_link = document.createElement("a");
          login_button_link.setAttribute("href", "login.html");
          login_button_link.textContent = "Login";
          login_button.appendChild(login_button_link);
          nav_bar.appendChild(login_button);

      var logout_button = document.createElement("button");
              logout_button.setAttribute("type", "button");
              logout_button.setAttribute("class", "logout-button-in-nav");
              var logout_button_link = document.createElement("a");
              logout_button_link.setAttribute("href", "logout.html");
              logout_button_link.textContent = "Logout";
              logout_button.appendChild(logout_button_link);
              nav_bar.appendChild(logout_button);
      /*
      var is_logged_in = sessionStorage.getItem("logged_in");
  console.log(is_logged_in);
      if(document.getElementsByClassName("login-button-in-nav")){
        console.log("1");
        var removeDiv = document.getElementsByClassName("login-button-in-nav")[0];
        if (removeDiv) {
          removeDiv.remove();
        }
        console.log("2");
      }
      if((is_logged_in)){
        var login_button = document.createElement("button");
        login_button.setAttribute("type", "button");
        login_button.setAttribute("class", "login-button-in-nav");
        var login_button_link = document.createElement("a");
        login_button_link.setAttribute("href", "login.html");
        login_button_link.textContent = "Login";
        login_button.appendChild(login_button_link);
        nav_bar.appendChild(login_button);
      }
      else{
        var logout_button = document.createElement("button");
          logout_button.setAttribute("type", "button");
          logout_button.setAttribute("class", "login-button-in-nav");
          var logout_button_link = document.createElement("a");
          logout_button_link.setAttribute("href", "logout.html");
          logout_button_link.textContent = "Logout";
          logout_button.appendChild(logout_button_link);
          nav_bar.appendChild(logout_button);
      }*/
}

function loadFooter() {
  var footer = document.getElementsByClassName("footer")[0];
  footer.textContent = "Footer here";
}

/////////////////////////// USER DATABASE //////////////////////////////////
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
  ["admin", "ap", true],
  ["user", "up", false],
]

function getUsername(row) {return login_information[row][0];};
function getPassword(row) { return login_information[row][1]; };
function isAdmin(row) { return login_information[row][2]; };

function validate(username, password) {
  //RETURN: [bool, bool]
  //        [true, x]: if the username and password matches the one in the database
  //        [false, x]: else
  //        [true, true]: if the user is an admin
  //        [true, false]: if the user is not an admin

  for (let row = 0; row < login_information.length; row++) {
    if ((getUsername(row) == username) && (getPassword(row) == password)) {
      if (isAdmin(row)) {
        adminPage();
        return [true, true];
      } else {
        return [true, false];
      }
    }
  }
  return [false, false];
};

/////////////////////// BOOK DATABASE /////////////////////////////
/////////////////////////DO NOT TOUCH////////////////////////
//book database

//Usuable functions:
//  !!!!!! Each function here has an id alternate !!!!!
//  - getBookDetails(isbn): RETURNS an array[isbn, title, author]
//          Accessing the array: arr[isbn], arr[title], arr[author]
//  - getReviews_isbn(isbn): RETURN an array of reviews[[username, reviews], [username, reviews], ....]
//          Accessing the array: arr[0][username]
//                               arr[0][reviews]
//                               arr[1][ursername]....
//  - getTitle(isbn): RETURN string of title
//  - getAuthor(isbn): RETURN string of author
//  - setNewBook(isbn, title, author): no returns
//  - setReview(isbn): no returns
//  - function getNumberofBooks()
//  - function getNumberofReviews_id(id)
//  - function getUsernameofReview_id(book_index, review_index)
//  - function getReviewofUsername_id(book_index, review_index)


//ISBN, Title, Author, HTML_Link, image
let book = [
  [9780545010221, "Harry Potter and the Deathly Hallows", "J.K. Rowling", "book1.html", "Images/harry-potter.jpg"],
  [9781982185824, "I'm glad my mom died", "Jennette McCurdy", "book2.html", "/Images/im-glad-my-mom-died.jpg"],
  [9780007525508, "The Hobbit", "J.R.R. Tolkien", "book3.html", "/Images/the-hobbit.jpg"],
  [9783319110790, "Linear Algebra Done Right", "Sheldon Axler", "book4.html", "/Images/linear-algebra-done-right.jpg"],
  [9780060173227, "To kill a mocking bird", "Lee, Harper", "book5.html", "/Images/to-kill-a-mocking-bird.jpg"]
];


//bookReviews[i] All the reviews of book[i]
//bookReviews[[j]] Each individual reviews of book[i]
//bookReviews[[[username, review]]]


let bookReviews = [
  [["castiel", "My favourite book!"], ["deanWinchester", "I've read better but not bad."], ["peterCapaldi", "I can't put this book down until I'm done with it"], ["mattSmith", "Amazing!"], ["davidTennant", "Best cure to all the worries is the entire Harry potter series! Super charismatic work by JK Rowling . Harry potter was my first ever series and its been phenomenal. Every part is unique in itself . I loved the character development ,scenario settings , display of the book from protagonist's perspective, beautiful portray of alliteration and many many more ( the list goes endless..) ...!!"]],
  
  [["peterCapaldi", "Best book ever!"], ["mattSmith", "Worth a reread to be sure!"]],
  [["castiel", "Very touching"]],
  [["peterCapaldi", "So much better than my professor!"], ["mattSmith", "The book made me like linear algebra"]],
  [["davidTennant", "Classic"], ["deanWinchester", "Now I understand why everyone in school reads this!"]]
];

function getNumberofBooks(){
  return book.length;
}

function getNumberofReviews_id(id){
  return bookReviews[id].length;
}

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

function getISBN(id){
  return book[id][isbn];
}

function getTitle(isbn) {
  let add = getAddress(isbn);
  if (add != -1) { return book[add][1]; }
  else { return []; }
};

function getTitle_id(id){
  return book[id][title];
}

function getAuthor(isbn) {
  let add = getAddress(isbn);
  if (add != -1) { return book[add][author]; }
  else { return []; }
};

function getAuthor_id(id){
  return book[id][author];
}

function getHTMLLink_id(id){
  return book[id][html_link];
}

function getImage_id(id){
  return book[id][image];
}

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

function getUsernameofReview_id(book_index, review_index){
  return bookReviews[book_index][review_index][username];
}

function getReviewofUsername_id(book_index, review_index){
  return bookReviews[book_index][review_index][review];
}


///////////////////////ADD OTHER FUNCTIONS HERE////////////////////

function adminPage() {
  window.open('admin.html', '_blank');
}


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

///////////////////////////// INDEX HTML ////////////////////////////////////////////
/*
function loadIndexPage(){
  const index_menu_page = document.getElementsByClassName("index-page-book-menu")[0];
  let book_row, book_link, book_image, book_Title;

  for (i = 0; i < getNumberofBooks(); i++){
    book_row = document.createElement("div");
    book_row.setAttribute("class", "book-row");

    book_link = document.createElement("a");
    book_link.href = getHTMLLink_id(i);

    book_image = document.createElement('img');
    book_image.setAttribute("src", getImage_id(i));
    book_image.classList.add("book-img");
    book_link.appendChild(book_image);

    book_title = document.createElement('div');
    book_title.setAttribute("class", "book-title");
    book_title.textContent = getTitle_id(i);
    book_link.appendChild(book_title);

    book_row.appendChild(book_link);
  }
  
}*/


///////////////////////// BOOK PAGES ///////////////////////////////////

document.addEventListener('DOMContentLoaded', function() {
  if (document.getElementsByClassName("book-page-content-individual-books")[0]) {
    var removeDiv = document.getElementsByClassName("book-review-error-message")[0];
    if (removeDiv) {
      removeDiv.remove();
    }

    const error_message_html_spot = document.getElementsByClassName("book-review-error-message-spot")[0];
    const error_message = document.createElement("div");
    error_message.setAttribute("class", "book-review-error-message");
    error_message.textContent = "You have not logged in, please log in to write a review";

    var reviewSubmitButton = document.getElementsByClassName("bookreviewsubmit")[0];
    var reviewForm = document.getElementById("book-review-form");
    reviewForm.addEventListener("submit", addReview);

    
    function addReview() {
      event.preventDefault(); // Prevent the form from submitting normally
      var reviewInput = document.getElementById("book-review-input").value;
      var is_logged_in = sessionStorage.getItem("logged_in");
      if(!(is_logged_in)){error_message_html_spot.appendChild(error_message);}
      else{
        let user_review = document.createElement("div");
        user_review.setAttribute("class", "book-review-by-user");
        user_review.textContent = reviewInput;
        error_message_html_spot.appendChild(user_review);
      }
    }
  }
});







/////////////////////////// Login Page, login.html //////////////////////////////////


document.addEventListener('DOMContentLoaded', function() {
  
  if (document.getElementById("login-form")) {
    const error_message_html_spot = document.getElementById("login-fail");
    const error_message = document.createElement("div");
    error_message.setAttribute("id", "login-fail");
    error_message.textContent = "Login credentials do not match our database, please try again";
    //error_message_html_spot.appendChild(error_message);
    
    const loginForm = document.getElementById('login-form');
    loginForm.addEventListener("submit", login_user);
    
    function login_user() {
      event.preventDefault();

      const username_input = document.getElementById('login-page-username').value;
      const password_input = document.getElementById('login-page-password').value;

      let val = validate(username_input, password_input);
      if(val[0] == false){error_message_html_spot.appendChild(error_message);}
      else{
        sessionStorage.setItem("logged_in", true);
        user_username = username_input;
        alert("Welcome " + user_username +" !");
        if(val[1] == false){
        //user is a normal user
          window.location.href = 'index.html';  
        }
        else{
          //user is an admin
          window.location.href = 'admin.html';
        }
      }
    }
  }
});




///////////////////////// Book Review Page, book_review.html /////////////////////

//set up the review page
function generateReviewsContent() {
    const review_page_content = document.getElementById("restOfReviewPageContent");
  
    let book_review_row, book_title, username_and_review_row, username_of_review, review_of_username;
    
    for(let i = 0; i < getNumberofBooks(); i++){
      book_review_row = document.createElement("div");
      book_review_row.setAttribute("class", "review-row");
      
      book_title = document.createElement("div");
      book_title.setAttribute("class", "book-title");
      book_title.textContent = getTitle_id(i);
      book_review_row.appendChild(book_title);

      for(let j = 0; j < getNumberofReviews_id(i); j++){
        username_and_review_row = document.createElement("div");
        username_of_review = document.createElement("div");
        review_of_username = document.createElement("div");
        
        if(j%2 == 0){username_and_review_row.setAttribute("class", "book-review-row even");}
        else{username_and_review_row.setAttribute("class", "book-review-row odd");}
        
        username_of_review.setAttribute("class", "review-username");
        review_of_username.setAttribute("class", "review");
        
        username_of_review.textContent = getUsernameofReview_id(i, j);
        review_of_username.textContent = getReviewofUsername_id(i, j);

        username_and_review_row.appendChild(username_of_review);
        username_and_review_row.appendChild(review_of_username);
        book_review_row.appendChild(username_and_review_row);
      }

      review_page_content.appendChild(book_review_row);
    }
}

///////////////////////// LOG OUT //////////////////////////////////////////////

function logout(){
  sessionStorage.setItem("logged_in", false);
}


/////////////////////////// ADMIN /////////////////////////////////////////////

function textModify() {
  var text = document.getElementById("book1-order");
  text.innerHTML = book[0][title];
  var text1 = document.getElementById("book2-order");
  text1.innerHTML = book[1][title];
  var text2 = document.getElementById("book3-order");
  text2.innerHTML = book[2][title];
  var text3 = document.getElementById("book4-order");
  text3.innerHTML = book[3][title];
  var text4 = document.getElementById("book5-order");
  text4.innerHTML = book[4][title];
}

function loadAdminPage(){
  textModify();
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