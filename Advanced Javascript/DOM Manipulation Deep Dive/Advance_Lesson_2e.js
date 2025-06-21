// ========================================
// Module 2: DOM Manipulation Deep Dive
// ========================================
// - querySelector vs getElementById
// - DOM Traversal: parentNode, children, closest
// - Creating elements dynamically with createElement
// - Appending and removing nodes
// - Event delegation: bubbling vs capturing             <---------------------
// - Mini Project: Interactive To-Do List




parent.addEventListener("click", (e) => {
  if (e.target.matches(".task-item")) {
    e.target.classList.toggle("done");
  }
});




element.addEventListener("click", handler, true);
