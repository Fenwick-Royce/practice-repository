let arr = new Array();
let arr =[];

let fruits = ["apple", "orange", "plum"];

alert( fruits[0] ); //apple
alert( fruits[1] ); //orange
alert( fruits[2] ); //plum

//now we can replace an element

fruits[2] = 'pear'; // now ["Apple", "Orange", "Pear"]

fruits[3] = 'lemon'; // now ["Apple", "Orange", "Pear", "Lemon"]

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits.length ); // 3


let fruits = ["Apple", "Orange", "Plum"];

alert( fruits ); // Apple,Orange,Plum

//arrays can store elements of any type

// mix of values
let arr = [ 'Apple', { name: 'John' }, true, function() { alert('hello'); } ];

// get the object at index 1 and then show its name
alert( arr[1].name ); // John

// get the function at index 3 and run it
arr[3](); // hello

//and arrays can end with a comma like any object

let fruits = [
    "Apple", //item
    "Orange", //item 1
    "Plum", //item 2
  ];

//say we want the last element in the array.
//since we are using javascript, using something like fruits[-1]
//will result in unidentified.
//best we go with a more longer route like fruits[fruits.length - 1]

let fruits = ["Apple", "Orange", "Plum"];

alert( fruits[fruits.length-1] ); // Plum

//lets try this

alert( fruits.at(-1) );

//methods of pop/push shift/unshift