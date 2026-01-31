export function initTasks() {
  const container = document.getElementById("tasks");

  let tasks = JSON.parse(localStorage.getItem("tasks")) || [];

  container.innerHTML = `
    <h2>Tasks</h2>
    <input id="taskInput" placeholder="New task">
    <button id="addTask">Add</button>
    <ul id="taskList"></ul>
  `;

  function save() {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    document.dispatchEvent(new Event("tasksUpdated"));
  }

  function render() {
    const list = container.querySelector("#taskList");
    list.innerHTML = "";

    tasks.forEach((t, i) => {
      const li = document.createElement("li");
      li.textContent = t.text;
      if (t.done) li.style.textDecoration = "line-through";

      li.onclick = () => {
        tasks[i].done = !tasks[i].done;
        save();
        render();
      };

      list.appendChild(li);
    });
  }

  container.querySelector("#addTask").onclick = () => {
    const text = container.querySelector("#taskInput").value.trim();
    if (!text) return;
    tasks.push({ text, done: false });
    container.querySelector("#taskInput").value = "";
    save();
    render();
  };

  render();
}
