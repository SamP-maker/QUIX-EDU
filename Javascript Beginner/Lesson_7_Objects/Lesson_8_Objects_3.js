/*
======================================
📄 JavaScript Objects
======================================

An object stores data as key–value pairs.
Each key is a string (called a "property"), and it maps to a value.
*/


// Existing object
let person = {
    name: "Lily",
    hobby: "Photography"
};

// Add function (method)
person.greet = function() {
    return "Hello, my name is " + this.name;
};

// Add nested object
person.contact = {
    email: "lily@example.com",
    phone: "123-4567"
};

// Access nested data
let email = person.contact.email;
let phone = person.contact.phone;
let greeting = person.greet();
