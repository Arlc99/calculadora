const pantalla = document.querySelector('.pantalla'); 
const botones = document.querySelectorAll(".btn")// queryselectorall crea por defecto un array con los botones



//para cada boton vamos agregar un evento de escucha de tipo click
botones.forEach (boton =>{
    
    boton.addEventListener('click', (event)=>{
          event.preventDefault();
        // guardamos en una variable textContent que trae el valor de cada uno de los botones
        const botonApretado= boton.textContent;
      
       //volvemos a cero la pantalla con el boton de reset d ela calculadora utilizando su id
       if (boton.id === "c" ) {
            pantalla.value = "0"
            return;  //termina la funcion padre
       }

        //borramos los elementos de la pantall a
        if(boton.id === "borrar") {
            // si tenemos un solo caracter deberia pantalla volver a cero , agregamor condicion error para cuando se ejecute algun erro en iggual y borremos la pantalla vuelva a cero
            if(pantalla.value.length === 1 || pantalla.value === "Error!") {
                pantalla.value = "0"; 
            }else  {
                pantalla.value = pantalla.value.slice(0,-1);
            }
            
            return; 
        }

        //para cuando presionemos igual resuleva la operacion 
        if(boton.id === "igual") {
            // atrapamos cualquier exepcion o error 
            try {
                pantalla.value = eval(pantalla.value) // esta funcion evalua un conjunto de estring que tenga operaciones matematicas en un solo string

            } catch {
                pantalla.value = "Error!"
            }
           
            return; 
        }



     
        // creamos un if para borrar el cero que esta por defecto en la pantalla de la calculado, agregamos condicion de error para cuando presionemos algun boton se borrer el error de la pantalla se escriba normal
        if(pantalla.value === "0" || pantalla.value === "Error!") {
            // solo se muestra el primer boton que se apreta
            pantalla.value = botonApretado; 
        } else {
           //mostramos en la pantalla los botones que se apretan 
            pantalla.value += botonApretado; 
        }
       
    })
})