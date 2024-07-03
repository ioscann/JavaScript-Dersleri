const img = document.querySelectorAll(".content img");

let check = true;

for (let index = 0; index < img.length; index++) {
    
  img[index].onmouseenter = function () 
  {
    img[index].nextElementSibling.textContent = 1;

    conntrolContents();
  };

  
  function controlContents() {
    if 
    (
      img[0].nextElementSibling.textContent == 1 &&
      img[1].nextElementSibling.textContent == 1 &&
      img[2].nextElementSibling.textContent == 1 &&
      img[3].nextElementSibling.textContent == 1 &&
      img[4].nextElementSibling.textContent == 1 &&
      check == true
    ) 
    {
      window.alert("bütün yemekleri incelediniz :D");
      check = false;
     
    }
  }
}
