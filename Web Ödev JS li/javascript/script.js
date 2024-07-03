const anaresim = document.querySelector('.mainimg');
const ikincilresim = document.querySelectorAll('.jsimg');
const solok = document.querySelector('#leftarrow');
const sağok = document.querySelector('#rightarrow');


var temp = 4;


for (let index = 0; index < ikincilresim.length; index++) {
    ikincilresim[index].onclick = function(){
        anaresim.src = ikincilresim[index].src;
        temp = index;
        console.log(temp);
    }
    
}
solok.onclick = function(){
    temp--;
    console.log(temp);
    if (temp < 0) {
      temp = ikincilresim.length-1;
    }
      anaresim.src = ikincilresim[temp].src;
  }
  sağok.onclick = function(){
   temp++;
   console.log(temp);
   if (temp > ikincilresim.length-1) {
      temp = 0;
   }
      anaresim.src = ikincilresim[temp].src;
  }


 