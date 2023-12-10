// funciones de seleccion de mascota
const radioHipodoge = document.getElementById("Hipodoge");
const radioCapipepo = document.getElementById("Capipepo");
const radioRatigueya = document.getElementById("Ratigueya");
// funciones de botones del jugador
const spanMascotaJugador = document.getElementById("mascota-jugador");
const botonMascotaJugador = document.getElementById("boton-mascota");
// funciones de seleccion de ataque + mascota, del jugador y enemigo
const sectionSeleccionarAtaque = document.getElementById("seleccionar-ataque");
const sectionSeleccionarMascota = document.getElementById("seleccionar-mascota");
const mascotaEnemigo = document.getElementById("mascota-enemigo");
// funciones de botones de ataques del jugador + enemigo
const botonFuego = document.getElementById("boton-fuego");
const botonAgua = document.getElementById("boton-agua");
const botonPlanta = document.getElementById("boton-planta");
// funciones de ataques de el jugador, enmigo
const seccionMensajes = document.getElementById("resultado");
const ataquesjugador = document.getElementById("ataques-jugador");
const ataquesEnemigo = document.getElementById("ataques-enemigo");
// funciones de vidas de jugador, enemigo
const spanVidasJugador = document.getElementById("vidas-jugador");
const spanVidasEnemigo = document.getElementById("vidas-enemigo");
// funcion reiniciar
const seccionReiniciar = document.getElementById("seccion-reiniciar");
const botonReiniciar = document.getElementById("boton-reiniciar");
const contenedorTarjetas = document.getElementById("contenedorTarjetas");

let ataqueJugador = "";
let ataqueEnemigo = "";
let opcionDeMokepones;
let inputHipodoge = document.getElementById("Hipodoge");
let inputCapipepo = document.getElementById("Capipepo");
let inputRatigueya = document.getElementById("Ratigueya");
let vidasJugador = 3;
let vidasEnemigo = 3;
let mokepones = [];

class Mokepon {
  constructor(nombre, foto, vida) {
    this.nombre = nombre;
    this.foto = foto;
    this.vida = vida;
    this.ataques = [];
  }
}
let hipodoge = new Mokepon("Hipodoge", "/mokepon/images/Hipodoge.png", 5);
let capipepo = new Mokepon("Capipepo", "/mokepon/images/Capipepo.png", 5);
let ratigueya = new Mokepon("Ratigueya", "/mokepon/images/Ratigueya.png", 5);

hipodoge.ataques.push(
   { nombre: "💧", id: "boton-agua" },
   { nombre: "💧", id: "boton-agua" },
   { nombre: "💧", id: "boton-agua" },
   { nombre: "🔥", id: "boton-fuego" },
   { nombre: "🌼", id: "boton-planta" }
);
capipepo.ataques.push(
   { nombre: "🌼", id: "boton-planta" },
   { nombre: "🌼", id: "boton-planta" },
   { nombre: "🌼", id: "boton-planta" },
   { nombre: "🔥", id: "boton-fuego" },
   { nombre: "💧", id: "boton-agua" }
);
ratigueya.ataques.push(
   { nombre: "🔥", id: "boton-fuego" },
   { nombre: "🔥", id: "boton-fuego" },
   { nombre: "🔥", id: "boton-fuego" },
   { nombre: "💧", id: "boton-agua" },
   { nombre: "🌼", id: "boton-planta" }
);
 
mokepones.push(hipodoge, capipepo, ratigueya);

window.addEventListener("load", iniciarJuego);

function iniciarJuego() {
  sectionSeleccionarAtaque.style.display = "none";

  mokepones.forEach((mokepon) => {
    opcionDeMokepones = `
    <input type="radio" name="mascota" id=${mokepon.nombre}>
    <label class="tarjeta-de-mokepon" for=${mokepon.nombre}>
    <p>${mokepon.nombre}</p>
    <img src=${mokepon.foto} alt=${mokepon.nombre}>
    </label>
    `
    contenedorTarjetas.innerHTML += opcionDeMokepones
    inputHipodoge = document.getElementById("Hipodoge");
    inputCapipepo = document.getElementById("Capipepo");
    inputRatigueya = document.getElementById("Ratigueya");
    
    botonMascotaJugador.addEventListener("click", seleccionarMascotaJugador);
}); 

  seccionReiniciar.style.display = "none";
  botonFuego.addEventListener("click", ataqueFuego);
  botonAgua.addEventListener("click", ataqueAgua);
  botonPlanta.addEventListener("click", ataquePlanta);
  botonReiniciar.addEventListener("click", reiniciarPartida);
}
function seleccionarMascotaJugador() {
    let nombreMascotaJugador = "";
    if (inputHipodoge.checked) {
      spanMascotaJugador.innerHTML = inputHipodoge.id;
      radioCapipepo.disabled = true;
      radioRatigueya.disabled = true;
    } else if (inputCapipepo.checked) {
      spanMascotaJugador.innerHTML = inputCapipepo.id;
      radioHipodoge.disabled = true;
      radioRatigueya.disabled = true;
    } else if (inputRatigueya.checked) {
      spanMascotaJugador.innerHTML = inputRatigueya.id;
      radioHipodoge.disabled = true;
      radioCapipepo.disabled = true;
    } else {
      alert("No has seleccionado ningún mokepon");
    }
    if (nombreMascotaJugador !== "") {
    mascotaJugador.innerHTML = nombreMascotaJugador;
    botonMascotaJugador.disabled = true;
    sectionSeleccionarAtaque.style.display = "flex";
    sectionSeleccionarMascota.style.display = "none";
    seleccionarMascotaEnemigo();
   }
 }
function seleccionarMascotaEnemigo() {
  let nombreMascotaEnemigo = "";
  let mascotaEnemigoAleatoria = aleatorio(1, 3);
  if (mascotaEnemigoAleatoria == 1) {
    nombreMascotaEnemigo = "Hipodoge";
  } else if (mascotaEnemigoAleatoria == 2) {
    nombreMascotaEnemigo = "Capipepo";
  } else if (mascotaEnemigoAleatoria == 3) {
    nombreMascotaEnemigo = "Ratigueya";
  }
  mascotaEnemigo.innerHTML = nombreMascotaEnemigo;
}
function ataqueFuego() {
  ataqueJugador = "FUEGO";
  ataqueAleatorio();
}
function ataqueAgua() {
  ataqueJugador = "AGUA";
  ataqueAleatorio();
}
function ataquePlanta() {
  ataqueJugador = "PLANTA";
  ataqueAleatorio();
}
function ataqueAleatorio() {
  let ataque = aleatorio(1, 3);

  if (ataque == 1) {
    ataqueEnemigo = "FUEGO";
  } else if (ataque == 2) {
    ataqueEnemigo = "AGUA";
  } else if (ataque == 3) {
    ataqueEnemigo = "PLANTA";
  }
  combate();
}
function combate() {
  let resultado = "";

  if (ataqueJugador == ataqueEnemigo) {
    resultado = "EMPATE";
  } else if (ataqueJugador == "FUEGO" && ataqueEnemigo == "PLANTA") {
    resultado = "GANASTE";
    vidasEnemigo = vidasEnemigo - 1;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "AGUA" && ataqueEnemigo == "FUEGO") {
    resultado = "GANASTE";
    vidasEnemigo = vidasEnemigo - 1;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else if (ataqueJugador == "PLANTA" && ataqueEnemigo == "AGUA") {
    resultado = "GANASTE";
    vidasEnemigo = vidasEnemigo - 1;
    spanVidasEnemigo.innerHTML = vidasEnemigo;
  } else {
    resultado = "PERDISTE";
    vidasJugador = vidasJugador - 1;
    spanVidasJugador.innerHTML = vidasJugador;
  }
  crearMensaje(resultado);
  revisarVidas();
}
function revisarVidas() {
  if (vidasEnemigo == 0) {
    crearMensajeFinal("FELICITACIONES! GANASTE :D");
  }
  if (vidasJugador == 0) {
    crearMensajeFinal("Que lastima, has perdido D:");
  }
}
function crearMensaje(resultado) {
  let nuevoAtaqueJugador = document.createElement("p");
  let nuevoAtaqueEnemigo = document.createElement("p");

  seccionMensajes.innerHTML = resultado;
  nuevoAtaqueJugador.innerHTML = ataqueJugador;
  nuevoAtaqueEnemigo.innerHTML = ataqueEnemigo;

  ataquesjugador.appendChild(nuevoAtaqueJugador);
  ataquesEnemigo.appendChild(nuevoAtaqueEnemigo);
}

function crearMensajeFinal(resultadoFinal) {
  botonFuego.disabled = true;
  botonAgua.disabled = true;
  botonPlanta.disabled = true;

  seccionMensajes.innerHTML = resultadoFinal;

  seccionReiniciar.style.display = "flex";
}

function reiniciarPartida() {
  location.reload();
}

function aleatorio(min, max) {
  return Math.floor(Math.random() * (max - min + 1) + min);
}
