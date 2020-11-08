var todoInput = document.getElementById("todo-input");
var todoButton = document.getElementById("todo-btn");
var todoList = document.getElementById("todo-list");

todoButton.onclick = create;
todoList.onclick = checkDelete;

function create(e) {

    if (todoInput.value === "") {
        alert("No task to add.");
    } else {
        e.preventDefault();

        var newDiv = document.createElement("div");
        newDiv.classList.add("todo");

        var newLi = document.createElement("li");
        newLi.classList.add("todo-item");
        newLi.innerHTML = todoInput.value;
        newDiv.appendChild(newLi);

        var chkBtn = document.createElement("button");
        chkBtn.classList.add("chk-btn");
        chkBtn.innerHTML = '<i class="fa fa-check"></i>'
        newDiv.appendChild(chkBtn);

        var dltBtn = document.createElement("button");
        dltBtn.classList.add("dlt-btn");
        dltBtn.innerHTML = '<i class="fa fa-trash"></i>'
        newDiv.appendChild(dltBtn);

        todoList.appendChild(newDiv);
        todoInput.value = "";
    }
}

function checkDelete(e) {

    // console.log(e.target);
    const todoItem = e.target;

    if (todoItem.classList[0] === "dlt-btn") {
        todoItem.parentNode.remove();
    } else if (todoItem.classList[0] === "chk-btn") {
        todoItem.parentNode.classList.toggle("completed");
    }
}