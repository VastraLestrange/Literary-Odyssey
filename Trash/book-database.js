//ISBN, Title, Author
let book = [  [9780545010221, "Harry Potter and the Deathly Hallows", "J.K. Rowling"],
  [9781982185824, "I'm glad my mom died", "Jennette McCurdy"],
  [9780007525508, "The Hobbit", "J.R.R. Tolkien"],
  [9783319110790, "Linear Algebra Done Right", "Sheldon Axler"],
  [9780060173227, "To kill a mocking bird", "Lee, Harper"],
  [978034509461, "The Demon-Haunted World", "Cal Sagan"]
];

let bookReviews = [  [["David", "My favourite book!"], ["Bean", "Best book ever!"]],
  ["Very touching"],
  ["Classic"],
  ["So much better than my professor!"],
  ["Now I understand why everyone in school reads this!"]
];

function getAddress(isbn){
  //RETURN: the array address of that book
  //RETURN: -1 if not found

  for (let row = 0; row < book.length; row++){
    if(isbn === book[row][0]){return row;}
  }
  return -1;
};

function getBookDetails(isbn){
  for (let row = 0; row < book.length; row++){
    if(isbn === book[row][0]){return book[row];}
  }
  return [];
};

function getReviews(isbn){
  //RETURN: an array of reviews
  //if ISBN not found, return empty array
  let add = getAddress(isbn);
  if (add != -1){return bookReviews[add];}
  else {return [];}
};

function getTitle(isbn){
  let add = getAddress(isbn);
  if (add != -1){return book[add][1];}
  else {return [];}
};

function getAuthor(isbn){
  let add = getAddress(isbn);
  if (add != -1){return book[add][2];}
  else {return [];}
};

function initializeReviews(){bookReviews.push([]);};

function setNewBook(isbn, title, author){
  let arr = [isbn, title, author];
  book.push(arr);
  bookReviews.push([]);
};

function setReview(isbn, username, review){
  let add = getAddress(isbn);
  let arr = [username, review];
  bookReviews[add].push(arr);
};