// ========================================
// Module 8: Promises & Async
// ========================================
// - What is a Promise?
// - Promise chaining with .then()
// - Creating custom Promises
// - Callback Hell explained
// - Simulate delay with setTimeout in a Promise





//You can build your own async logic using new Promise.


function fetchUserData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({ name: "Jane", age: 25 });
    }, 1000);
  });
}

fetchUserData().then(data => console.log(data));
