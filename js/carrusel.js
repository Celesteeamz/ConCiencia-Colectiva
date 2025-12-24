// Creo la biblioteca de imagenes con sus definiciones 
let imagenes = [
   {
        "url": "img/FotosdeProyectosPropios/Ar-mate1.jpg",
        "nombre": "Ar-Mate",
        "descripcion": "Our product stems from the desire to take mate to space as a symbol of Argentine culture. Beyond the number of Argentine astronauts, we seek to ensure that, even where there are no borders, our identity, our roots, and our worldview are present. It's not just about representation: it's about demonstrating that Argentine culture can reach as far as our dreams."
    },
    {
        "url": "img/FotosdeProyectosPropios/Sparky.jpg",
        "nombre": "Sparky", 
        "descripcion": "A smart lamp that is responsible for communicating to people when James Webb makes a new discovery by changing the color of its LEDs from gold to reddish, also allows you to see all the information from his official website once notified."
    }
]

// Creo los botones y los divs 
let atras = document.getElementById('atras');
let adelante = document.getElementById('adelante');
let imagen = document.getElementById('img');
let puntos = document.getElementById('puntos');
let texto = document.getElementById('texto')
let actual = 0
posicionCarrusel()

// Creo los eventos 
atras.addEventListener('click', function(){
    actual -=1

    if (actual == -1){
        actual = imagenes.length - 1
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

adelante.addEventListener('click', function(){
    actual +=1

    if (actual == imagenes.length){
        actual = 0
    }

    imagen.innerHTML = ` <img class="img" src="${imagenes[actual].url}" alt="logo pagina" loading="lazy"></img>`
    texto.innerHTML = `
    <h3>${imagenes[actual].nombre}</h3>
    <p>${imagenes[actual].descripcion}</p>
    `
    posicionCarrusel()
})  

function posicionCarrusel() {
    puntos.innerHTML = ""
    for (var i = 0; i <imagenes.length; i++){
        if(i == actual){
            puntos.innerHTML += '<p class="bold">.<p>'
        }
        else{
            puntos.innerHTML += '<p>.<p>'
        }
    } 
}

