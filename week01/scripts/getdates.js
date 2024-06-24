document.addEventListener("DOMContentLoaded", () => {
  const year = document.querySelector("#year");
  const lastMod = document.querySelector("#lastModified1");

  const today = new Date();
  const modifed = new Date(document.lastModified)
  year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
  lastMod.innerHTML= `Last Modification: <span class="mod1">${modifed}</span>`
});