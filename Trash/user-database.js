//data: "username", "password", "admin"
//admin: true if its an admin account
//       false o/w
//arr[row][col]
let login_information = [
  ["davidTennant", "12345", false],
  ["mattSmith" , "password", false],
  ["peterCapaldi", "pass", false],
  ["deanWinchester", "qwerty123", false],
  ["castiel", "passwordpassword", false],
  ["admin", "a2", true]
]

function getUsername(row){
  return login_information[row][0];
};

function getPassword(row){return login_information[row][1];};

function isAdmin(row){return login_information[row][2];};

function validate(username, password){
  //RETURN: [bool, bool]
  //        [true, x]: if the username and password matches the one in the database
  //        [false, x]: else
  //        [true, true]: if the user is an admin
  //        [true, false]: if the user is not an admin

   for (let row = 0; row < login_information.length; row++){
    if((getUsername[row][0] == username) && (getPassword[row][1] == password)){
      return true;
    } else if (!isAdmin(row)) {
          window.location.href = "admin.html"; 
        }
  }
  return [false, false];
};