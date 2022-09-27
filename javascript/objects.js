let user = new Object(); // "object constructor" syntax
let user = {};  // "object literal" syntax

let user = {     // an object
    name: "John",  // by key "name" store value "John"
    age: 30        // by key "age" store value 30
  };

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30

user.isadmin = true

delete user.age;


let user = {
    name: "John",
    age: 30,
    "likes birds": true  // multiword property name must be quoted
  };

let obj = {
    text: undefined
};

alert(obj.test); //its undefined, so no property

alert("test" in obj ); //identified

// the "for...in" loop

//ordered like an object

let codes = {
    "49": "germany"
    "41": "Switzerland"
    "44"
}

//The “integer property” term here means a string that can be converted to-and-from an integer without a change.

//So, "49" is an integer property name, because when it’s transformed to an integer number and back, it’s still the same. But "+49" and "1.2" are not:

// Number(...) explicitly converts to a number
// Math.trunc is a built-in function that removes the decimal part
alert( String(Math.trunc(Number("49"))) ); // "49", same, integer property
alert( String(Math.trunc(Number("+49"))) ); // "49", not same "+49" ⇒ not integer property
alert( String(Math.trunc(Number("1.2"))) ); // "1", not same "1.2" ⇒ not integer property

//its vital to pay attention to the order you put in your codes.




//in summary:

//Objects are associative arrays with several special features.

//They store properties (key-value pairs), where:

//Property keys must be strings or symbols (usually strings).
//Values can be of any type.
//To access a property, we can use:

//The dot notation: obj.property.
//Square brackets notation obj["property"]. Square brackets allow taking the key from a variable, like obj[varWithKey].
//Additional operators:

//To delete a property: delete obj.prop.
//To check if a property with the given key exists: "key" in obj.
//To iterate over an object: for (let key in obj) loop.
//What we’ve studied in this chapter is called a “plain object”, or just Object.

//There are many other kinds of objects in JavaScript:

//Array to store ordered data collections,
//Date to store the information about the date and time,
//Error to store the information about an error.
//…And so on.
//They have their special features that we’ll study later. Sometimes people say something like “Array type” or “Date type”, but formally they are not types of their own, but belong to a single “object” data type. And they extend it in various ways.

//Objects in JavaScript are very powerful. Here we’ve just scratched the surface of a topic that is really huge. We’ll be closely working with objects and learning more about them in further parts of the tutorial.