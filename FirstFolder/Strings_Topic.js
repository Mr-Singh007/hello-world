let myFirstName = "Manveer"
let myLastName = "Singh"
let msg = "String literals (denoted by double or single quotes) and strings returned from String calls in a non-constructor context (that is, called without using the new keyword) are primitive strings. In contexts where a method is to be invoked on a primitive string or a property lookup occurs, JavaScript will automatically wrap the string primitive and call the method or perform the property lookup on the wrapper object instead."
// console.log(`My name is ${myFirstName} ${myLastName}`);
console.log(msg.length);
