alert("hola kikeriveros bienvenido a mokepon");

let ataqueJugador
let ataqueEnemigo

function iniciarJuego() {
  let botonMascotaJugador = document.getElementById("boton-mascotas");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById('boton-fuego');
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById('boton-agua');
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById('boton-tierra');
  botonTierra.addEventListener("click", ataqueTierra);
}
function seleccionarMascotaJugador() {
    let inputHipodoge = document.getElementById("hipodoge")
    let inputCapipepo = document.getElementById("capipepo")
    let inputratigueya = document.getElementById("ratigueya")
    let spanMascotaJugador = document.getElementById('mascota-jugador');
    

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = 'Hipodoge'
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML =  'Capipepo'
  } else if (inputratigueya.checked) {
    spanMascotaJugador.innerHTML = 'Ratigueya'
  } else {
    alert('Selecciona una mascota')
  }
  seleccionarMascotaEnemigo()
}
function seleccionarMascotaEnemigo() {
    let mascotaAletorio = aleatorio(1,3)
    let spanMascotaEnemigo = document.getElementById('mascota-enemigo');
    if (mascotaAletorioo == 1) {
      spanMascotaEnemigo.innerHTML = 'Hipodoge'
    } else if (mascotaAletorio == 2) {
      spanMascotaEnemigo.innerHTML = 'Capipepo'
    } else {
      spanMascotaEnemigo.innerHTML = 'Ratigueya'
    }    
}
function ataqueFuego() {
  ataqueJugador = 'FUEGO'
  ataqueAleatorioEnemigo ();
}
function ataqueAgua () {
  ataqueJugador = 'AGUA'
  ataqueAleatorioEnemigo ();
}
function ataqueTierra() {
  ataqueJugador = 'TIERRA'
  ataqueAleatorioEnemigo ();
}
function ataqueAleatorioEnemigo () {
  let ataqueAleatorio = aleatorio(1,3);
  if (ataqueAleatorio == 1){
    ataqueEnemigo = 'FUEGO'
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = 'AGUA'
  } else {
    ataqueEnemigo = 'TIERRA'
  }
  combate();//se invoca la función aquí, antes de la de crearMensaje, para que la variable resultado ya tenga un valor establecido

  crearMensaje();
}
//En vez de invocar la función crearMensaje en cada una de las condicionantes se le asigna un valor a la variable resultado
function combate() {
  if (ataqueJugador == ataqueEnemigo) {
    resultado = "EMPATE"
} else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    resultado = "GANASTE"
} else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    resultado = "GANASTE"
} else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    resultado = "GANASTE"
} else {resultado = "PERDISTE"}
}
function crearMensaje () {
  let sectionMensajes = document.getElementById('mensajes')
  let parrafo = document.createElement('p')
  parrafo.innerHTML = 'Tu mascota ataco con ' + ataqueJugador + ', la mascota del enemigo ataco con ' + ataqueEnemigo + ':' + resultado
  sectionMensajes.appendChild(parrafo)
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
