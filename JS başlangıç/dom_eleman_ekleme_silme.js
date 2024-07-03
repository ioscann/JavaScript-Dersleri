const newImage = document.createElement("img");
newImage.src = "https://w0.peakpx.com/wallpaper/486/357/HD-wallpaper-among-us-karakter-among-us-art-beyaz-cizim-game-kirmizi-resim.jpg";
newImage.className = "amogus";

document.querySelector("body").append(newImage);

const newUl = document.createElement("li");
newUl.className = "list-item";
newUl.textContent = "Yozgat";

document.querySelector("li").appendChild(newUl);

const newHeader = document.createElement("h1");
newHeader.textContent = "ANAN";
newHeader.className = "31";

const currentHeader = document.querySelector("h1");
const headerParent = document.querySelector("body");
headerParent.replaceChild(newHeader,currentHeader);

const myImage = document.querySelector("img");
myImage.remove();

const listItem = document.querySelectorAll("li");
console.log(listItem);
listItem[0].remove();

const myText = document.querySelectorAll("input");
console.log(myText);
myText[0].remove();
