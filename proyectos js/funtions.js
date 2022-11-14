const carrusel =document.querySelector('.carrusel');
const carruselItem =document.querySelector('.carrusel-item');
const carruselItems =document.querySelector('.carrusel-items');

const h1 =document.getElementById('h1');

let maxScrollLeft = carruselItems.scrollWidth - carruselItems.clientWidth;
intervalo = null
let step = 1;

const start = ()=> {
    intervalo = setInterval(function(){
        carruselItems.scrollLeft = carruselItems.scrollLeft + step;
        if (carruselItems.scrollLeft === maxScrollLeft){
            step= step * -1;

        } else if(carruselItems.scrollLeft === 0){
            step = step * -1;
        }
    },10);

};

const stop = () => {
    clearInterval(intervalo);
  };
  
  
  carruselItems.addEventListener("mouseover", () => {
    stop();
  });
  
  carruselItems.addEventListener("mouseout", () => {
    start();
  });
  
  start();