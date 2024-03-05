import { barcelona,roma, paris, londres } from "./ciudades.js"

// Permite editar información de elementos en el DOM mediante sus etiquetas.
let enlaces = document.querySelectorAll('a')

// Permite editar información de elementos en el DOM mediante sus IDs.
let tituloElemento = document.getElementById('titulo')
let subtituloElemento = document.getElementById('subtitulo')
let parrafoElemento = document.getElementById('parrafo')
let precioElemento = document.getElementById('precio')

enlaces.forEach(function(unoDeLosEnlacesDelBucle){
        // Agregamos un EVENTO con su respectiva FUNCIÓN a la etiqueta.
        unoDeLosEnlacesDelBucle.addEventListener('click', function(){

                // 1 remueve ACTIVE.
                enlaces.forEach(function(unoDeLosEnlacesDelBucle){
                    unoDeLosEnlacesDelBucle.classList.remove('active')});

                // 2 agrega ACTIVE.
                this.classList.add('active');

                // 3 obtiene el contenido de cada enlace
                let contenido = obtenerContenido(this.textContent);

                // 4 mostrar el contenido en el DOM.
                tituloElemento.innerHTML = contenido.titulo
                subtituloElemento.innerHTML = contenido.subtitulo
                parrafoElemento.innerHTML = contenido.parrafo
                precioElemento.innerHTML = contenido.precio

            }// <- Función del evento.
        )// <- Parámetros para el evento.
    }// <- Función que ejecuta forEach.
);

// Trae la información de CIUDADES.JS .
function obtenerContenido(unEnlace){
    
    // Aquí se almacenará la información de las ciudades para usarce en este archivo.
    // Esta variable tendrá toda la información obtenida según su nombre de ciudad.
    let contenido = {
        // Nombre de cuidad : información que se obtendrá según nombre.
        'Barcelona' : barcelona,
        'Roma' : roma,
        'París' : paris,
        'Londres' : londres
    }; return contenido[unEnlace];
}