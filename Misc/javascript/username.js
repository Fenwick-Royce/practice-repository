//objects in a js code always start wtih a captial letter

function User(name) {
    this.name = name
    this.isAdmin = false;
}

let user = new User("jack")

alert(user.name); // Jack
alert(user.isAdmin); // false

//bam you got a user in there.

//when you use let user = new user("jack"), you will get the same reults

let user = new function() {
    this.name = "john"
    this.isadmin = false;
}

//this function only works once per script so choose carefully

let user = {
    name: "Jack",
    isAdmin: false
  };

  function User() {
    alert(new.target);
  }
  
  // without "new":
  User(); // undefined
  
  // with "new":
  new User(); // function User { ... }

  function User(name) {
    if (!new.target) { // if you run me without new
      return new User(name); // ...I will add new for you
    }
  
    this.name = name;
  }
  
  let john = User("John"); // redirects call to new User
  alert(john.name); // John

  function BigUser() {

    this.name = "John";
  
    return { name: "Godzilla" };  // <-- returns this object
  }
  
  alert( new BigUser().name );  // Godzilla, got that object