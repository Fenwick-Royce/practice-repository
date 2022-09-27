//for references

// arr.push(...items) – adds items to the end,
// arr.pop() – extracts an item from the end,
// arr.shift() – extracts an item from the beginning,
// arr.unshift(...items) – adds items to the beginning.

// splice

//how to delete an elemement from an array.

let arr = ["I", "go", "home"];

delete arr[1]; // remove "go"

alert( arr[1] ); // undefined

// now arr = ["I",  , "home"];
alert( arr.length ); // 3

// the element is removed but the array
//still has 3 element

// introducing the splice method:

arr.splice(start[, deleteCount, elem1, ..., elemN])

// now lets search

let search = arr.find(function(item, index, array) {

    //if true returned, item is returned and iteration is stopped.
    // for falsy scenario returns unidentified
});

//example

let users = [
    {id: 1, name: "John"},
    {id: 2, name: "Pete"},
    {id: 3, name: "Mary"}
];

let user = users.find(item => item.id == 1)

alert(user.name); //found john

//transforming an array

let lengths = ["bilbo", "gandalf", "nazgul"].map(item => item.length);
alert(lengths); //5,7,6

//sort(fn)

let arr = [1, 2, 15 ];

//the method reorders the content

arr.sort();
alert( arr );  // 1, 15, 2



function compare(a, b) {
    if (a > b) return 1; // if the first value is greater than the second
    if (a == b) return 0; // if values are equal
    if (a < b) return -1; // if the first value is less than the second
  }

function compareNumeric(a, b) {
    if (a > b) return 1;
    if (a == b) return 0;
    if (a < b) return -1;
}
  
let arr = [ 1, 2, 15 ];
  
arr.sort(compareNumeric);
  alert(arr);  // 1, 2, 15