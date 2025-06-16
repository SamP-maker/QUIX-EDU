/*
======================================
🧮 JavaScript Comparison Operators
======================================

==     Equal to (compares values only)
!=     Not equal to (compares values only)
===    Strict equal to (compares value and type)
!==    Strict not equal to (value or type must differ)
>      Greater than
<      Less than
>=     Greater than or equal to
<=     Less than or equal to
*/



// Examples
let a = 5;
let b = "5";
let c = 10;

// Loose equality
a == b;      // true
a != b;      // false

// Strict equality
a === b;     // false
a !== b;     // true

// Greater / Less comparisons
c > a;       // true
a < c;       // true
a >= 5;      // true
c <= 10;     // true
a > b;       // false (b is coerced to 5)



/*
======================================
✅ JavaScript Logical Operators
======================================

&&   Logical AND
||   Logical OR
!    Logical NOT

=== Examples ===

true  && true   // true
true  && false  // false

false || true   // true
false || false  // false

!true           // false
!false          // true
*/

let x = 5;
let y = 5;
let v = 8;
let z = 10;


console.log(x && y)
console.log(y && v)
console.log (x || v == z)
console.log(x || y == 5)

console.log(!x)
console.log(!z)
//try with !true
//try with !false



/*
======================================
🆎 JavaScript Type Operators
======================================

typeof       Returns the data type of a variable
instanceof   Checks if an object is an instance of a class or constructor

=== typeof Examples ===

typeof 42            // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof {}            // "object"
typeof []            // "object" (arrays are also objects)
typeof undefined     // "undefined"
typeof null          // "object" (this is a known JS quirk)
typeof function(){}  // "function"

=== instanceof Examples ===

let arr = [];
arr instanceof Array      // true
arr instanceof Object     // true
"hello" instanceof String // false (primitive)
new String("hello") instanceof String // true
*/


typeof 42            // "number"
typeof "hello"       // "string"
typeof true          // "boolean"
typeof {}            // "object"
typeof []            // "object" (arrays are also objects)
typeof undefined     // "undefined"
typeof null          // "object" (this is a known JS quirk)
typeof function(){}  // "function"







