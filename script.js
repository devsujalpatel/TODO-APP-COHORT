const input = document.getElementById("todo-input");
const AddTodoBtn = document.getElementById("add-btn");
const ul = document.querySelector("ul");
const allDelBtn = document.querySelector("#All-Del");

// Function to add a new task
function addTask() {
    let inputValue = input.value.trim();
    if (!inputValue) return;

    const todo = document.createElement("li");
    todo.innerHTML = `
        ${inputValue} 
        <div>
            <i class="fa-solid fa-pen edit-btn"></i> 
            <i class="fa-solid fa-trash delete-btn"></i>
        </div>
    `;
    ul.appendChild(todo);
    input.value = "";
}

// Add task on button click
AddTodoBtn.addEventListener("click", addTask);

// Delete individual task
ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.closest("li").remove(); // Removes the whole <li>
    }
});

// Delete all tasks
allDelBtn.addEventListener("click", function () {
    ul.innerHTML = "";
});

// Edit task
ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("edit-btn")) {
        const todo = event.target.closest("li"); // Get the closest <li>
        input.value = todo.childNodes[0].textContent.trim(); // Get text value

        AddTodoBtn.innerText = "Update";

        function updateTask() {
            if (input.value.trim()) {
                todo.childNodes[0].textContent = input.value; // Update text
                AddTodoBtn.innerText = "Add Todo";
                input.value = "";
                AddTodoBtn.removeEventListener("click", updateTask);
                AddTodoBtn.addEventListener("click", addTask);
            }
        }

        AddTodoBtn.removeEventListener("click", addTask);
        AddTodoBtn.addEventListener("click", updateTask);
    }
});
