/*
===========================
Error Handling in JavaScript
===========================

try     - test a block of code for errors
catch   - handles the error
finally - (optional) runs after try/catch, no matter what
throw   - creates a custom error
*/

// Example 1: Basic try-catch
try {
    let x = 10;
    let y = x + z; // 'z' is not defined, this will throw an error
} catch (error) {
    // This runs when there's an error above
    console.log("An error occurred:", error.message);
}

// Example 2: Using finally
try {
    let age = 20;
    if (age < 18) {
        throw new Error("Too young to enter.");
    }
    console.log("Welcome!");
} catch (err) {
    console.log("Error:", err.message);
} finally {
    console.log("Check complete.");
}

// Example 3: Custom throw
function divide(a, b) {
    if (b === 0) {
        throw new Error("Cannot divide by zero");
    }
    return a / b;
}

try {
    let result = divide(10, 0);
} catch (e) {
    console.log("Caught an error:", e.message);
}
