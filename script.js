const todoForm = document.getElementById("todo-form");
const todoInput = document.getElementById("todo-input");
const dateInput = document.getElementById("date-input");
const todoList = document.getElementById("todo-list");
const filterInput = document.getElementById("filter-input");

todoForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const task = todoInput.value.trim();
  const date = dateInput.value;

  // VALIDASI
  if (task === "") {
    alert("Task cannot be empty!");
    return;
  }
  if (date === "") {
    alert("Please select a date!");
    return;
  }

  addTodo(task, date);
  todoInput.value = "";
  dateInput.value = "";
});

function addTodo(task, date) {
  const li = document.createElement("li");
  li.className = "todo-item";

  const span = document.createElement("span");
  span.textContent = `${task} — ${date}`;

  const deleteBtn = document.createElement("button");
  deleteBtn.textContent = "Delete";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.addEventListener("click", () => li.remove());

  li.appendChild(span);
  li.appendChild(deleteBtn);
  todoList.appendChild(li);
}

filterInput.addEventListener("input", () => {
  const keyword = filterInput.value.toLowerCase();
  const items = document.querySelectorAll(".todo-item");

  items.forEach((item) => {
    const text = item.innerText.toLowerCase();
    item.style.display = text.includes(keyword) ? "flex" : "none";
  });
});
