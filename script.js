const input = document.getElementById("todo-input")
const AddTodoBtn = document.getElementById("add-btn")
const ul = document.querySelector("ul")
const allDelBtn = document.querySelector("#All-Del")

AddTodoBtn.addEventListener("click", function(){
    let inputValue = input.value;
    if (!inputValue.trim()) return;
    const todo = document.createElement("li")
    todo.innerHTML = `${inputValue} <button class="delete-btn">X</button>`
    ul.appendChild(todo)
    input.value = "";
})


ul.addEventListener("click", function (event) {
    if (event.target.classList.contains("delete-btn")) {
        event.target.parentElement.remove();
    }
})

allDelBtn.addEventListener("click", function(){
    ul.innerHTML = "";
})
