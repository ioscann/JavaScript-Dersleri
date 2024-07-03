// object netdi hatırlayalım

const info = {
    ad : "İsmailcan",
    soyad : "Vurur",
    evliMi : false,
    sevdigiRenkler : ["mavi","mor"],
    adres : {
        il : "Tokat",
        ilçe : "Turhal",
        plaka : 60 
    },

    bilgileriYazdir : function(){
        console.log(this.ad + this.soyad + this.sevdigiRenkler + this.adres);
    },

    ["tam-ad"]: "İsmailcan Vurur"
}

info.okul = "EBYU";
delete info.okul;

console.log(info.okul);

const iso = createStudent("iso","vurur",false,["mavi","mor"],"EBYU");
const habil = createStudent("habil","götüsikik",false,["pembe","mor"],"EBYU");


//factory function
function createStudent(isim,soyisim,evli,sevdigimRenkler,okulum)
{
    return {
        ad: isim,
        soyad: soyisim,
        evliMi : evli,
        sevdigiRenkler : sevdigimRenkler,
        okul : okulum
    };
}

console.log(iso);
console.log(habil);


//constructor function

function Student(ad,soyad,evliMi,okul)
{
    this.ad = ad;
    this.soyad = soyad;
    this.evliMi = evliMi;
    this.okul = okul;
    this.showInfo = function (){
        return this.ad + " " + this.soyad + " " + this.evliMi + this.okul;
    }
}

const serhat = new Student("serhat","karagöz",false,"PMKL");

console.log(serhat);