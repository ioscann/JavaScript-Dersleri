localStorage.setItem("ad","ismailcan");
localStorage.setItem("soyad","vurur");
localStorage.setItem("yas",31);

sessionStorage.setItem("il","tokat");

console.log(localStorage.getItem("soyad"));
console.log(sessionStorage.getItem("il"));

localStorage.removeItem("ad");
sessionStorage.clear();