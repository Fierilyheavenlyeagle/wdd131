document.addEventListener("DOMContentLoaded", () => {

  const year = document.querySelector("#year");
  const lastMod = document.querySelector("#lastModified");
  const reviewsNumber = document.querySelector("#reviewsNumber");

  const today = new Date();
  const modified = new Date(document.lastModified);
  
  year.innerHTML = `<span class="year1">${today.getFullYear()}</span>`;
  lastMod.innerHTML = `<span class="mod1">Last Modification : ${modified.toLocaleString()}</span>`;

  const productSelect = document.querySelector("#product")
  
  const products = [
    {
      id: "fc-1888",
      name: "flux capacitor",
      averagerating: 4.5
    },
    {
      id: "fc-2050",
      name: "power laces",
      averagerating: 4.7
    },
    {
      id: "fs-1987",
      name: "time circuits",
      averagerating: 3.5
    },
    {
      id: "ac-2000",
      name: "low voltage reactor",
      averagerating: 3.9
    },
    {
      id: "jj-1969",
      name: "warp equalizer",
      averagerating: 5.0
    }
  ];

  function getOptions(array) {
    return array.map(item => `<option value="${item.id}">${item.name}</option>`).join('');
  }

  const options = getOptions(products);

  productSelect.innerHTML = `<option value="">Please Select &#9662;</option>${options}`;

  let reviewCount = parseInt(localStorage.getItem("reviewCount")) || 0;
  reviewsNumber.textContent = reviewCount

  addEventListener("submit",(event)=>{
    reviewCount++
    localStorage.setItem("reviewCount", reviewCount);
    reviewsNumber.textContent = reviewCount;
  })

});
