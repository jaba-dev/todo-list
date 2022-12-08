if (localStorage.getItem("lomzari`s_todos") === null) {
  localStorage.setItem("lomzari`s_todos", JSON.stringify([]));
}

let clearAll = () => {
  localStorage.removeItem("lomzari`s_todos");
};

let todos = {
  addTodo: () => {
    let counter = 0;
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));

    if (myTaskInput.value == "") {
      helper.innerHTML = "enter task!";
    } else {
      db.forEach((element, index) => {
        if (myTaskInput.value == element.task) {
          counter = 1;
        }
      });
      if (counter == 0) {
        let task = {};
        task.task = myTaskInput.value;
        task.done = false;
        db.push(task);
        localStorage.setItem("lomzari`s_todos", JSON.stringify(db));
        myTaskInput.value = "";
        helper.innerHTML = "<p>new task added!</p>";
      } else {
        myTaskInput.value = "";
        helper.innerHTML = "<p>this task already exists!</p>";
      }
    }
  },
  displayTodos: () => {
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));

    if (db.length > 0) {
      myTasksContainer.classList.remove("hidden");
      db.forEach((element) => {
        if (element.done == false) {
          let taskDiv = document.createElement("div");
          taskDiv.classList.add("task-div");
          let checkIcon = document.createElement("i");
          checkIcon.classList.add("fa-solid");
          checkIcon.classList.add("fa-check");
          taskDiv.append(checkIcon);
          let taskSpan = document.createElement("span");
          taskSpan.classList.add("task-name");
          taskSpan.innerText = element.task;
          taskDiv.append(taskSpan);
          let editSpan = document.createElement("span");
          editSpan.classList.add("edit");
          editSpan.innerText = "edit";
          taskDiv.append(editSpan);
          let trashIcon = document.createElement("i");
          trashIcon.classList.add("fa-solid");
          trashIcon.classList.add("fa-trash");
          trashIcon.classList.add("delete");
          taskDiv.append(trashIcon);
          myTasksContainer.append(taskDiv);
        } else {
          let taskDiv = document.createElement("div");
          taskDiv.classList.add("strike");
          taskDiv.classList.add("task-div");
          let checkIcon = document.createElement("i");
          checkIcon.classList.add("fa-solid");
          checkIcon.classList.add("fa-check");
          taskDiv.append(checkIcon);
          let taskSpan = document.createElement("span");
          taskSpan.classList.add("task-name");
          taskSpan.innerText = element.task;
          taskDiv.append(taskSpan);
          let editSpan = document.createElement("span");
          editSpan.classList.add("done");
          editSpan.innerText = "done";
          taskDiv.append(editSpan);
          let trashIcon = document.createElement("i");
          trashIcon.classList.add("fa-solid");
          trashIcon.classList.add("fa-trash");
          trashIcon.classList.add("done");
          taskDiv.append(trashIcon);
          myTasksContainer.append(taskDiv);
        }
      });
    } else {
      myTasksContainer.classList.add("hidden");
    }
  },
  updateTodo: (item) => {
    let index;
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));
    db.forEach((element, ind) => {
      if (element.task == item) {
        index = ind;
      }
    });
    if (myTaskInput.value == "") {
      helper.innerHTML = "<p>input is empty!</p>";
    } else {
      if (index != undefined) {
        db[index].task = myTaskInput.value;
        localStorage.setItem("lomzari`s_todos", JSON.stringify(db));
        myTaskInput.value = "";
        helper.innerHTML = "<p>task updated!</p>";
        updateCounter = 0;
      }
    }
  },
  markAsDone: (item) => {
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));
    db.forEach((element, index) => {
      if (element.task == item && element.done == false) {
        element.done = true;
        localStorage.setItem("lomzari`s_todos", JSON.stringify(db));
      } else if (element.task == item && element.done == true) {
        element.done = false;
        localStorage.setItem("lomzari`s_todos", JSON.stringify(db));
      }
    });
  },
  delete: (item) => {
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));
    db.forEach((element, index) => {
      if (element.task == item) {
        db.splice(index, 1);
        helper.innerHTML = "<p>task deleted!</p>";
        localStorage.setItem("lomzari`s_todos", JSON.stringify(db));
      }
    });
  },
  deleteDone: (item) => {
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));
    db.forEach((element, index) => {
      if (element.task == item) {
        db.splice(index, 1);
        helper.innerHTML = "<p>task deleted!</p>";
        localStorage.setItem("lomzari`s_todos", JSON.stringify(db));
      }
    });
  },
  deleteAll: () => {
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));
    db = [];
    helper.innerHTML = "<p>all tasks deleted!</p>";
    localStorage.setItem("lomzari`s_todos", JSON.stringify(db));
  },
  deleteAllDone: () => {
    let db = JSON.parse(localStorage.getItem("lomzari`s_todos"));
    let newDb = [];
    db.forEach((element, index) => {
      if (element.done == false) {
        newDb.push(element);
        helper.innerHTML = "<p>done tasks deleted!</p>";
      }
    });
    localStorage.setItem("lomzari`s_todos", JSON.stringify(newDb));
  },
};
