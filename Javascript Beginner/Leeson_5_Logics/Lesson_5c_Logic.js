/*
===============================
Switch Statement Example
===============================

Used for selecting one of many blocks of code to run, based on a variable's value.
*/

let day = 3;

switch(day) {
    case 1:
        // code for Monday
        // no break means continue to next case
        break;
    case 2:
        // code for Tuesday
        break;
    case 3:
        // code for Wednesday
        break;  // <- important to prevent running next cases
    case 4:
        // code for Thursday
        break;
    default:
        // code if none of the above cases match
        break;
}

// Example without break, showing fall-through:
let color = "red";

switch(color) {
    case "red":
        // Executes this case AND falls through because no break
    case "pink":
        // Executes this case too
        break;
    default:
        // This won't run because of break above
        break;
}
