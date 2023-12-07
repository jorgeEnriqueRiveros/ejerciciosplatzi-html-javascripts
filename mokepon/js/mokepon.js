alert("hola kikeriveros bienvenido a mokepon");

let ataqueJugador;
let ataqueEnemigo;
let vidasJugador = 3;
let vidasEnemigo = 3;

function iniciarJuego() {
  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
  sectionSeleccionarAtaque.style.display = 'none';

  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'none';

  let botonMascotaJugador = document.getElementById("boton-mascotas");
  botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.addEventListener("click", ataqueFuego);
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.addEventListener("click", ataqueAgua);
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.addEventListener("click", ataqueTierra);

  let botonReiniciar = document.getElementById("boton-reiniciar");
  botonReiniciar.addEventListener("click", reiniciarJuego);
}
function seleccionarMascotaJugador() {
  let sectionSeleccionarMascota = document.getElementById('seleccionar-mascota')
  sectionSeleccionarMascota.style.display = 'none';

  let sectionSeleccionarAtaque = document.getElementById('seleccionar-ataque')
  sectionSeleccionarAtaque.style.display = 'block';

  let inputHipodoge = document.getElementById("hipodoge");
  let inputCapipepo = document.getElementById("capipepo");
  let inputratigueya = document.getElementById("ratigueya");
  let spanMascotaJugador = document.getElementById("mascota-jugador");

  if (inputHipodoge.checked) {
    spanMascotaJugador.innerHTML = "Hipodoge";
  } else if (inputCapipepo.checked) {
    spanMascotaJugador.innerHTML = "Capipepo";
  } else if (inputratigueya.checked) {
    spanMascotaJugador.innerHTML = "Ratigueya";
  } else {
    alert("Selecciona una mascota");
  }
  seleccionarMascotaEnemigo();
}
function seleccionarMascotaEnemigo() {
  let mascotaAletorio = aleatorio(1, 3);
  let spanMascotaEnemigo = document.getElementById("mascota-enemigo");
  if (mascotaAletorioo == 1) {
    spanMascotaEnemigo.innerHTML = "Hipodoge";
  } else if (mascotaAletorio == 2) {
    spanMascotaEnemigo.innerHTML = "Capipepo";
  } else {
    spanMascotaEnemigo.innerHTML = "Ratigueya";
  }
}
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorioEnemigo();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorioEnemigo();
}
function ataqueTierra() {
  ataqueJugador = "TIERRA";
  ataqueAleatorioEnemigo();
}
function ataqueAleatorioEnemigo() {
  let ataqueAleatorio = aleatorio(1, 3);
  if (ataqueAleatorio == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataqueAleatorio == 2) {
    ataqueEnemigo = "AGUA";
  } else {
    ataqueEnemigo = "TIERRA";
  }
  combate(); //se invoca la función aquí, antes de la de crearMensaje, para que la variable resultado ya tenga un valor establecido

  crearMensaje();
}
//En vez de invocar la función crearMensaje en cada una de las condicionantes se le asigna un valor a la variable resultado
function combate() {
  let spanVidasJugador = document.getElementById("vidas-jugador");
  let spanVidasEnemigo = document.getElementById("vidas-enemigo");

  if (ataqueJugador == ataqueEnemigo) {
    resultado = "EMPATE";
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "TIERRA") {
    resultado = "GANASTE";
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = 'vidasEnmigo';
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    resultado = "GANASTE";
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = 'vidasEnemigo';
  } else if (ataqueJugador == "TIERRA" && ataqueEnemigo == "AGUA") {
    resultado = "GANASTE";
    vidasEnemigo--;
    spanVidasEnemigo.innerHTML = 'vidasEnemigo';
  } else {
    resultado = "PERDISTE";
    vidasJugador--;
    spanVidasJugador.innerHTML = 'vidasJugador';
  }
  revisarVidas();
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal('FELICITACIONES! Ganaste:)');
  } else if (vidasJugador == 0) {
    crearMensajeFinal('Lo siento, perdiste :(')
  }
}
function crearMensaje(resultado) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML =
    "Tu mascota ataco con " + ataqueJugador + ", la mascota del enemigo ataco con " + ataqueEnemigo + ":" + resultado;
  sectionMensajes.appendChild(parrafo);
}
function crearMensajeFinal(resultadoFinal) {
  let sectionMensajes = document.getElementById("mensajes");
  let parrafo = document.createElement("p");
  parrafo.innerHTML = resultadoFinal
    sectionMensajes.appendChild(parrafo);

  let botonFuego = document.getElementById("boton-fuego");
  botonFuego.disabled = true;
  let botonAgua = document.getElementById("boton-agua");
  botonAgua.disabled = true;
  let botonTierra = document.getElementById("boton-tierra");
  botonTierra.disabled = true;

  let sectionReiniciar = document.getElementById('reiniciar')
  sectionReiniciar.style.display = 'block';
}

function reiniciarJuego() {
  location.reload();
}
function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}

window.addEventListener("load", iniciarJuego);
