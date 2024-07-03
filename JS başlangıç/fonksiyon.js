// let cities = [
//     {ad : "istanbul", meshur : "gavatı",nufus : 1000},
//     {ad : "zonguldak", meshur : "bomba",nufus : 2000},
//     {ad : "Ankara", meshur : "tusas",nufus : 3000}
// ];

// cities.sort((a, b) => {
//     if (a.ad > b.ad) { return -1;}

//     else if (a.ad < b.ad) {return 1;}

//     else {return 0;}
// });

//console.log(cities);

// let number = parseInt(prompt("sayi gir --> "));

// let fArray = [0,1];
// let n1,n2;

// for (let i = 2 ; i < number; i++)
//     {
//         n1 = fArray[i-1];
//         n2 = fArray[i-2];
            
//         fArray[i] = n1 + n2;      
//     }

//     console.log(fArray);

let students = [
    {id : 2, ad : "iso", soyad : "vurur"},
    {id : 2, ad : "habil", soyad : "kabil"},
    {id : 2, ad : "yarrak", soyad : "kürek"},
    {id : 2, ad : "zarrak", soyad : "kürek"},
    {id : 2, ad : "arrak", soyad : "kürek"}
]

let yarakDizi = [];

for (let i = 0 ; i<students.length;i++)
    {
        if (students[i].id % 2 == 0)
            {
                yarakDizi[i] = students[i].ad + students[i].soyad;
            }
    }

yarakDizi.sort((a,b) => {

    if (a > b) {return 1;}
    else if (a < b) {return -1;}
    else {return 0}
});

console.log(yarakDizi);
