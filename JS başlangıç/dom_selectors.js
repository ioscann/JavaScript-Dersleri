console.log(document.getElementById("header"));

console.log(document.getElementById("header").id)

const header = document.getElementById("header");

header.style.color = "red";
header.style.backgroundColor = "black"
header.style.marginTop = "20px"
//header.style.display = "none" // görünmez yapar

header.textContent = "ZAAAAAAAAAAAAAAA"
const textValue = header.textContent;
console.log(textValue);

header.innerText = "AHAHAHHAHAHAHAHAHAHAHAH"
//header.innerHTML = '<img id = "anan" src="https://w0.peakpx.com/wallpaper/486/357/HD-wallpaper-among-us-karakter-among-us-art-beyaz-cizim-game-kirmizi-resim.jpg" width=100 height=100 alt="">'

console.log(document.querySelector('h1'));
console.log(document.querySelector('.list'));
console.log(document.querySelector("#list"));
console.log(document.querySelector(".list-item-1").textContent);

const firstItem = document.querySelector(".list-item-2");

firstItem.style.color = "red";

const links = document.getElementsByClassName("link");

console.log(links);
console.log(links[1].textContent);

const linkArray = Array.from(links);

console.log(linkArray.reverse());

linkArray.forEach( item => {
    console.log(item);
});

const tags = document.getElementsByTagName("form")

console.log(tags);

const all = document.querySelectorAll("li");

console.log(all);

all[2].style.color = "yellow";  