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

  const temples = [
    {
      templeName: "Aba Nigeria",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/400x250/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Manti Utah",
      location: "Manti, Utah, United States",
      dedicated: "1888, May, 21",
      area: 74792,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/manti-utah/400x250/manti-temple-768192-wallpaper.jpg"
    },
    {
      templeName: "Payson Utah",
      location: "Payson, Utah, United States",
      dedicated: "2015, June, 7",
      area: 96630,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/payson-utah/400x225/payson-utah-temple-exterior-1416671-wallpaper.jpg"
    },
    {
      templeName: "Yigo Guam",
      location: "Yigo, Guam",
      dedicated: "2020, May, 2",
      area: 6861,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/yigo-guam/400x250/yigo_guam_temple_2.jpg"
    },
    {
      templeName: "Washington D.C.",
      location: "Kensington, Maryland, United States",
      dedicated: "1974, November, 19",
      area: 156558,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      templeName: "Lima Perú",
      location: "Lima, Perú",
      dedicated: "1986, January, 10",
      area: 9600,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/lima-peru/400x250/lima-peru-temple-evening-1075606-wallpaper.jpg"
    },
    {
      templeName: "Mexico City Mexico",
      location: "Mexico City, Mexico",
      dedicated: "1983, December, 2",
      area: 116642,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/mexico-city-mexico/400x250/mexico-city-temple-exterior-1518361-wallpaper.jpg"
    },
    {
      templeName: "Aba Nigeria Temple",
      location: "Aba, Nigeria",
      dedicated: "2005, August, 7",
      area: 11500,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/aba-nigeria/1280x800/aba-nigeria-temple-lds-273999-wallpaper.jpg"
    },
    {
      templeName: "Arequipa Peru Temple",
      location: "Arequipa, Peru",
      dedicated: "2019, December, 15",
      area: 26969,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/arequipa-peru/1280x800/1-55f6c59ce8f9c093a9c689067f8674335de544e2.jpeg"
    },
    {
      templeName: "Hong kong China Temple",
      location: "Hong Kong, China",
      dedicated: "1996, May, 26",
      area: 51921,
      imageUrl:
      "https://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/hong-kong-china/1200x1920/hong-kong-china-temple-lds-39528-wallpaper.jpg"
    },

  ];

  createCard(temples)

  oldOnes = document.getElementById('old');
  newOnes = document.getElementById('new');
  largeOnes = document.getElementById('large');
  smallOnes = document.getElementById('small');
  home = document.getElementById('home');

  home.addEventListener('click', ()=>
    createCard(temples))

  oldOnes.addEventListener('click', ()=> 
    createCard(temples.filter(temple => {
      
      const parts = temple.dedicated.split(',').map(item => item.trim());
      const year = parseInt(parts[0]);
      
      return year < 1900;
    })));

  newOnes.addEventListener('click', ()=>
    createCard(temples.filter(temple => {
      const parts = temple.dedicated.split(',').map(item => item.trim());
      const year = parseInt(parts[0]);

      return year > 2000;
    })));

  largeOnes.addEventListener('click', ()=>
    createCard(temples.filter(temple => temple.area > 90000)));

  smallOnes.addEventListener('click', ()=>
    createCard(temples.filter(temple => temple.area < 10000)));

  

  function createCard(filteredTemple)
  {
    document.querySelector(".gallery").innerHTML = "";
    filteredTemple.forEach(temple => {

    let card = document.createElement('section');
    let templeName = document.createElement('h2');
    let location = document.createElement('h3');
    let dedication = document.createElement('h3');
    let area = document.createElement('h3');
    let img = document.createElement('img');

    templeName.textContent = temple.templeName
    location.innerHTML = `<span class="label">Location: </span>${temple.location}`;
    dedication.innerHTML = `<span class="label">Dedicated: </span>${temple.dedicated}`;
    area.innerHTML = `<span class="label">Area: </span>${temple.area}`;
    img.setAttribute('src', temple.imageUrl);
    img.setAttribute('alt', `${temple.templeName} Temple`);
    img.setAttribute('loading','lazy');

    card.appendChild(templeName);
    card.appendChild(location);
    card.appendChild(dedication);
    card.appendChild(area);
    card.appendChild(img);

    document.querySelector('.gallery').appendChild(card);
      
    });
  
  }

  

