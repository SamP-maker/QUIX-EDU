/*
======================================
📄 JavaScript Objects
======================================

An object stores data as key–value pairs.
Each key is a string (called a "property"), and it maps to a value.
*/



// Create the object
let person = {
    name: "Lily",
    age: 22,
    country: "Japan"
};


let new_person = new Object(person)

// Access values
let personName = person.name;
let personAge = person["age"];

// Change content
person.age = 23;

// Show mutation
let updatedAge = person.age;
