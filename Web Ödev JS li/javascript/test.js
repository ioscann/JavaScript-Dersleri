const soru = document.querySelector('.soru');
const answer = document.querySelectorAll('.answer');

var cevapdogru = new Array;
var hangisoru = 1;
kontrol();
function kontrol(){
    console.log(cevapdogru);
if (hangisoru == 1) {
    soru.textContent = 'Tokat\'ın en büyük ilçesi nedir';
    answer[0].textContent = 'Erbaa';
    answer[1].textContent = 'Turhal';
    answer[0].onclick = function(){
      cevapdogru[0] = true;
      hangisoru++;
      kontrol();
    }
    
}
if (hangisoru == 2) {
     soru.textContent = 'Tokat\'ın neyi meşhurdur';
    answer[0].textContent = 'Tokat Kebabı';
    answer[1].textContent = 'Tokat Yaprağı';
    answer[1].onclick = function(){
        
        cevapdogru[1] = true;
      hangisoru++;
      kontrol();
    }
    
}
if (hangisoru == 3) {
     soru.textContent = 'Tokat\'ın yüzölçümü nedir';
    answer[0].textContent = '10000km2';
    answer[1].textContent = '7000km2';
    answer[0].onclick = function(){
        cevapdogru[2] = true;
      hangisoru++;
      kontrol();
    }
    
}
if (hangisoru == 4) {
     soru.textContent = 'Aşağıdakilerden hangisi Tokat\'ın komşusudur';
    answer[0].textContent = 'Ankara';
    answer[1].textContent = 'Amasya';
    answer[1].onclick = function(){
        cevapdogru[3] = true;
       hangisoru++;
       kontrol();
    }
   
}
var dogrusayisi = 0;
if (hangisoru == 5) {
     soru.textContent = 'Aşağıdakilerden hangisi Tokat\'ın ilçesi değildir';
    answer[0].textContent = 'Sivaslı';
    answer[1].textContent = 'Zile';
    answer[0].onclick = function(){
        cevapdogru[4] = true;
      
        for (let index = 0; index <= 4; index++) {
            if (cevapdogru[index] == true) {
                dogrusayisi++;
            }}
          window.alert(dogrusayisi + ' soru bildiniz');
          answer[0].style.display = 'none'
          answer[1].style.display = 'none'
          soru.textContent = 'Sorular Bitti';
      
      
    }
    
}
}
