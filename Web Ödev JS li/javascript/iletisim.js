const input = document.querySelectorAll('.inputdiv input');
const button = document.querySelector('.button');

button.onclick = function(){
    window.alert("İsim: " + input[0].value + "\n" +
                 "Soyisim: " + input[1].value + "\n" +
                 "Adres: " + input[2].value + "\n" +
                 "Mail: " + input[3].value);
}


