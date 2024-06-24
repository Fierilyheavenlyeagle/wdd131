document.addEventListener('DOMContentLoaded', function() {const input = document.querySelector('#favchap');
const button = document.querySelector('#submit');
const list = document.querySelector('#list');
// Comment: The following three lines are creating and appending elements unnecessarily
// const li = document.createElement('li');
// const deleteButton = document.createElement('button');
// li.textContent = input.value;
// button.textContent = 'x';
// li.append(deleteButton);
// list.append(li);

let tasks = [];

function taskTemplate(task) {
  return `
  <li>
    <p>${task.detail}</p>
    <div>
      <button class="delete-btn">❎</button>
    </div>
  </li>`;
}

function renderTasks(tasks) {
  list.innerHTML = "";
  const html = tasks.map(taskTemplate).join("");
  list.innerHTML = html;
}

function newTask() {
  const task = input.value;
  tasks.push({detail: task});
  renderTasks(tasks);
}

button.addEventListener("click", function() {
  if (input.value.trim() === "") {
    input.focus();
    return;
  } else {
    newTask();
  }
})


  list.addEventListener('click', function(event) {
    if (event.target.classList.contains('delete-btn')) {
      const taskDetail = event.target.closest('li').querySelector('p').textContent; // Get task text
      tasks = tasks.filter(t => t.detail !== taskDetail); // Remove task from tasks array
      renderTasks(tasks); // Render updated list of tasks
      input.focus(); // Keep focus on input after deletion
    }
  });

});
        