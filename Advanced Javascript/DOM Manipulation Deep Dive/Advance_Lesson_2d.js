// ========================================
// Module 2: DOM Manipulation Deep Dive
// ========================================
// - querySelector vs getElementById
// - DOM Traversal: parentNode, children, closest
// - Creating elements dynamically with createElement            <---------------------
// - Appending and removing nodes
// - Event delegation: bubbling vs capturing
// - Mini Project: Interactive To-Do List



const item = document.createElement("li");
item.textContent = "New task";
item.classList.add("task-item");
