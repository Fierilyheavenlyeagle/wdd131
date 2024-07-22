document.addEventListener("DOMContentLoaded",() =>{

  const bookName = document.querySelector('#bname');
  const chapter = document.querySelector('#chapter');
  const page = document.querySelector('#page');

  const title = document.querySelector('#title');
  const notes = document.querySelector('#notes');
  const user = document.querySelector('#user');
  
  const submit = document.querySelector('#submit');

  const cardArray = []; 

  const year = document.querySelector("#year");
  const lastMod = document.querySelector("#lastModified");
  
  const today = new Date();
  const modfied = new Date(document.lastModified)
  year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
  lastMod.innerHTML=`Last Modification : <span class="mod1">${modfied}</span>`

  

  submit.addEventListener("click", function(event)
    {
      event.preventDefault();

      if (bookName.value.trim() === "" || chapter.value.trim() === "" || notes.value.trim() === "" || user.value.trim() === "")
      {
        bookName.focus();
        return;
      } else{
        createCards(bookName.value, chapter.value, page.value, title.value, notes.value, user.value);
        bookName.value="";
        chapter.value="";
        page.value="";
        title.value="";
        notes.value="";
        user.value="";
        bookName.focus();
      }

    })

    

  function createCards(booKName, chapter, page, title, notes, user)
  {

    let card = document.createElement('div');
    card.className= 'box';
    let booKNameElement = document.createElement('h2');
    let chapterElement = document.createElement('h3');
    let pageElement = document.createElement('h3');
    let titleElement = document.createElement('h3');
    let notesElement = document.createElement('h4');
    let userElement = document.createElement('p');


    booKNameElement.textContent = booKName;
    chapterElement.innerHTML = `<span class="label">Chapter: </span>${chapter}`;
    pageElement.innerHTML = `<span class="label">Page: </span>${page}`;
    titleElement.innerHTML=`<span class="title">${title}</span>`;
    notesElement.innerHTML=`${notes}`;
    userElement.textContent = `by ${user}`;


    card.appendChild(booKNameElement);
    card.appendChild(chapterElement);
    card.appendChild(pageElement);
    card.appendChild(titleElement);
    card.appendChild(notesElement);
    card.appendChild(userElement);

    document.querySelector('.cards').appendChild(card);

    cardArray.push({bookName, chapter, page, title, notes, user});
    console.log(cardArray);
  }


  
})