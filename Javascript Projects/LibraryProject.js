
let archive = [
{
    name:"",
    description:"",
    dateAdded:"",
    dateBorrowed:"",
    dateReturned:"",
    quantity:0,
}
]




let addBooks = (name, description) => {
  let addButton = document.getElementById("addButton");
  addButton.addEventListener("click", () => {
    archive.push({
      name: name,
      description: description,
      dateAdded: new Date().toISOString(),
      dateBorrowed: "",
      dateReturned: ""
    });
  });
};

let removeBooks = (index) => {
  if (index >= 0 && index < archive.length) {
    archive.splice(index, 1);
  } else {
    console.error("Invalid index");
  }
};



let filterBooks = (name) => {
  let filtered = archive.filter(book => book.name === name);
  return filtered;
};



let borrowBooks = (name) => {
  let book = archive.find(book => book.name === name);
  if (book && book.quantity > 0) {
    book.dateBorrowed = new Date().toISOString();
    book.quantity -= 1;
  } else {
    console.log("Book not found or out of stock.");
  }
};

let returnBooks = (name) => {
  let book = archive.find(book => book.name === name);
  if (book) {
    book.dateReturned = new Date().toISOString();
    book.quantity += 1;
  } else {
    console.log("Book not found.");
  }
};






