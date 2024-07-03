function Person(ad,soyad)
{
    this.ad = ad;
    this.soyad = soyad;
}

Person.prototype.hi = function () {
    return "Selam benim adım " + this.ad +  " " + this.soyad;
}

function Student(ad,soyad,sinif,okul)
{
    Person.call(this,ad,soyad);
    this.sinif = sinif;
    this.okul = okul;
}

Student.prototype.hi = function () {
    return "Selam benim adım " + this.ad + " " + this.soyad + " " + this.sinif + ". sınıf öğrencisiyim " + this.okul + " okulunda okuyorum"; 
}

const iso = new Person("ismailcan","vurur");
const habil = new Student("Habil","götüsikik",4,"EBYU");

console.log(iso.hi());
console.log(habil.hi());

