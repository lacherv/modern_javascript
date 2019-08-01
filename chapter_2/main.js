// jshint esversion:6
// strings 
console.log('hello, world');

let email = 'john.doe@mail.com';
console.log(email);

// string concatenation
let firstName = 'John';
let lastName = 'Doe';

let fullName = firstName + ' ' + lastName;
console.log(fullName);

// getting characters 
console.log(fullName[2]);

// string length
console.log(fullName.length);

// string methods
console.log(fullName.toUpperCase());

let result = fullName.toLowerCase();
console.log(result, fullName);

let index = email.indexOf('o');
console.log(index);

