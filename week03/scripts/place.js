document.addEventListener("DOMContentLoaded",() => {
const year = document.querySelector("#year");
const lastMod = document.querySelector("#lastModified");

const today = new Date();
const modified = new Date(document.lastModified)
year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
lastMod.innerHTML=`Last Modification : <span class="mod1">${modified}</span>`

function calculteWindChill(temperature, speed)
{
  if (temperature <= 10 && speed > 4.8)
    {
      const windChill= 13.12 + 0.6215 * temperature - 11.37 * Math.pow(speed, 0.16) + 0.3965 * temperature * Math.pow(speed, 0.16)
      return windChill.toFixed(2);
    }
  else
  {return "N/A"}
}

const temperature = document.getElementById('tem').textContent;

const speed = document.getElementById('wind').textContent;

document.querySelector('#chill').innerHTML= calculteWindChill(temperature, speed);
});