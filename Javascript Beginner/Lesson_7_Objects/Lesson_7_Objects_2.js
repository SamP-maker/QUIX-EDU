/*
======================================
📄 JavaScript Objects
======================================

An object stores data as key–value pairs.
Each key is a string (called a "property"), and it maps to a value.
*/


// Original object
let person = {
    name: "Lily",
    age: 23,
    hobby: "Photography"
};

// Delete a property
delete person.age;

// Create a new object using spread + adding new data
let extended_person = {
    ...person,
    language: "Yappanese"
};

// The original stays unchanged, extended_person has more info
let hasAge = "age" in person;
let hasLanguage = "language" in extended_person;
let newHobby = extended_person.hobby;
