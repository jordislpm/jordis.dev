(function modifih1 (){
    const h1 = document.querySelector('#h1'); 
        h1.addEventListener('mousemove', (evento) =>{
            h1.classList.remove('h1_active');
            h1.classList.add('h1_desactive');
            evento.stopPropagation();
            

         });
    
        h1.addEventListener('mouseleave', (evento) =>{
            h1.classList.remove('h1_desactive');
            h1.classList.add('h1_active');
            evento.stopPropagation();
         });

})()





