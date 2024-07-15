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

  function deleteChapter(chapter)
  {
    chapter = chapter.slice(0, chapter.length - 1);
    chaptersArray = chaptersArray.filter(item => item !== chapter);
    setChapterList();
  }

  function displayList(item)
  {
    let li = document.createElement('li');
    let deletebutton = document.createElement('button');
    li.textContent = item;
    deletebutton.textContent = '❌';
    deletebutton.classList.add('delete');
    li.append(deletebutton);
    list.append(li);
    deletebutton.addEventListener('click',function(){
      list.removeChild(li);
      deleteChapter(li.textContent);
      input.focus();
    });
    console.log('xd')
  }

  function getChapterList() {

    return JSON.parse(localStorage.getItem("chapterList"));
  }
  
  let chaptersArray = getChapterList() || [];
  
  chaptersArray.forEach(chapter=>{displayList(chapter);});
  
  
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

  function setChapterList()
  {
    localStorage.setItem("chapterList",JSON.stringify(chaptersArray));
  }
  
  button.addEventListener("click", function() {
    if (input.value.trim() === "") {
      input.focus();
      return;
    } else {
      displayList(input.value);
      chaptersArray.push(input.value)
      setChapterList()
      input.value = "";
      input.focus();
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
          