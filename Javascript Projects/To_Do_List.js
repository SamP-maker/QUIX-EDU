
const tasks = [];

let addTask = (taskText) =>{
if (!taskText || taskText.trim() === "")return;
else tasks.push(taskText.trim());
console.log("Task added:", taskText);
showTasks();
}



let removeTask = (index) =>{
if(index >=0 &&index < tasks.length){
    console.log("Task removed:", tasks[index]);
    tasks.splice(index,1);
    showTasks();
}

}


function showTasks(){

     console.clear();
  console.log("Your To-Do List:");
  tasks.forEach((task, i) => {
    console.log(`${i + 1}. ${task}`);
  });


}