var roster = []

//Adds new name to the roster's array.
function addNew() {
  var newName = prompt("Add the new student name here please.");
  roster.push(newName)
}

//Set to remove one name from the roster array.
function remove() {
  var remName = prompt("What name would you like to remove?");

  var index = roster.indexOf(remName);
  roster.splice(index,1)
    }

    //Displays roster in the console
    function display() {
      console.log(roster);
    }

    //Asking the user if they would like to add, remove, display or quit.

    var begin = prompt("Would you like to start using the roster app? Y/N");
    var request = "empty";

    if (begin === "Y") {
      while (request !== "quit") {
        request = prompt("Select from these options: add, remove, display or quit")
      if (request === "add") {
        addNew();
      }else if (request === "remove") {
         remove();
      }else if (request === "display") {
        display();
      }
    }
  }
  // if (begin === "N") {
  //   while (request === "quit") {
  //   console.log("Alright");
  //
  //   }
  // }
      alert("Thank you for using our web app. Please refresh the to start all over.")
