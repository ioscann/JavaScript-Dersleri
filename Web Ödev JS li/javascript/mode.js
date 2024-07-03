const navbar = document.querySelector('.navbar');
const footer = document.querySelector('.footer');
const modeButton = document.querySelector('.darklightmode');

setLocal();

function setLocal()
{
   if (localStorage.getItem("mode") === null)
   {
      let mode = 0;
      localStorage.setItem("mode", JSON.stringify(mode));
   }
}

function kontrol(){
   if (localStorage.getItem("mode") == 0) {
      modeButton.style.color = 'white';
      footer.style.background = 'black';
      navbar.style.background = 'black';

   }
   else if (localStorage.getItem("mode") == 1) {
      modeButton.style.color = 'black';
      footer.style.background = 'rgb(87, 85, 85)';
      navbar.style.background = 'rgb(87, 85, 85)';
   }
}

modeButton.onclick = function(){
   
   if (localStorage.getItem("mode") == 0) {
      modeButton.style.color = 'white';
      footer.style.background = 'black';
      navbar.style.background = 'black';
      localStorage.setItem("mode", 1);
   }
   else if(localStorage.getItem("mode") == 1){
      modeButton.style.color = 'black';
      footer.style.background = 'rgb(87, 85, 85)';
      navbar.style.background = 'rgb(87, 85, 85)';
      localStorage.setItem("mode", 0);
   }
}

setInterval(kontrol,1);