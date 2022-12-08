let myTaskInput = document.querySelector(".task-input");
let myAddBtn = document.querySelector(".add-btn");
let myClearButton = document.querySelector(".clear-btn");
let myForm = document.querySelector("form");
let myTasksContainer = document.querySelector(".tasks-container");
let helper = document.querySelector(".help");
let updateCounter = 0;
let markAsDoneCounter = 0;
let item;

window.addEventListener("load", () => {
  todos.displayTodos();
});

myForm.addEventListener("click", (e) => {
  e.preventDefault();

  // add
  if (e.target.innerText == "ADD" && updateCounter == 0) {
    todos.addTodo();
    myTasksContainer.innerHTML = "";
    todos.displayTodos();
  }
  // update
  if (e.target.innerText == "ADD" && updateCounter > 0) {
    updateCounter++;
    todos.updateTodo(item);
    myTasksContainer.innerHTML = "";
    todos.displayTodos();
  }

  if (e.target.classList.contains("edit")) {
    updateCounter++;
    item = e.target.previousSibling.innerText;
    e.target.previousSibling.innerText =
      "updating: " + e.target.previousSibling.innerText;
    helper.innerHTML = `<p>${e.target.previousSibling.innerText}</p>`;
    myTaskInput.focus();
  }
  // mark/unmark as done
  if (e.target.classList.contains("fa-check")) {
    markAsDoneCounter++;
    item = e.target.nextSibling.innerText;
    todos.markAsDone(item);
    myTasksContainer.innerHTML = "";
    todos.displayTodos();
  }
  // delete one task
  if (e.target.classList.contains("delete")) {
    item = e.target.previousSibling.previousSibling.innerText;
    todos.delete(item);
    myTasksContainer.innerHTML = "";
    todos.displayTodos();
  }
  // delete one done task
  if (e.target.classList.contains("done")) {
    item = e.target.previousSibling.previousSibling.innerText;
    todos.deleteDone(item);
    myTasksContainer.innerHTML = "";
    todos.displayTodos();
  }
  // delete all
  if (e.target.classList.contains("clear-btn")) {
    myTasksContainer.innerHTML = "";
    todos.deleteAll();
    todos.displayTodos();
  }
  // delete all done
  if (e.target.classList.contains("clear-done-btn")) {
    myTasksContainer.innerHTML = "";
    todos.deleteAllDone();
    todos.displayTodos();
  }
});
