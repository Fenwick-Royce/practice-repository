// lets start with something basic

let message = "hello";
let phrase = message;

//now something else

let user = {
    name: "john"
};

//now to store it in memory

let user = { name: "john" };

let admin = user; // copy the reference

//now we can use the variable to access or modify it

let user = { name: 'john'};

let admin = user;

admin.name = 'pete'; //changed by the "admin" reference

alert(user.name); // 'pete', changes are seen from the user refernece.

// comparason by reference

let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true

//two indpendent objects that are not equel

let a = {};
let b = {}; // two independent objects

alert( a == b ); // false