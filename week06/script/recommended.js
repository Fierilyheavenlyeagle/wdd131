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

  const books = [
    {
      Book: "Mistborn",
      Author: "Brandon Sanderson",
      Published: "2006, July, 7",
      Pages:  647,
      imageUrl:
      "https://www.brandonsanderson.com/wp-content/uploads/2023/12/Mistborn.png"
    },
    {
      Book: "Around the World in 80 Days",
      Author: "Julio Verne",
      Published: "1872, December, 22",
      Pages:  300,
      imageUrl:
      "https://www.penguinlibros.com/pe/1694880-thickbox_default/julio-verne-la-vuelta-al-mundo-en-80-dias-edicion-actualizada-ilustrada-y-adaptada.jpg"
    },
    {
      Book: "The Lord of the Rings",
      Author: "J.R.R. Tolkien",
      Published: "1954, July, 29",
      Pages:  423,
      imageUrl:
      "https://m.media-amazon.com/images/I/61nNVj-kFZL._AC_UF1000,1000_QL80_.jpg"
    },
    {
      Book: "The Little Prince",
      Author: "Antoine de Saint-Exupéry",
      Published: "1943, April, 6",
      Pages: 100,
      imageUrl:
      "https://http2.mlstatic.com/D_NQ_NP_701029-MLU76613284745_052024-O.webp"
    },
    {
      Book: "Moby-Dick",
      Author: "Herman Melville",
      Published: "1851, October, 18",
      Pages:  635,
      imageUrl:
      "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/7yJfPlnTAd8QSaC5OjNkZnorngB.jpgtps://content.churchofjesuschrist.org/templesldsorg/bc/Temples/photo-galleries/washington-dc/400x250/washington_dc_temple-exterior-2.jpeg"
    },
    {
      Book: "The Book of the Jungle",
      Author: "Rudyard Kipling's",
      Published: "1894, October, 5",
      Pages: 300,
      imageUrl:
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTdVstqIjJFqKrdmuEVupJPvv3UF6y35BG05nPz_a2mlIR8qMLcqjWdAOKMHGDbnFJcYpI&usqp=CAU"
    },
    {
      Book: "The Book of the Jungle",
      Author: "Herman Melville",
      Published: "1851, October, 5",
      Pages: 700,
      imageUrl:
      "https://www.cidermillpress.com/cdn/shop/files/9781951511302.jpg?v=1692886308&width=823"
    },
    {
      Book: "Romeo and Juliet",
      Author: "William Shakespeare",
      Published: "1597, September, 11",
      Pages: 150,
      imageUrl:
      "https://www.insightpublica.com/assets/img/books/insight_publica_book791_image_1_.4637331-jpg"
    },
    {
      Book: "Dorian Gray",
      Author: "Oscar Wilde",
      Published: "1890, July, 20",
      Pages: 300,
      imageUrl:
      "https://i.ebayimg.com/images/g/G2MAAOSwwXdknYTp/s-l960.webp"
    },
    {
      Book: "The Metamorphosis",
      Author: "Franz Kafka",
      Published: "1915, October, 17",
      Pages: 150,
      imageUrl:
      "https://pictures.abebooks.com/isbn/9789500372916-uk.jpg"
    },

  ];

  createCard(books)

  oldOnes = document.getElementById('old');
  newOnes = document.getElementById('new');
  largeOnes = document.getElementById('large');
  smallOnes = document.getElementById('small');
  home = document.getElementById('home');

  home.addEventListener('click', ()=>
    createCard(books))

  oldOnes.addEventListener('click', ()=> 
    createCard(books.filter(book => {
      
      const parts = book.Published.split(',').map(item => item.trim());
      const year = parseInt(parts[0]);
      
      return year < 1900;
    })));

  newOnes.addEventListener('click', ()=>
    createCard(books.filter(book => {

      const parts = book.Published.split(',').map(item => item.trim());
      const year = parseInt(parts[0]);

      return year > 1900;
    })));

  largeOnes.addEventListener('click', ()=>
    createCard(books.filter(book => book.Pages > 300)));

  smallOnes.addEventListener('click', ()=>
    createCard(books.filter(book => book.Pages < 300)));

  

  function createCard(books)
  {
    document.querySelector(".gallery").innerHTML = "";
    books.forEach(book => {

    let card = document.createElement('section');
    let mybook = document.createElement('h2');
    let author = document.createElement('h3');
    let published = document.createElement('h3');
    let pages = document.createElement('h3');
    let img = document.createElement('img');

    mybook.textContent = book.Book
    author.innerHTML = `<span class="label">Author: </span>${book.Author}`;
    published.innerHTML = `<span class="label">Published: </span>${book.Published}`;
    pages.innerHTML = `<span class="label">Pages: </span>${book.Pages}`;
    img.setAttribute('src', book.imageUrl);
    img.setAttribute('alt', `${book.Book} Temple`);
    img.setAttribute('loading','lazy');

    card.appendChild(mybook);
    card.appendChild(author);
    card.appendChild(published);
    card.appendChild(pages);
    card.appendChild(img);

    document.querySelector('.gallery').appendChild(card);
      
    });
  
  }

  

