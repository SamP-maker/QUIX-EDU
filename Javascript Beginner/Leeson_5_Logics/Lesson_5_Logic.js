/*
======================================
🧭 JavaScript if / else if / else
======================================
*/

let score = 85;

// Strict comparison
if (score === 100) {
    // perfect score
}
else if (score >= 90) {
    // grade A
}
else if (score >= 80 && score < 90) {
    // grade B
}
else if (score >= 70 && score < 80) {
    // grade C
}
else if (score >= 60 && score < 70) {
    // grade D
}
else {
    // grade F
}
// More examples







let age = 18;
let minAge = "18";

// Using strict equality
if (age === minAge) {
    // won't run: number !== string
}

// Using loose equality
if (age == minAge) {
    // will run: 18 == "18"
}

let temperature = 30;

if (temperature > 35) {
    // too hot
}
else if (temperature < 15) {
    // too cold
}
else {
    // just right
}




let result = score >= 50 ? "Pass" : "Fail";
