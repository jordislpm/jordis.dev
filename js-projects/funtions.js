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

  carruselItems.addEventListener("onclick", () => {
    window.location.reload(true);
  });
  
  start();


  // respondive part

  (function (){
    let menuHorizontal = document.querySelector('.menu-horizontal');
    let menuVertical = document.querySelector('.menu-vertical');
    let nav = document.querySelector('.nav');
    

    if (window.matchMedia("(max-width: 800px)").matches) {

        
        menuHorizontal.removeAttribute("class", "menu-horizontal");
        menuHorizontal.setAttribute("class", "menu-horizontal-responsive");

        nav.removeAttribute("class", "nav");
        nav.setAttribute("class", "nav-responsive");

     
  
        
       } else {  
       
      }  
  })()

  (function (){
    window.addEventListener('click',()=>{
      window.location.reload();


    })
    

  })()



  