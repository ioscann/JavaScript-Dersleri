//Array destructuring

let isim = ["ismailcan","vurur"];

const ad = isim[0];
const soyad = isim[1];

const [firs,last] = isim;

console.log(firs,last);

const renkler = ["sarı","mavi","mor","kırmızı","yeşil","pembe"];

const [r1,r2, ...kalanlar] = renkler;

console.log(r1,r2,kalanlar);

// Object destructuring

let ayarlar = {
    baslik: "JS amk",
    genislik: "300px",
    yukseklik: "300px"
}

const title = ayarlar.baslik;

console.log(title);

const {baslik : b, genislik : g, yukseklik : y} = ayarlar;

console.log(b,g,y);
