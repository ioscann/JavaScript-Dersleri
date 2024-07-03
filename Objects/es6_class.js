class Person
{
    static count = 0;

    constructor(ad,soyad,yas,cinsiyet)
    {
        this.ad = ad;
        this.soyad = soyad;
        this.yas = yas;
        this.cinsiyet = cinsiyet;
        Person.count++;
    }

    get adGet(){
        return this.ad;
    }

    set adSet(ad){
        this.ad = ad;
    }

    get soyadGet(){
        return this.soyad;
    }

    set soyadSet(soyad){
        this.soyad = soyad;
    }

    get yasGet(){
        return this.yas;
    }

    set yasSet(yas){
        this.yas = yas;
    }

    get cinsiyetGet(){
        return this.cinsiyet;
    }

    set cinsiyetSet(cinsiyet){
        this.cinsiyet = cinsiyet;
    }

    hi()
    {
        return "Selam benim adım " + this.ad + " " + this.soyad + " " + this.yas + " yasşındayım " + this.cinsiyet + " "; 
    }
}

class Student extends Person
{
    constructor(ad,soyad,yas,cinsiyet,okul)
    {
        super(ad,soyad,yas,cinsiyet);
        this.okul = okul;
    }

    get okulGet()
    {
        return this.okul;
    }

    set okulSet(okul){
        this.okul = okul;
    }

    saySchool()
    {
        return this.okul + " okulunda okuyorum";
    }
}


const ismailcan = new Person("İsmailcan","Vurur",31,false);

console.log(ismailcan.hi());

console.log(ismailcan.adSet = "anan");

console.log(ismailcan.hi());

const habil = new Student("habil","ayhan",31,false,"EBYU");

console.log(habil.hi() + habil.saySchool());

console.log("Oluşturulan kişi sayısı --> " + Person.count);
