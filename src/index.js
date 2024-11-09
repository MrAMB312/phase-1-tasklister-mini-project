document.addEventListener("DOMContentLoaded", () => {
  // code here
  // begin by declaring variables
  const form = document.getElementById("create-task-form");
  const taskList = document.getElementById("tasks");
  // create event listener with event.preventDefault()
  form.addEventListener("submit", function(event) {
    event.preventDefault();

    // get the value from the input field
    const newTaskDescription = document.getElementById("new-task-description").value;

    // create a new list item (li) element to hold the task
    const newTask = document.createElement("li");
    newTask.textContent = newTaskDescription;

    // add the new task to the task list
    taskList.appendChild(newTask);

    // clear the input field after submitting
    document.getElementById("new-task-description").value = "";

    // add a delete button next to each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", function() {
      newTask.remove();
    })
    newTask.appendChild(deleteButton);
  });
});
