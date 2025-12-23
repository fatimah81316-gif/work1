let todos = [];
const input = document.getElementById("taskInput");
const button = document.getElementById("Click");
const list = document.getElementById("list");

function task() {
  if (input.value === "") return;
  todos.push(input.value);
  input.value = "";

  addToList();
}

function addToList() {
  list.innerHTML = "";
  todos.forEach((todo, index) => {
    const li = document.createElement("li");
    const span = document.createElement("span");
    const btnDelete = document.createElement("button");
    btnDelete.innerHTML = "حذف";
    btnDelete.onclick = () => {
      todos.splice(index, 1);
      addToList();
    };
    const btnEdit = document.createElement("button");
    btnEdit.innerHTML = "ویرایش ";
    btnEdit.onclick = () => {
      const newTaks = prompt("ویرایش", todo);
      if (newTaks) {
        todos[index] = newTaks;
        addToList();
      }
    };

    span.textContent = todo;
    li.appendChild(span);
    li.appendChild(btnDelete);
    li.appendChild(btnEdit);
    list.appendChild(li);
  });
}

button.addEventListener("click", () => {
  task();
});
