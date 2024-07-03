/* let second = 125;

console.log( second / 60 + " dk " + second % 60 + " sn"); */

/* let saniye = prompt("Lütfen bir saniye giriniz -->");

console.log(parseInt(saniyeInt / 60) + " dk " + saniyeInt % 60 + " sn"); */

/* et heat = prompt("fahrenayt cinsinden sıcaklığı giriniz");

let celcius = 5/9 * (heat - 32);

console.log(celcius + " derece"); */

let year = prompt("Enter a year");

year = parseInt(year);

if (year % 400 == 0 || year % 4 == 0 && year % 100 != 0)
    {
        console.log("Artık yıl");
    }
    else {console.log("Artık yıl değil");}