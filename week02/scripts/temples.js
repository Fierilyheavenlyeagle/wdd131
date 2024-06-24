document.addEventListener("DOMContentLoaded",() => {
const hambutton = document.querySelector('#menu');
const navigation = document.querySelector('.navigation')

hambutton.addEventListener('click', ()=> {
navigation.classList.toggle('open');
hambutton.classList.toggle('open');
});

const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastModified");

const today = new Date();
const modfied = new Date(document.lastModified)
year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
lastMod.innerHTML=`Last Modification : <span class="mod1">${modfied}</span>`
});