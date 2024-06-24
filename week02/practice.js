



//const LIMIT = 30;
//let studentReport = [11,42,33,64,29,37,44];

//for ( i=0; i<studentReport.length; i++)
 // {
//if (studentReport[i]<LIMIT)
 // {
 //   console.log(studentReport[i])
 // }
//}

//let i = 0
//while (i<studentReport.length)
//  {
  //  if (studentReport[i]<LIMIT){
  //    console.log(studentReport[i]);
  //  }
   // i++
  //}
 //  studentReport.forEach(function(item){
 //   if(item<LIMIT)
 //   {
//   console.log(item)
// }
//  })
  
//for (let i in studentReport)
 // {
 //   if(studentReport[i]<LIMIT)
//      {
 //       console.log(studentReport[i])
 //     }
 // }
//let nextDays = [];
//const DAYS = 6;
//const options = {weekday: "long"}; 

//const today = new Date();

//let todaystring = new Intl.DateTimeFormat('en-US', options).format(today);

//let i=1
//while(i<=DAYS)
 // {
 //   let nextDay = new Date();
//    nextDay.setDate(today.getDate()+i);
 //   let nextDayString = new Intl.DateTimeFormat('en-US',options).format(nextDay);
 //   nextDays.push(nextDayString)
 //   i++
//  }
//console.log(nextDays);

 //document.addEventListener('DOMContentLoaded', function() {
   //const input = document.querySelector('#favchap');
   //const button = document.querySelector('#submit');
   //const list = document.querySelector('#list');
   //let tasks = [];

  // Function to generate HTML for each task item
 //  function taskTemplate(task) {
  //   return `
    //   <li>
     //    <p>${task.detail}</p>
     //    <div>
     //      <button  //class="delete-btn">❎</button>
     //    </div>
    //   </li>`;
  // }

  // Function to render all tasks
  // function renderTasks(tasks) {
   //  list.innerHTML = ""; // Clear previous list items
   //  const html = tasks.map //(taskTemplate).join(""); // Generate HTML for each task
   //  list.innerHTML = html; // Insert generated HTML into the list
   //}

  // Function to handle adding a new task
  // function newTask() {
   //  const task = input.value.trim(); // Get the task from input field
    // if (task === "") {
    //   input.focus(); // Focus on input if it's empty
    //   return;
   //  }
     //tasks.push({ detail: task }); // Add task to tasks array
    // renderTasks(tasks); // Render updated list of tasks
   //  input.value = ""; // Clear input field
   //  input.focus(); // Keep focus on input for next task entry
   //}

  // Event listener for 'Add' button click
   //button.addEventListener("click", function() {
    // newTask(); // Call newTask function when button is clicked
   //});

  // Event delegation for 'Delete' button click (using list's event propagation)
   //list.addEventListener('click', function(event) {
    // if (event.target.classList.contains('delete-btn')) {
    //   const taskDetail = event.target.closest('li').querySelector('p').textContent; // Get task text
      // tasks = tasks.filter(t => t.detail !== taskDetail); // Remove task from tasks array
     //  renderTasks(tasks); // Render updated list of tasks
     //  input.focus(); // Keep focus on input after deletion
    // }
  // });

 //});
